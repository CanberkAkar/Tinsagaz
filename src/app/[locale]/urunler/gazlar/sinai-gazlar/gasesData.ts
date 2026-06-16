import { Locale } from "../../../dictionaries";
import { gasesData as trGasesData } from "./gasesData.tr";
import { enGasesData } from "./gasesData.en";
import { deGasesData } from "./gasesData.de";
import { frGasesData } from "./gasesData.fr";
import { itGasesData } from "./gasesData.it";
import { jaGasesData } from "./gasesData.ja";

export interface GasProduct {
  slug: string;
  title: string;
  badge?: string;
  icon?: string;
  desc: string;
  features?: string[];
  usageAreas?: string[];
  specifications?: { label: string; value: string }[];
  content?: string;
  supplyModels?: { title: string; desc: string }[];
  safetyWarning?: string;
}

// Fallback to Turkish
export const gasesData = trGasesData;

export const getGasesData = (locale: Locale): GasProduct[] => {
  switch (locale) {
    case "en":
      return enGasesData;
    case "de":
      return deGasesData;
    case "fr":
      return frGasesData;
    case "it":
      return itGasesData;
    case "ja":
      return jaGasesData;
    case "tr":
    default:
      return trGasesData;
  }
};
