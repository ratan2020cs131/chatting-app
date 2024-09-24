import React from "react";
import { NavLink } from "react-router-dom";

const variantConfig = {
  default: "decoration-secondary-link text-secondary-link",
  success: "decoration-secondary-green text-secondary-green",
  error: "decoration-primary-error text-primary-error",
};

/**
 * TextInput Component
 * @param {{
 *   variant?: 'default' | 'success' | 'error',
 *   target?: '_self' | '_blank',
 *   to: string,
 *   text: string,
 * }} props
 */
const Link = ({ to, text = "Link", target = "_self", variant = "default" }) => {
  return (
    <NavLink
      className={`
        underline underline-offset-2 decoration-1 
        ${variantConfig[variant]}
        `}
      to={to}
      target={target}
    >
      {text}
    </NavLink>
  );
};
export default Link;
