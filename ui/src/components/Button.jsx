import React from "react";
import IconWrapper from "./IconWrapper";
import LoadingIcon from "assets/svg/LoadingIcon";
import { colors } from "../../tailwind.config";

const sizeConfig = {
  default: "px-4 py-2",
};

const variantConfig = {
  default: "text-primary-white bg-primary-blue",
  ghost: "text-primary-blue bg-primary-white border border-primary-blue",
  success: "text-primary-white bg-primary-green",
};

/**
 * Button Component
 * @param {{
 *  icon?: Element,
 *  onClick: Function,
 *  title: string,
 *  size?: string,
 *  fullWidth?: boolean,
 *  variant?: 'default' | 'ghost' | 'success',
 *  loading?: boolean,
 * }} props
 */

const Button = ({
  icon,
  onClick,
  title,
  size = "default",
  fullWidth,
  variant = "default",
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-md font-semibold flex items-center gap-2
        ${variantConfig[variant]}
        ${sizeConfig[size]} 
        ${fullWidth && "flex-1"}
        `}
    >
      {title}
      {(loading || icon) && (
        <IconWrapper
          Icon={loading ? LoadingIcon : icon}
          color={colors.primary[variant === "ghost" ? "blue" : "white"]}
        />
      )}
    </button>
  );
};
export default Button;
