import React from "react";

import s from "./Input.module.css";

export const Input = React.forwardRef(({ className, ...rest }, ref) => (
  <input ref={ref} className={`${s.input} ${className}`} {...rest} />
));
