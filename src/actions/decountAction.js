import { APPLY_CODE } from "./actionTypes";

export const applyCode = value => {
  return {
    type: APPLY_CODE,
    value: value === "DISCOUNT" ? 0.9 : 1
  };
};
