import { Appsettings, appsettingsSchema } from "./domain";

export const getAppsettings = async (): Promise<Appsettings> => {
  try {
    const response = await fetch("/appsettings.json");

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const output = (await response.json()) as Appsettings;

    return appsettingsSchema.parse(output);
  } catch (error) {
    return {};
  }
};

// CHECKED 1.0
