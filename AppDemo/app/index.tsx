import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import meditationImages from "@/constants/meditation-images";
import main from "@/constants/main";
import { StatusBar } from "expo-status-bar";
import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [treeImage, riverImage, meditatingUnderTree, beachImage] =
    meditationImages;
  const [logo] = main;
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
          className="flex-1"
        >
          <SafeAreaView className="justify-between flex-1 mx-5 my-8 mt-20">
            <View className="flex-col gap-3">
              <Text className="text-4xl font-bold text-center text-white">
                Welcome to Meditation App
              </Text>
              <Text className="text-xl text-center text-white text-regular">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View className="items-center justify-center flex-1">
              <Image source={logo} className="w-80 h-w-80" />
            </View>
            <View>
              <Button
                onPress={() => router.push("/test")}
                title="Get Started"
                containerStyles="bg-[#0a4d4a]"
                textStyles="text-white"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
