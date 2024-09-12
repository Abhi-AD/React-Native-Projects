import { SearchBarProps } from "@/types/input";
import React from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, Icon }) => {
  return (
    <View
      style={tw`flex flex-row items-center bg-white rounded-lg p-2.5 m-2.5`}
    >
      <TextInput
        style={tw`flex-1 text-base text-[#333]`}
        placeholder={placeholder}
        placeholderTextColor="#AAA"
      />
      <View style={tw`ml-2 bg-[#FFE70A] rounded-[12px] p-2`}>
        <Icon width="24px" height="24px" color="black" />
      </View>
    </View>
  );
};

export default SearchBar;
