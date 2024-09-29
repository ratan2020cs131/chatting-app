import React from "react";
import IconWrapper from "./IconWrapper";
import { LoadingIcon } from "assets/svg";
import { colors } from "root/tailwind.config";
import Tooltip from "components/Tooltip";

const sizeConfig = {
  default: "px-4 py-2",
};

const variantConfig = {
  default: "text-primary-white bg-primary-blue",
  ghost: "text-primary-blue bg-primary-white border border-primary-blue",
  success: "text-primary-white bg-primary-green",
};

const disabledClasses = "cursor-default border-none !bg-primary-gray !text-secondary-gray";

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
    <Tooltip tooltip={tooltip} fullWidth={fullWidth}>
      <button
        onClick={onClick}
        className={`
        rounded-md font-semibold flex items-center gap-2 justify-center
        ${variantConfig[variant]}
        ${sizeConfig[size]} 
        ${fullWidth && "w-full"}
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
