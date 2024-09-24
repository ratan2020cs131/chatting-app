import React from "react";
import IconWrapper from "./IconWrapper";
import LoadingIcon from "assets/svg/LoadingIcon";
import { colors } from "../../tailwind.config";
import Tooltip from "./Tooltip";

const sizeConfig = {
  default: "px-4 py-2",
};

const variantConfig = {
  default: "text-primary-white bg-primary-blue",
  ghost: "text-primary-blue bg-primary-white border border-primary-blue",
  success: "text-primary-white bg-primary-green",
};

const disabledClasses = "border-none !bg-primary-gray !text-secondary-gray";

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
 *  disabled?: boolean,
 *  tooltip?: string,
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
  disabled,
  tooltip,
}) => {
  return (
    <Tooltip tooltip={tooltip}>
      <button
        onClick={onClick}
        className={`
        rounded-md font-semibold flex items-center gap-2
        ${variantConfig[variant]}
        ${sizeConfig[size]} 
        ${fullWidth && "flex-1"}
        ${disabled && disabledClasses}
        `}
      >
        {title}
        {(loading || icon) && (
          <IconWrapper
            Icon={loading ? LoadingIcon : icon}
            color={
              colors[disabled ? "secondary" : "primary"][
                disabled ? "gray" : variant === "ghost" ? "blue" : "white"
              ]
            }
          />
        )}
      </button>
    </Tooltip>
  );
};
export default Button;
