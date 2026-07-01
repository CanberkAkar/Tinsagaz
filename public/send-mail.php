<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "error" => "Geçersiz istek metodu."]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

$ad = strip_tags(trim($input['ad'] ?? ''));
$soyad = strip_tags(trim($input['soyad'] ?? ''));
$email = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$telefon = strip_tags(trim($input['telefon'] ?? ''));
$konu = strip_tags(trim($input['konu'] ?? ''));
$mesaj = strip_tags(trim($input['mesaj'] ?? ''));

if (!$ad || !$soyad || !$email || !$konu || !$mesaj) {
    echo json_encode(["success" => false, "error" => "Lütfen tüm zorunlu alanları doldurun."]);
    exit;
}

// SMTP Ayarları (İsimtescil mail bilgilerinizi buraya girin)
$smtp_host = "smtp.yandex.com.tr";      // Genelde mail.domain.com veya smtp.domain.com olur
$smtp_port = 465;                      // Genelde 587 (TLS/STARTTLS) veya 465 (SSL) olur
$smtp_user = "info@tinsagaz.com";      // E-posta adresiniz
$smtp_pass = "Tinsa1995";               // E-posta şifreniz (Burayı güncelleyin)
$to = "info@tinsagaz.com";             // Mesajın gideceği adres

$subject = "Tinsagaz Iletisim: " . $konu . " - " . $ad . " " . $soyad;

$body = "
<h3>Tinsagaz Iletisim Formu Mesaji</h3>
<p><strong>Ad Soyad:</strong> {$ad} {$soyad}</p>
<p><strong>E-posta:</strong> {$email}</p>
<p><strong>Telefon:</strong> " . ($telefon ? $telefon : 'Belirtilmedi') . "</p>
<p><strong>Konu:</strong> {$konu}</p>
<hr />
<p><strong>Mesaj:</strong></p>
<p>" . nl2br($mesaj) . "</p>
";

// SMTP sunucusundan çok satırlı yanıtları doğru okumak için yardımcı fonksiyon
function get_smtp_response($socket) {
    $response = "";
    while ($line = fgets($socket, 512)) {
        $response .= $line;
        if (substr($line, 3, 1) === ' ') {
            break;
        }
    }
    return $response;
}

// SMTP mail gönderim fonksiyonu
function send_smtp_mail($to, $subject, $body, $host, $port, $user, $pass, $from_name, $reply_to, &$error_msg)
{
    $conn_host = ($port == 465) ? "ssl://" . $host : $host;
    $socket = @fsockopen($conn_host, $port, $errno, $errstr, 15);
    if (!$socket) {
        $error_msg = "Sunucuya baglanilamadi ($errno): $errstr. Port engellenmis veya yanlis olabilir.";
        return false;
    }
    
    get_smtp_response($socket); // Hoşgeldiniz mesajını oku ve temizle
    
    fwrite($socket, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
    get_smtp_response($socket); // EHLO yanıtlarının tamamını oku ve temizle
    
    // Auth login
    fwrite($socket, "AUTH LOGIN\r\n");
    $res = get_smtp_response($socket);
    if (strpos($res, '334') === false) {
        $error_msg = "AUTH LOGIN baslatilamadi: " . trim($res);
        fclose($socket);
        return false;
    }
    
    fwrite($socket, base64_encode($user) . "\r\n");
    get_smtp_response($socket);
    
    fwrite($socket, base64_encode($pass) . "\r\n");
    $res = get_smtp_response($socket);
    if (strpos($res, '235') === false) {
        $error_msg = "E-posta veya sifre kabul edilmedi (Yandex Uygulama Sifresi gerekebilir): " . trim($res);
        fclose($socket);
        return false;
    }
    
    // Sender & Recipient
    fwrite($socket, "MAIL FROM: <{$user}>\r\n");
    get_smtp_response($socket);
    
    fwrite($socket, "RCPT TO: <{$to}>\r\n");
    get_smtp_response($socket);
    
    // Data
    fwrite($socket, "DATA\r\n");
    get_smtp_response($socket);
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: =?UTF-8?B?" . base64_encode($from_name) . "?= <{$user}>\r\n";
    $headers .= "Reply-To: <{$reply_to}>\r\n";
    $headers .= "To: <{$to}>\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    
    fwrite($socket, $headers . "\r\n" . $body . "\r\n.\r\n");
    get_smtp_response($socket);
    
    fwrite($socket, "QUIT\r\n");
    fclose($socket);
    return true;
}

// Şifre girilmişse SMTP kullan, girilmemişse varsayılan mail() fonksiyonunu dene
$error_msg = "";
if ($smtp_pass !== "SIFRENIZ") {
    $from_name = "$ad $soyad (Web Form)";
    if (send_smtp_mail($to, $subject, $body, $smtp_host, $smtp_port, $smtp_user, $smtp_pass, $from_name, $email, $error_msg)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "SMTP hatasi: " . $error_msg]);
    }
} else {
    // Fallback: varsayılan php mail()
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . $smtp_user . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Varsayilan mail fonksiyonu e-postayi gonderemedi."]);
    }
}
?>