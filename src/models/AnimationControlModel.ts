export type AnimationControlId = "rotation" | "sliding" | "fade" | "scale";

export type AnimationControlModel = {
  id: AnimationControlId;
  label: string;
  weight: number;
};
