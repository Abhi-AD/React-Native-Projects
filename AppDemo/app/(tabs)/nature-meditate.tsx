import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/ui/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient
        colors={["rgb(22, 27, 46)", "rgb(10, 77, 74)", "rgb(118, 110, 103)"]}
      >
        <View className="mb-6">
          <Text className="mb-3 text-4xl font-bold text-gray-200">Hello, Garland!</Text>
          <Text className="mb-3 text-xl font-medium text-indigo-200">Begin your journey of mindfulness today.</Text>
        </View>
        <View>
          <FlatList data={MEDITATION_DATA} className="mb-20" keyExtractor={(item) => item.id.toString()} showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable onPress={() => console.warn('press')} className="h-48 my-3 overflow-hidden">
                <ImageBackground source={MEDITATION_IMAGES[item.id - 1]} resizeMode="cover" className="justify-center flex-1 rounded-lg">
                  <LinearGradient
                    colors={[
                      "transparent",
                      "rgba(0,0,0,0.8)",
                    ]}
                    className="items-center justify-center flex-1"
                  >
                    <Text className="text-3xl font-bold text-center text-gray-100">{item.title}</Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />

        </View>
        <StatusBar style="light" />

      </AppGradient>
    </View>
  );
};

export default NatureMeditate;
