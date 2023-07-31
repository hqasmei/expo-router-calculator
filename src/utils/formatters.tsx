const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export const formatOperand = (operand: string | null | undefined) => {
  if (operand == null) return "";
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(parseInt(integer, 10));
  return `${INTEGER_FORMATTER.format(parseInt(integer, 10))}.${decimal}`;
};
