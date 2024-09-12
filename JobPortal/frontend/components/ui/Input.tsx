import { TextInput, View, Text, Pressable } from "react-native";
import React from "react";
import clsx from "clsx";
import { Eye, EyeClosed } from "iconoir-react-native";
import { useState } from "react";
import { TextInputProps } from "@/types/input";
import tw from "twrnc";

const Input = ({ placeholder, label, containerStyles }: TextInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handlePress = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={tw.style("w-full bg-[#F6F7F9] rounded-lg", containerStyles)}>
      <Text className="font-sbold text-md text-neutral-700 px-4 pt-1 pb-1">
        {label}
      </Text>
      <View className="w-full flex-row justify-between ">
        <TextInput
          placeholder={placeholder}
          className="px-3 pb-3 flex-1 placeholder:font-smedium"
          secureTextEntry={showPassword}
        />
        {label.includes("Password") && (
          <Pressable
            onPress={handlePress}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          >
            {showPassword ? (
              <EyeClosed
                color="#a9a9a9"
                width="16px"
                height="16px"
                className="mx-3 mt-2"
              />
            ) : (
              <Eye
                color="#a9a9a9"
                width="16px"
                height="16px"
                className="mx-3 mt-2"
              />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};
export default Input;
