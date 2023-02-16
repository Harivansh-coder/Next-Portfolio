import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }: any) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(20 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={5}
      iterations={3}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
