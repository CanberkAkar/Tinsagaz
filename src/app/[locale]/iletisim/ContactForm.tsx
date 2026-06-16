"use client";

import { useState } from "react";
import styles from "./iletisim.module.css";

const subjectsByLocale: Record<string, string[]> = {
  tr: ["Ürün Teklifi", "Medikal Gazlar", "Endüstriyel Gazlar", "Çelik Ürünleri", "Elektrik Sistemleri", "Tüp Sistemleri", "Ağır Makineler", "Teknik Destek", "Diğer"],
  en: ["Product Quote", "Medical Gases", "Industrial Gases", "Steel Products", "Electrical Systems", "Cylinder Systems", "Heavy Machinery", "Technical Support", "Other"],
  de: ["Produktangebot", "Medizinische Gase", "Industriegase", "Stahlprodukte", "Elektrosysteme", "Flaschensysteme", "Schwere Maschinen", "Technischer Support", "Andere"],
  fr: ["Devis de Produit", "Gaz Médicaux", "Gaz Industriels", "Produits en Acier", "Systèmes Électriques", "Systèmes de Bouteilles", "Machines Lourdes", "Support Technique", "Autre"],
  it: ["Preventivo Prodotto", "Gas Medicali", "Gas Industriali", "Prodotti in Acciaio", "Sistemi Elettrici", "Sistemi di Bombole", "Macchinari Pesanti", "Supporto Tecnico", "Altro"],
  ja: ["製品のお見積り", "医療用ガス", "産業用ガス", "鉄鋼製品", "電気システム", "高圧シリンダーシステム", "重機械", "技術サポート", "その他"],
};

export default function ContactForm({ locale, contactDict }: { locale: string; contactDict: any }) {
  const [formState, setFormState] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
    konu: "",
    mesaj: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const subjects = subjectsByLocale[locale] || subjectsByLocale.tr;

  const labels = {
    ad: locale === "tr" ? "Ad *" : locale === "en" ? "First Name *" : locale === "de" ? "Vorname *" : locale === "fr" ? "Prénom *" : locale === "it" ? "Nome *" : "名 *",
    adPlaceholder: locale === "tr" ? "Adınız" : locale === "en" ? "Your First Name" : locale === "de" ? "Ihr Vorname" : locale === "fr" ? "Votre prénom" : locale === "it" ? "Il tuo nome" : "名",
    soyad: locale === "tr" ? "Soyad *" : locale === "en" ? "Last Name *" : locale === "de" ? "Nachname *" : locale === "fr" ? "Nom *" : locale === "it" ? "Cognome *" : "姓 *",
    soyadPlaceholder: locale === "tr" ? "Soyadınız" : locale === "en" ? "Your Last Name" : locale === "de" ? "Ihr Nachname" : locale === "fr" ? "Votre nom" : locale === "it" ? "Il tuo cognome" : "姓",
    email: contactDict.form.email + " *",
    emailPlaceholder: "example@email.com",
    telefon: contactDict.form.phone,
    telefonPlaceholder: "+90 5XX XXX XX XX",
    konu: locale === "tr" ? "Konu *" : locale === "en" ? "Subject *" : locale === "de" ? "Betreff *" : locale === "fr" ? "Sujet *" : locale === "it" ? "Oggetto *" : "件名 *",
    konuSelect: locale === "tr" ? "Konu seçin..." : locale === "en" ? "Select subject..." : locale === "de" ? "Betreff wählen..." : locale === "fr" ? "Sélectionnez un sujet..." : locale === "it" ? "Seleziona oggetto..." : "件名を選択...",
    mesaj: contactDict.form.message + " *",
    mesajPlaceholder: locale === "tr" ? "Mesajınızı buraya yazın..." : locale === "en" ? "Write your message here..." : locale === "de" ? "Schreiben Sie Ihre Nachricht hier..." : locale === "fr" ? "Écrivez votre message ici..." : locale === "it" ? "Scrivi il tuo messaggio qui..." : "メッセージをここに入力...",
    sending: locale === "tr" ? "Gönderiliyor..." : locale === "en" ? "Sending..." : locale === "de" ? "Wird gesendet..." : locale === "fr" ? "Envoi en cours..." : locale === "it" ? "Invio in corso..." : "送信中...",
    successBtn: locale === "tr" ? "✓ Mesajınız İletildi" : locale === "en" ? "✓ Message Sent" : locale === "de" ? "✓ Nachricht gesendet" : locale === "fr" ? "✓ Message envoyé" : locale === "it" ? "✓ Messaggio Inviato" : "✓ 送信完了",
    successMsg: locale === "tr" ? "✅ Teşekkürler! Mesajınız başarıyla iletildi. En kısa sürede size geri döneceğiz." : locale === "en" ? "✅ Thank you! Your message was sent successfully. We will get back to you soon." : locale === "de" ? "✅ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze." : locale === "fr" ? "✅ Merci! Votre message a été envoyé avec succès. Nous vous répondrons bientôt." : locale === "it" ? "✅ Grazie! Il tuo messaggio è stato inviato con successo. Ti risponderemo al più presto." : "✅ お問い合わせありがとうございます。メッセージは正常に送信されました。追ってご連絡いたします。",
  };

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <div className={styles.contactFormCol}>
      <div className={styles.contactFormCard}>
        <h2 className={styles.contactFormTitle}>{contactDict.form.title}</h2>
        <p className={styles.contactFormSubtitle}>
          {locale === "tr" ? "Formu doldurun, 24 saat içinde size geri dönelim." : "Fill out the form, we will get back to you within 24 hours."}
        </p>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="İletişim formu"
        >
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="form-ad" className={styles.formLabel}>{labels.ad}</label>
              <input
                id="form-ad"
                name="ad"
                type="text"
                value={formState.ad}
                onChange={handleChange}
                placeholder={labels.adPlaceholder}
                className={styles.formInput}
                required
                autoComplete="given-name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-soyad" className={styles.formLabel}>{labels.soyad}</label>
              <input
                id="form-soyad"
                name="soyad"
                type="text"
                value={formState.soyad}
                onChange={handleChange}
                placeholder={labels.soyadPlaceholder}
                className={styles.formInput}
                required
                autoComplete="family-name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-email" className={styles.formLabel}>{labels.email}</label>
              <input
                id="form-email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder={labels.emailPlaceholder}
                className={styles.formInput}
                required
                autoComplete="email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-telefon" className={styles.formLabel}>{labels.telefon}</label>
              <input
                id="form-telefon"
                name="telefon"
                type="tel"
                value={formState.telefon}
                onChange={handleChange}
                placeholder={labels.telefonPlaceholder}
                className={styles.formInput}
                autoComplete="tel"
              />
            </div>
            <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
              <label htmlFor="form-konu" className={styles.formLabel}>{labels.konu}</label>
              <select
                id="form-konu"
                name="konu"
                value={formState.konu}
                onChange={handleChange}
                className={styles.formSelect}
                required
              >
                <option value="">{labels.konuSelect}</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
              <label htmlFor="form-mesaj" className={styles.formLabel}>{labels.mesaj}</label>
              <textarea
                id="form-mesaj"
                name="mesaj"
                value={formState.mesaj}
                onChange={handleChange}
                placeholder={labels.mesajPlaceholder}
                className={styles.formTextarea}
                required
                rows={5}
              />
            </div>
          </div>

          <button
            id="form-submit-btn"
            type="submit"
            className={styles.formSubmit}
            disabled={loading || submitted}
            aria-busy={loading}
          >
            {loading ? labels.sending : submitted ? labels.successBtn : contactDict.form.send + " →"}
          </button>

          {submitted && (
            <div className={styles.formSuccess} role="alert">
              {labels.successMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
