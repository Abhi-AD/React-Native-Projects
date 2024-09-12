import React from "react";
import { View, Text } from "react-native";

const HeaderLayout = ({ title, description }) => {
  return (
    <View className="bg-brandgreen rounded-br-3xl flex justify-center items-center">
      <View className="p-8 mx-auto mb-10 text-center">
        {title && <Text className="font-title text-[54px]">{title}</Text>}
        {description && <Text className="font-smedium">{description}</Text>}
      </View>
    </View>
  );
};

export default HeaderLayout;
