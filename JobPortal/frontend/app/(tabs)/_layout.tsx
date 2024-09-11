import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { HomeSimple, QrCode, BadgeCheck } from "iconoir-react-native";
import NewsIcon from "@/components/icon/NewsIcon";
import { Ionicons } from "@expo/vector-icons";
import Images from "@/components/icon/Images";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff8303",
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 8,
          paddingTop: 12,
          paddingBottom: 18,
          height: 76,
          backgroundColor: "white",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
        tabBarLabelStyle: {
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
        name="news"
        options={{
          title: "News",
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
        name="checkin"
        options={{
          title: "Check In",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "#ff8303",
                borderRadius: 12,
                padding: 8,
                marginTop: -30,
              }}
            >
              <QrCode width="40px" height="40px" color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="experts"
        options={{
          title: "Experts",
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
