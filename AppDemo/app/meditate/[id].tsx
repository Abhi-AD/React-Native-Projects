import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from '@/components/ui/AppGradient';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from "expo-av";
import Button from '@/components/ui/Button';
import { AUDIO_FILES, MEDITATION_DATA } from '@/constants/MeditationData';
import { TimerContext } from '@/context/TimerContext';


const Meditate = () => {
     const { id } = useLocalSearchParams();
     const { duration: secondsRemaining, setDuration } =
          useContext(TimerContext);
     const [isMeditating, setMeditating] = useState(false);
     const [audioSound, setSound] = useState<Audio.Sound>();
     const [isPlayingAudio, setPlayingAudio] = useState(false);

     useEffect(() => {
          let timerId: NodeJS.Timeout;
          if (secondsRemaining === 0) {
               setMeditating(false);
               setPlayingAudio(false);
               audioSound?.pauseAsync();
               return;
          }
          if (isMeditating) {
               timerId = setTimeout(() => {
                    setDuration(secondsRemaining - 1);
               }, 1000);
          }
          return () => {
               clearTimeout(timerId);
          };
     }, [secondsRemaining, isMeditating])
     useEffect(() => {
          return () => {
               audioSound?.unloadAsync();
          };
     }, [audioSound]);

     const initializeSound = async () => {
          const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

          const { sound } = await Audio.Sound.createAsync(
               AUDIO_FILES[audioFileName]
          );
          setSound(sound);
          return sound;
     };
     const togglePlayPause = async () => {
          const sound = audioSound ? audioSound : await initializeSound();

          const status = await sound?.getStatusAsync();

          if (status?.isLoaded && !isPlayingAudio) {
               await sound?.playAsync();
               setPlayingAudio(true);
          } else {
               await sound?.pauseAsync();
               setPlayingAudio(false);
          }
     };

     const toggleMeditationSessionStatus = async () => {
          if (secondsRemaining === 0) setDuration(10);
          setMeditating(!isMeditating);
          await togglePlayPause();

     }

     const handleAdjustDuration = () => {
          if (isMeditating) toggleMeditationSessionStatus();

          router.push("/(modal)/adjust-meditation-duration");
     };
     // Format the timeLeft to ensure two digits are displayed
     const totalSeconds = secondsRemaining;
     const formattedTimeHours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
     const formattedTimeMinutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
     const formattedTimeSeconds = String(totalSeconds % 60).padStart(2, "0");

     // Adjust display logic based on whether there are hours
     const displayTime = formattedTimeHours !== "00"
          ? `${formattedTimeHours}:${formattedTimeMinutes}:${formattedTimeSeconds}`
          : `${formattedTimeMinutes}:${formattedTimeSeconds}`;
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
                                   <Text className="text-4xl text-blue-800 font-rmono">{displayTime}
                                   </Text>
                              </View>
                         </View>

                         <View className="mb-5">
                              <Button
                                   title="Adjust duration"
                                   onPress={handleAdjustDuration}
                              />
                              <Button
                                   title={isMeditating ? "Stop" : "Start Meditation"}
                                   onPress={toggleMeditationSessionStatus}
                                   containerStyles="mt-4"
                              />
                         </View>

                    </AppGradient>
               </ImageBackground>
          </View>
     )
}
export default Meditate