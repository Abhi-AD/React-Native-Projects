import { JobListProps } from "@/types/input";
import React from "react";
import { View, Text } from "react-native";
import { City, MapPin } from "iconoir-react-native";
import tw from "twrnc";

const JobList: React.FC<JobListProps> = ({
  title,
  company,
  location,
  isNew,
}) => {
  return (
    <View
      style={tw`bg-white p-1.5 rounded-lg shadow-md mb-2 flex-row justify-between min-w-[300px] mx-auto`}
    >
      <View style={tw`flex flex-col gap-1`}>
        <Text style={tw`text-sm font-semibold`}>{title}</Text>
        <View style={tw`flex-row items-center`}>
          <City width="18px" height="18px" color="black" />
          <Text style={tw`text-[12px] text-gray-600`}>{company}</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <MapPin width="18px" height="18px" color="black" />
          <Text style={tw`text-[12px] text-gray-500`}>{location}</Text>
        </View>
      </View>
      {isNew && (
        <View style={tw`bg-[#FFE70A] px-2 py-1 h-8 rounded`}>
          <Text style={tw`text-black text-xs`}>New</Text>
        </View>
      )}
    </View>
  );
};

export default JobList;
