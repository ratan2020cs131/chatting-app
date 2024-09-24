export const TypoSmallRegular = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-sm`}>{children}</p>;
};

export const TypoSmallSemiBold = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-sm font-semibold`}>{children}</p>;
};
