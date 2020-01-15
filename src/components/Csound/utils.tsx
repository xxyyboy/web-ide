import { ICsoundFileType } from "./types";

export function filenameToCsoundType(filename: string): ICsoundFileType | null {
    if (filename.endsWith(".csd")) {
        return "csd";
    } else if (filename.endsWith(".sco")) {
        return "sco";
    } else if (filename.endsWith(".orc")) {
        return "orc";
    } else if (filename.endsWith(".udo")) {
        return "udo";
    } else {
        return null;
    }
}
