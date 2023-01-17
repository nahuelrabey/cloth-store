/* eslint-disable react/display-name */
import React from "react";
import type { Property } from "csstype";

type args = {
  children: JSX.Element;
  margin?: number;
};
export const Item = React.forwardRef<HTMLDivElement, args>(({children, margin}, ref) => (
  <div ref={ref} style={{ margin: margin? `0px ${margin}px` : undefined }}>
    {children}
  </div>
));
