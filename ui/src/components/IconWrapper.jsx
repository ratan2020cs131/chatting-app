import React from "react";

const sizeConfig = {
  small: { width: 1, height: 1 },
  medium: { width: 1.2, height: 1.2 },
  large: { width: 2, height: 2 },
  xlarge: { width: 3, height: 3 },
};

/**
 * IconWrapper Component
 * @param {{
 *   size: 'small' | 'medium' | 'large' | 'xlarge',
 *   Icon: Element,
 *   color: string
 * }} props
 */
const IconWrapper = ({ Icon, color = "#0F0F0F", size = "small" }) => {
  return <Icon height={sizeConfig[size].height} width={sizeConfig[size].width} fill={color} />;
};
export default IconWrapper;
