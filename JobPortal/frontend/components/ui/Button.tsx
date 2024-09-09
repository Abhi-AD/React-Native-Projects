import { Text, Pressable, PressableProps } from "react-native";
import React, { ReactNode } from "react";
import clsx from "clsx";
type Variant = "normal" | "alternate";
interface Props extends PressableProps {
  children: ReactNode;
  variant?: Variant;
}
const Button = ({ children, variant = "normal" }: Props) => {
  return (
    <Pressable
      className={clsx("w-full rounded-[8px] px-8 py-4 items-center", {
        "bg-brandYellow": variant === "normal",
        "border rounded-[8px] border-gray-200": variant === "alternate",
      })}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
    >
      {children}
    </Pressable>
  );
};
export default Button;
