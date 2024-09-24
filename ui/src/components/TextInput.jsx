import { Field } from "@ark-ui/react";
import { TypoSmallRegular } from "./TypoGraphy";
import PropTypes from "prop-types";
import IconWrapper from "./IconWrapper";
import { colors } from "../../tailwind.config";

const baseClasses = `border rounded-md p-2 w-[24rem]
hover:border-primary-black hover:placeholder-primary-black`;

const variantClasses = {
  default: "border-primary-gray focus:outline-none focus:shadow-input focus:border-primary-blue",
  error: "border-primary-error focus:outline-none focus:shadow-error focus:border-primary-error",
  success:
    "border-primary-green focus:outline-none focus:shadow-success focus:border-primary-green",
};

/**
 * TextInput Component
 * @param {{
 *   variant: 'error' | 'success' | 'default',
 *   title: string,
 *   placeholder: string,
 *   required?: boolean,
 *   fullWidth?: boolean,
 *   icon?: Element
 * }} props
 */
const TextInput = ({
  fullWidth,
  title,
  placeholder,
  required,
  value,
  onChange,
  variant = "default",
  icon,
}) => {
  return (
    <Field.Root className="flex flex-col gap-1">
      <Field.Label className="text-sm text-primary-black font-semibold flex gap-1">
        {title} {required && <TypoSmallRegular color="text-primary-error">*</TypoSmallRegular>}
      </Field.Label>
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-2">
            <IconWrapper Icon={icon} color={colors.primary.black} />
          </span>
        )}
        <Field.Input
          className={`
          ${baseClasses} 
          ${variantClasses[variant]} 
          ${fullWidth && "!w-full"}
          ${icon && "pl-8"}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <Field.ErrorText className="text-xs">Error Info</Field.ErrorText>
    </Field.Root>
  );
};
TextInput.propTypes = {
  variant: PropTypes.oneOf(["error", "success", "default"]),
};

export default TextInput;