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
import { Bell, Menu, PineTree, Search } from "iconoir-react-native";
import Images from "@/components/icon/Images";
import { Link } from "expo-router";
import { NavArrowRight, PhoneOutcome, ChatLines } from "iconoir-react-native";
import AvatarIcon from "@/components/icon/Avatar";
import { Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderLayout from "@/components/ui/HeaderLayout";
import Input from "@/components/ui/Input";
import Container from "@/components/ui/Container";
import SearchBar from "@/components/ui/SearchBar";

export default function HomeScreen() {
  const itemWidth = Dimensions.get("window").width - 40;
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="flex-row px-6 justify-between my-4">
          <View className="flex-row ">
            <Text className="font-title text-[25px]">Job Tree </Text>
            <PineTree width={30} height={30} color="black" />
          </View>
          <Menu width={30} height={30} color="#000" />
        </View>
        <HeaderLayout
          height={"500px"}
          title={undefined}
          description="Job Tree is the detination to find and list incredible remote jobs."
        />
        <View className=" mt-[-60px]">
          <Container>
            <SearchBar placeholder="Search jobs" Icon={Search} />
          </Container>
        </View>
        <View className="flex-row items-center">
          <Text className="text-h5 pl-6 font-sbold">Latest jobs</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
