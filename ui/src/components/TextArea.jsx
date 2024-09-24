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
 * TextArea Component
 * @param {{
 *   variant: 'error' | 'success' | 'default',
 *   title: string,
 *   placeholder: string,
 *   required?: boolean,
 *   fullWidth?: boolean,
 * }} props
 */
const TextArea = ({
  fullWidth,
  title,
  placeholder,
  required,
  value,
  onChange,
  variant = "default",
}) => {
  return (
    <Field.Root className="flex flex-col gap-1">
      <Field.Label className="text-sm text-primary-black font-semibold flex gap-1">
        {title} {required && <TypoSmallRegular color="text-primary-error">*</TypoSmallRegular>}
      </Field.Label>
      <Field.Textarea
        className={`
          ${baseClasses} 
          ${variantClasses[variant]} 
          ${fullWidth && "!w-full"}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Field.ErrorText className="text-xs">Error Info</Field.ErrorText>
    </Field.Root>
  );
};
TextArea.propTypes = {
  variant: PropTypes.oneOf(["error", "success", "default"]),
};

export default TextArea;
