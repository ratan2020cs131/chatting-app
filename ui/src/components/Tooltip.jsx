import { Tooltip as ArkTooltip } from "@ark-ui/react";
import { TypoSmallRegular, TypoSmallSemiBold } from "./TypoGraphy";

const Tooltip = ({ children, tooltip }) => (
  <ArkTooltip.Root>
    <ArkTooltip.Trigger className="flex">{children}</ArkTooltip.Trigger>
    <ArkTooltip.Positioner>
      {tooltip && (
        <ArkTooltip.Content className="px-3 py-2 rounded-lg bg-primary-white shadow-overlay">
          {tooltip}
        </ArkTooltip.Content>
      )}
    </ArkTooltip.Positioner>
  </ArkTooltip.Root>
);
export default Tooltip;
