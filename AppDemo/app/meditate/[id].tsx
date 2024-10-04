import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from '@/components/ui/AppGradient';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/ui/Button';
const Meditate = () => {
     const { id } = useLocalSearchParams();
     const [secondsRemaining, setSecondsRemaining] = useState(10);
     const [isMeditating, setMeditating] = useState(false);
     useEffect(() => {
          let timerId: NodeJS.Timeout;
          if (secondsRemaining === 0) {
               setMeditating(false);
               return;
          }
          if (isMeditating) {
               timerId = setTimeout(() => {
                    setSecondsRemaining(secondsRemaining - 1);
               }, 1000);
          }
          return () => {
               clearTimeout(timerId);
          };
     }, [secondsRemaining, isMeditating])
     // Format the timeLeft to ensure two digits are displayed
     const formattedTimeMinutes = String(
          Math.floor(secondsRemaining / 60)
     ).padStart(2, "0");
     const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

     return (
          <View className='flex-1'>
               <ImageBackground
                    source={MEDITATION_IMAGES[Number(id) - 1]}
                    resizeMode="cover"
                    className="flex-1"
               >
                    <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
                         <Pressable
                              onPress={() => router.back()}
                              className="absolute z-10 top-10 left-4"
                         >
                              <Ionicons name="chevron-back" size={30} color="white" />
                         </Pressable>
                         <View className="justify-center flex-1">
                              <View className="items-center justify-center mx-auto rounded-full bg-neutral-200 w-44 h-44">
                                   <Text className="text-4xl text-blue-800 font-rmono">{formattedTimeMinutes}.{formattedTimeSeconds}
                                   </Text>
                              </View>
                         </View>

                         <View className="mb-5">
                              <Button
                                   title={isMeditating ? "Stop" : "Start Meditation"}
                                   onPress={() => setMeditating(true)}
                                   containerStyles="mt-4"
                              />
                         </View>

                    </AppGradient>
               </ImageBackground>
          </View>
     )
}

export default Meditate