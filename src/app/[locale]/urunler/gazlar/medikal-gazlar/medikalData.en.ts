import { GasProduct } from "../sinai-gazlar/gasesData.tr";

export const medikalGasesData: GasProduct[] = [
  {
    slug: "medikal-oksijen-gazi",
    title: "Medical Oxygen Gas (O₂)",
    badge: "Medical Gases",
    icon: "🏥",
    desc: "Medical Oxygen (O₂), the most fundamental and critical component of life support in the healthcare sector, is a vital medical product manufactured in full compliance with Ministry of Health regulations, CE Medical directives, and Good Manufacturing Practice (GMP) norms.",
    features: [
      "100% compliance with Ministry of Health and GMP norms",
      "High-security cylinders with medical disinfection and internal cleaning",
      "Uninterrupted flow and stable purity assurance"
    ],
    usageAreas: [
      "Intensive Care and Respiratory Therapy (Oxygen therapy)",
      "Operating Room and Anesthesia Processes (Dilution and oxygenation)",
      "Hyperbaric Oxygen Treatments (Carbon monoxide poisoning, decompression sickness, etc.)"
    ],
    specifications: [
      { label: "Chemical Formula", value: "O₂" },
      { label: "Cylinder Filling Pressure", value: "150 - 230 Bar" },
      { label: "Central System Pressure", value: "230 Bar (Bundle)" },
      { label: "Quality Norms", value: "GMP / CE Medical / Ministry of Health" }
    ],
    content: "Medical Oxygen (O₂), the most fundamental and critical component of life support in the healthcare sector, is a vital medical product manufactured in full compliance with Ministry of Health regulations, CE Medical directives, and Good Manufacturing Practice (GMP) norms. Used across a wide clinical spectrum from hospital intensive care units to operating theaters, emergency services, and anesthesia applications, it serves as the primary lifeline for respirator inhalation therapies and patients with respiratory failure. As Tinsa Gaz, we perform medical oxygen gas filling on our cylinder lines where internal surface cleaning and medical disinfection processes are meticulously carried out, adhering to the highest patient health and safety standards.",
    supplyModels: [
      {
        title: "1. High-Pressure Medical Oxygen Cylinders",
        desc: "Designed for ambulances, emergency response units, clinics, and mobile bedside uses. Delivered with full safety in high-security medical cylinders cleaned according to medical norms, with a working pressure of 150 to 230 bar depending on healthcare infrastructure."
      },
      {
        title: "2. Central Gas Plant Manifold Systems (Bundle)",
        desc: "Manifold solutions developed for the central gas rooms of large-scale hospitals, university medical centers, and healthcare complexes with continuous high-volume oxygen consumption. According to Tinsa Gaz's medical infrastructure standards, a 230 bar filling standard is applied to guarantee uninterrupted flow and stable line pressure, eliminating sudden pressure drop risks."
      }
    ],
    safetyWarning: "Safety Warning & Technical Standard: Although medical oxygen is not flammable on its own, it supports combustion very intensely and rapidly. Therefore, bedside units, medical valve and regulator systems, and medical installation components must never come into contact with oil, grease, or other organic substances. All medical fittings shipped by Tinsa Gaz are subject to absolute 'medical oxygen cleaning' standards."
  },
  {
    slug: "azot-protoksit-gazi",
    title: "Medical Nitrous Oxide Gas (N₂O)",
    badge: "Medical Gases",
    icon: "🏥",
    desc: "Nitrous Oxide (N₂O), one of the most established and reliable agents of clinical anesthesia applications, known in industry and medicine as 'Anesthetic Gas' or colloquially as 'Laughing Gas', is a medical gas with a sweetish odor and colorless physical structure.",
    features: [
      "100% compliance with GMP standards and medical directives",
      "Filling guarantee based on precise net weight in kilograms (kg) on digital scales",
      "Strong analgesic (pain reliever) and sedative (calming) effect"
    ],
    usageAreas: [
      "Operating Room and General Anesthesia: During surgical operations, it is mixed with medical oxygen and other volatile anesthetic agents in specific combinations to induce general anesthesia and keep anesthesia depth stable.",
      "Dentistry and Sedation: Widely preferred in controlled conscious sedation processes in dental surgery procedures to eliminate fear and anxiety and raise the pain threshold.",
      "Pediatrics and Delivery Room Applications: Provides clinical comfort in pediatric surgery and childbirth pain relief, thanks to its rapid onset and offset of analgesic effect and relaxing nature."
    ],
    specifications: [
      { label: "Chemical Formula", value: "N₂O" },
      { label: "Storage / Filling Standard", value: "Liquid Phase / Precision Weighing (kg)" },
      { label: "Supply Standard", value: "Billing Based on Net Kilograms" },
      { label: "Quality Norms", value: "GMP / CE Medical / Ministry of Health" }
    ],
    content: "Nitrous Oxide (N₂O), one of the most established and reliable agents of clinical anesthesia applications, known in industry and medicine as 'Anesthetic Gas' or colloquially as 'Laughing Gas', is a medical gas with a sweetish odor and colorless physical structure. Provided in full compliance with medical directives and GMP (Good Manufacturing Practices) guidelines, this gas undertakes critical clinical duties in modern hospital operations thanks to its strong analgesic (pain-relieving) and sedative (calming) properties. Due to its physical characteristics and critical temperature, Nitrous Oxide gas is stored in liquid phase under high pressure within medical cylinders. Therefore, quantity determination and billing processes are carried out by weighing on a net kilogram (kg) basis on digital scales, unlike other medical gases that are measured by pressure. At Tinsa Gaz, we fill each cylinder meticulously on our fully automated medical filling lines, shipping with full weight assurance.",
    supplyModels: [
      {
        title: "1. Medical Nitrous Oxide Cylinders",
        desc: "The most common logistics model for operating rooms, dental clinics, and surgical centers. Since the quantity inside the cylinder cannot be read by pressure, all medical N₂O cylinders filled within Tinsa Gaz are weighed on a kilogram (kg) basis on computerized precision scales, and sales are billed entirely on a net kilogram basis. Leakage and valve safety are subjected to medical tests before each filling."
      },
      {
        title: "2. Central Anesthesia Gas Plant Solutions",
        desc: "Manifold and pallet combinations developed to provide uninterrupted product to the central anesthesia gas rooms of large hospital complexes. In these high-volume solutions compliant with Ministry of Health regulations, filling and delivery criteria, along with safety margins, are strictly managed according to kilogram (kg) based precision weighing standards."
      }
    ],
    safetyWarning: "Technical Warning & Safety Standard: Although Nitrous Oxide gas is not toxic on its own, its accumulation in poorly ventilated, closed operating room environments can cause loss of concentration and fatigue in healthcare staff. Therefore, the perfect operation of waste anesthetic gas scavenging systems (scavenger) and general medical ventilation infrastructure is a critical OHS and patient safety rule."
  },
  {
    slug: "medikal-kuru-hava-gazi",
    title: "Medical Dry Air (Medical Air)",
    badge: "Medical Gases",
    icon: "🏥",
    desc: "Medical Dry Air (Medical Air), which forms the operational heart of operating rooms, intensive care units, and respiratory clinics, is a medical gas mixture produced in pharmaceutical purity, completely different from ordinary industrial or compressor air.",
    features: [
      "100% compliance with Ministry of Health regulations and international standards",
      "Completely free from oil vapor, bacteria, microorganisms, and moisture",
      "Technology that protects lung health and ensures error-free operation of surgical systems"
    ],
    usageAreas: [
      "Respiratory Devices and Ventilator Lines: Continuous delivery to patients on artificial respirators in intensive care to dilute pure medical oxygen, providing the ideal physiological atmosphere.",
      "Surgical Pneumatic Tools (Driving Force): Provides high-stability and sterile drive power for pneumatic precision surgical instruments like bone saws, drills, files, and micro-motors.",
      "Anesthesia Machines and Incubator Ventilation: Undertakes critical clinical roles as a carrier gas component in anesthesia circuits and for the sterile, low-humidity air needs of premature infants in incubators."
    ],
    specifications: [
      { label: "Composition Standard", value: "Dry air of medical purity (21% O₂ - 79% N₂)" },
      { label: "Pressure Standard (Cylinders)", value: "150 - 230 Bar" },
      { label: "Central System Pressure", value: "230 Bar (Bundle)" },
      { label: "Quality Norms", value: "GMP / CE Medical / Ministry of Health / Dew Point Control" }
    ],
    content: "Medical Dry Air (Medical Air), which forms the operational heart of operating rooms, intensive care units, and respiratory clinics, is a medical gas mixture produced in pharmaceutical purity, completely different from ordinary industrial or compressor air. Compliant with Ministry of Health medical device regulations and international medical standards (dew point and particle limits), this product is completely free of oil vapor, bacteria, microorganisms, and moisture. Since it directly contacts human airways and critical surgical hand tools, its quality is monitored instantaneously. At Tinsa Gaz, in our high-tech medical filling facilities, we provide high-quality medical dry air supply that protects lung health at the highest level and ensures error-free operation of surgical systems.",
    supplyModels: [
      {
        title: "1. High-Pressure Medical Dry Air Cylinders",
        desc: "Developed for clinics with sensitive consumption, independent surgical centers, and mobile emergency units. Delivered with full safety in high-security medical cylinders tested for bacteria and moisture, with a working pressure of 150 to 230 bar depending on regulator infrastructure."
      },
      {
        title: "2. Central Hospital Air Room Pallet Solutions (Bundle)",
        desc: "Manifold-connected pallet systems developed for large scale and public hospitals requiring 24/7 uninterrupted ventilator and operating room air. In these medical systems where gas quality, flow rate, and dew point must not fluctuate, Tinsa Gaz offers a 230 bar filling standard as an absolute single pressure standard, preventing pressure drops in central hospital gas lines."
      }
    ],
    safetyWarning: "Technical Warning & Safety Standard: Since Medical Dry Air directly reaches the patient's lung alveoli, it is imperative that the moisture content (dew point) and oil content are virtually zero. Humid air can lead to bacterial growth in respiratory lines and corrosion of surgical tools, causing them to lock during surgery. All medical air systems shipped by Tinsa Gaz undergo strict purity and moisture analysis."
  },
  {
    slug: "medikal-karbondioksit-gazi",
    title: "Medical Carbon Dioxide Gas (CO₂)",
    badge: "Medical Gases",
    icon: "🏥",
    desc: "Medical Carbon Dioxide (CO₂), one of the most critical components of modern surgical procedures and minimally invasive operations, is a high-purity medical product offered in full compliance with the Ministry of Health medical device and drug regulations, CE Medical directives, and Good Manufacturing Practice (GMP) norms.",
    features: [
      "Full compliance with Ministry of Health and GMP standards",
      "Filling guarantee based on precise net weight in kilograms (kg) on digital scales",
      "High freezing power of the liquid phase for cryotherapy"
    ],
    usageAreas: [
      "Laparoscopic and Endoscopic Surgery (Abdominal Inflation): Used as the primary gas for inflating the abdominal cavity (insufflation) in closed surgeries (laparoscopy) to create a surgical view and working area. It is clinically the safest option due to its ability to be rapidly absorbed by the body and eliminated through respiration.",
      "Cryosurgery and Dermatological Applications: Used as a local therapeutic agent in procedures to freeze and destroy abnormal tissues, warts, or tumors (cryotherapy) due to the high cooling capacity of the liquid phase.",
      "Respiratory Stimulation and Laboratory Processes: Plays a role in special breathing mixtures combined with medical oxygen to stimulate the respiratory center in certain clinical situations, and in incubator units to create a controlled atmosphere for cellular development."
    ],
    specifications: [
      { label: "Chemical Formula", value: "CO₂" },
      { label: "Storage / Filling Standard", value: "Liquid Phase / Precision Weighing (kg)" },
      { label: "Supply Standard", value: "Billing Based on Net Kilograms" },
      { label: "Quality Norms", value: "GMP / CE Medical / Ministry of Health" }
    ],
    content: "Medical Carbon Dioxide (CO₂), one of the most critical components of modern surgical procedures and minimally invasive operations, is a high-purity medical product offered in full compliance with the Ministry of Health medical device and drug regulations, CE Medical directives, and Good Manufacturing Practice (GMP) norms. Due to its physical characteristics, carbon dioxide gas is stored in liquid phase under high pressure within medical cylinders. Because of this physical structure, quantity determination and logistics tracking are carried out by weighing on a net kilogram (kg) basis on digital scales, not by pressure gauges (bar). At Tinsa Gaz, we meticulously weigh every cylinder and pallet on our fully automated medical filling lines, guaranteeing operating room safety and exact weight.",
    supplyModels: [
      {
        title: "1. Medical Carbon Dioxide Cylinders",
        desc: "Our highly secure solutions optimized for operating rooms, IVF centers, and endoscopy clinics. Due to the liquid phase structure of carbon dioxide, all individual medical CO₂ cylinders filled at Tinsa Gaz facilities are shipped after being weighed on a net kilogram (kg) basis on precision digital scales, and sales are billed entirely on a net kilogram basis."
      },
      {
        title: "2. Central Gas Plant Manifold Systems (Bundle)",
        desc: "Volume manifold systems developed for general hospitals and medical faculties with continuous and intense closed surgical operation cycles. According to Tinsa Gaz's medical quality policy, processes in all central manifold pallet deliveries are also managed under strict weighing (kg) standards and safety limits. This logistics model completely eliminates product interruptions in the lines during operations."
      }
    ],
    safetyWarning: "Technical Warning & Safety Standard: Although Medical Carbon Dioxide gas is not toxic, it is heavier than air. In the event of a leak, it accumulates at ground level, lowering the oxygen concentration and creating a stealthy suffocation risk. Therefore, it is a critical OHS and patient safety rule to have ground-level ventilation systems and carbon dioxide detection detectors in areas where medical CO₂ cylinders and pallets are stored."
  }
];
