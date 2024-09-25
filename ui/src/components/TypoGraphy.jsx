export const TypoSmallRegular = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-sm`}>{children}</p>;
};

export const TypoSmallSemiBold = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-sm font-semibold`}>{children}</p>;
};

export const TypoMediumRegular = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-base`}>{children}</p>;
};

export const TypoMediumSemiBold = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-base font-semibold`}>{children}</p>;
};

export const TypoLargeRegular = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-xl`}>{children}</p>;
};

export const TypoLargeSemiBold = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-xl font-semibold`}>{children}</p>;
};

export const TypoExtraLargeRegular = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-4xl`}>{children}</p>;
};

export const TypoExtraLargeSemiBold = ({ children, color = "text-primary-black" }) => {
  return <p className={`${color} text-4xl font-semibold`}>{children}</p>;
};
