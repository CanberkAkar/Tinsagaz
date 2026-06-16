import { Locale } from "../../../dictionaries";
import { GasProduct } from "../sinai-gazlar/gasesData.tr";
import { medikalGasesData as trData } from "./medikalData.tr";
import { medikalGasesData as enData } from "./medikalData.en";
import { medikalGasesData as deData } from "./medikalData.de";
import { medikalGasesData as frData } from "./medikalData.fr";
import { medikalGasesData as itData } from "./medikalData.it";
import { medikalGasesData as jaData } from "./medikalData.ja";

export function getMedicalGasesData(locale: Locale): GasProduct[] {
  switch (locale) {
    case "en":
      return enData;
    case "de":
      return deData;
    case "fr":
      return frData;
    case "it":
      return itData;
    case "ja":
      return jaData;
    case "tr":
    default:
      return trData;
  }
}
