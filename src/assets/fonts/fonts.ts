import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--montserrat-font",
  display: "swap",
});
