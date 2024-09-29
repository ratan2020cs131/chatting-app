import { ChevronDownIcon } from "assets/svg";
import { Portal, Select, createListCollection } from "@ark-ui/react";
import IconWrapper from "./IconWrapper";
import { useState } from "react";
import { colors } from "root/tailwind.config";
import { useRef } from "react";
import { useEffect } from "react";
import { TypoSmallRegular } from "./TypoGraphy";

const baseClasses = `flex relative items-center border rounded-md p-2 w-full hover:border-primary-black`;

const variantClasses = {
  default: "border-primary-gray focus:outline-none focus:shadow-input focus:border-primary-blue",
  error: "border-primary-error focus:outline-none focus:shadow-error focus:border-primary-error",
  success:
    "border-primary-green focus:outline-none focus:shadow-success focus:border-primary-green",
};

const disabledClasses =
  "hover:placeholder-secondary-gray placeholder-secondary-gray border-none !bg-primary-gray !text-secondary-gray";

const SelectDropdown = ({
  options = [],
  title,
  placeholder,
  variant = "default",
  value,
  onChange,
  required,
  fullWidth,
  width,
}) => {
  const triggerRef = useRef(null);
  const [panelWidth, setPanelWidth] = useState(0);

  useEffect(() => {
    if (triggerRef.current) {
      setPanelWidth(triggerRef.current.offsetWidth);
    }
  }, [triggerRef.current]);

  const collection = createListCollection({
    items: options,
  });

  return (
    <Select.Root
      ref={triggerRef}
      collection={collection}
      className={`flex flex-col gap-1 ${fullWidth ? "w-full" : width ? width : "w-[24rem]"}`}
    >
      <Select.Label className="text-sm text-primary-black font-semibold flex gap-1">
        {title}
        {required && <TypoSmallRegular color="text-primary-error">*</TypoSmallRegular>}
      </Select.Label>
      <Select.Control>
        <Select.Trigger
          className={`
            ${baseClasses}
            ${variantClasses[variant]}
            `}
        >
          <Select.ValueText
            className={`
            w-full text-left text-primary-${value ? "black" : "gray"} 
            hover:text-primary-black
            `}
            placeholder={value ? collection.find(value).label : placeholder}
          />
          <Select.Indicator className="absolute right-2">
            <IconWrapper size="medium" Icon={ChevronDownIcon} color={colors.secondary.gray} />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner style={{ minWidth: `${panelWidth / 16}rem` }}>
          <Select.Content className="overflow-hidden w-full shadow-dropdown rounded-md bg-primary-white border border-primary-gray">
            {collection.items.map((item) => (
              <Select.Item
                key={item.value}
                className={`
                    px-3 py-2 hover:bg-light-gray
                    ${item.disabled ? "text-primary-gray cursor-default" : "cursor-pointer"}
                    ${value === item.value && "bg-primary-gray"}
                `}
                onClick={() => {
                  onChange(item.value);
                }}
              >
                <Select.ItemText>{item.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};

export default SelectDropdown;
