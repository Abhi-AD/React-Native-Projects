import { TextInput, TextInputProps, View, Text, Pressable } from "react-native";
import React from "react";
import clsx from "clsx";
import { Eye, EyeClosed } from "iconoir-react-native";
import { useState } from "react";
interface Props extends TextInputProps {
  label: string;
  containerStyles?: string;
}
const Input = ({ placeholder, label, containerStyles }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handlePress = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View className={clsx("w-full bg-[#F6F7F9] rounded-lg", containerStyles)}>
      <Text className="font-sbold text-md text-neutral-700 p-4 pb-1">
        {label}
      </Text>
      <View className="w-full flex-row justify-between ">
        <TextInput
          placeholder={placeholder}
          className="px-4 pb-4 flex-1 placeholder:font-smedium"
          secureTextEntry={showPassword}
        />
        {label === "Password" && (
          <Pressable
            onPress={handlePress}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          >
            {showPassword ? (
              <EyeClosed
                color="#a9a9a9"
                width="16px"
                height="16px"
                className="mx-4 mt-2"
              />
            ) : (
              <Eye
                color="#a9a9a9"
                width="16px"
                height="16px"
                className="mx-4 mt-2"
              />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};
export default Input;
