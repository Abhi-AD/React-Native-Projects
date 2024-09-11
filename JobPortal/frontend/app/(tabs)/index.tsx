import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Dimensions,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell } from "iconoir-react-native";
import Images from "@/components/icon/Images";
import { Link } from "expo-router";
import { NavArrowRight, PhoneOutcome, ChatLines } from "iconoir-react-native";
import AvatarIcon from "@/components/icon/Avatar";
import { Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const itemWidth = Dimensions.get("window").width - 40;
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="flex-row px-6 justify-between my-4">
          <View className="flex-row ">
            <Text className="font-title text-[25px]">Job Tree </Text>
            <Bell width={30} height={30} color="black" />
          </View>
          <Bell width={30} height={30} color="#000" />
        </View>
        <View className="flex-row items-center">
          <Text className="text-h5 pl-6 font-sbold">Hello Abhishek!</Text>
        </View>
        <View className="flex px-6 flex-row justify-between items-center">
          <Text className="text-lg font-sbold">Talk to Experts</Text>
          <Link href="/experts">
            <View className="flex-row justify-center items-center">
              <Text className="text-md font-smedium text-orange">See More</Text>
              <NavArrowRight width={16} height={16} color="#ff9c35" />
            </View>
          </Link>
        </View>
        <View className="flex px-6 flex-row justify-between items-center">
          <Text className="text-lg font-sbold">Your Daily News</Text>
          <Link href="/news">
            <View className="flex-row justify-center items-center">
              <Text className="text-md font-smedium text-orange">See More</Text>
              <NavArrowRight width={16} height={16} color="#ff9c35" />
            </View>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
