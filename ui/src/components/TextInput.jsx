import { Field } from "@ark-ui/react";
import { TypoSmallRegular } from "./TypoGraphy";
import IconWrapper from "./IconWrapper";
import { colors } from "../../tailwind.config";
import { useState } from "react";
import { ClosedEyeIcon, OpenEyeIcon } from "assets/svg";
import { useCallback } from "react";
import IconButton from "./IconButton";

const baseClasses = `border rounded-md p-2 w-full
hover:border-primary-black hover:placeholder-primary-black`;

const variantClasses = {
  default: "border-primary-gray focus:outline-none focus:shadow-input focus:border-primary-blue",
  error: "border-primary-error focus:outline-none focus:shadow-error focus:border-primary-error",
  success:
    "border-primary-green focus:outline-none focus:shadow-success focus:border-primary-green",
};

const disabledClasses =
  "hover:placeholder-secondary-gray placeholder-secondary-gray border-none !bg-primary-gray !text-secondary-gray";

/**
 * TextInput Component
 * @param {{
 *   variant: 'error' | 'success' | 'default',
 *   title?: string,
 *   placeholder: string,
 *   required?: boolean,
 *   fullWidth?: boolean,
 *   secret?: boolean,
 *   icon?: Element
 *   disabled?: boolean
 * }} props
 */
const TextInput = ({
  fullWidth,
  title,
  placeholder = "Enter value",
  required,
  value,
  onChange,
  variant = "default",
  icon,
  type = "text",
  secret,
  disabled,
}) => {
  const [show, setShow] = useState(!secret);
  const toggleHide = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <Field.Root className={`flex flex-col gap-1 ${fullWidth ? "flex-1" : "w-[24rem]"}`}>
      <Field.Label className="text-sm text-primary-black font-semibold flex gap-1">
        {title} {required && <TypoSmallRegular color="text-primary-error">*</TypoSmallRegular>}
      </Field.Label>
      <div className={`relative flex items-center`}>
        {icon && (
          <span className="absolute left-2">
            <IconWrapper Icon={icon} color={colors.secondary.gray} />
          </span>
        )}
        <Field.Input
          className={`
            ${baseClasses} 
            ${variantClasses[variant]}
            ${icon && "pl-8"}
            ${disabled && disabledClasses}
            `}
          disabled={disabled}
          type={!show ? "password" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!disabled && secret && (
          <span className="absolute right-2">
            <IconButton
              icon={show ? ClosedEyeIcon : OpenEyeIcon}
              color={colors.secondary.gray}
              onClick={toggleHide}
              tooltip={show ? "Hide" : "Show"}
              size="medium"
            />
          </span>
        )}
      </div>
      <Field.ErrorText className="text-xs">Error Info</Field.ErrorText>
    </Field.Root>
  );
};

export default TextInput;
