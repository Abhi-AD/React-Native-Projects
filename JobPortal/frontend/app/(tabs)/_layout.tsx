import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { HomeSimple, BadgeCheck } from "iconoir-react-native";
import NewsIcon from "@/components/icon/NewsIcon";
import { Ionicons } from "@expo/vector-icons";
import Images from "@/components/icon/Images";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1b0e01",
        tabBarActiveBackgroundColor: "#02C39A",
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "white",
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          justifyContent: "center",
          fontSize: 13,
          fontWeight: "bold",
          fontFamily: "Telma-Regular",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeSimple width="24px" height="24px" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="journeys"
        options={{
          title: "Journeys",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              className="mb-2"
              name="newspaper-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="subscription"
        options={{
          title: "Subscription",
          tabBarIcon: ({ color, focused }) => (
            <BadgeCheck width="24px" height="24px" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View className="w-[24px] h-[24px]">
              <Image source={Images.avatar} className="w-6 h-6" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
