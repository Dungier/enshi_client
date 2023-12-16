export interface ISwitchType {
  setType: (type: "new" | "high-rated") => void;
  type: "new" | "high-rated";
}
