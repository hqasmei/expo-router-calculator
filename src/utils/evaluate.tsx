import { State } from "@/types";

export const evaluate = (state: State): string => {
  const { currentOperand, previousOperand, operation } = state;
  const prev = parseFloat(previousOperand ?? "0");
  const current = parseFloat(currentOperand ?? "0");
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";

  console.log(prev, current)
  switch (operation) {
    case "+":
      computation = (prev + current).toString();
      break;
    case "-":
      computation = (prev - current).toString();
      break;
    case "×":
      computation = (prev * current).toString();
      break;
    case "÷":
      computation = (prev / current).toString();
      break;
    case "%":
      computation = (current / 100).toString();
      break;
  }

  return computation;
};
