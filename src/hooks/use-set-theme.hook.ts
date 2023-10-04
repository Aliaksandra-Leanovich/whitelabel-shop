import { TimeZones } from "@/enums/TimeZones";

export const useSetTheme = (city: string): string => {
  const indexOfKey = Object.keys(TimeZones).indexOf(city);

  return Object.values(TimeZones)[indexOfKey];
};
