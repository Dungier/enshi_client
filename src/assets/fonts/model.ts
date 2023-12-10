import { clsx } from "clsx";

import { montserrat } from "./fonts";

/**
 * @return {string} - combined next fonts
 */
export const getFonts = (): string => {
  return clsx(montserrat.variable);
};
