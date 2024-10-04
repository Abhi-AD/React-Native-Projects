import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallary';
import AppGradient from '@/components/ui/AppGradient';
import { Ionicons } from '@expo/vector-icons';

const AffirmationPractice = () => {
     const { itemId } = useLocalSearchParams();
     const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
     const [sentences, setSentences] = useState<string[]>([]);

     useEffect(() => {
          for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
               const affirmationData = AFFIRMATION_GALLERY[i].data;

               const affirmationToStart = affirmationData.find(
                    (a) => a.id === Number(itemId)
               );

               if (affirmationToStart) {
                    setAffirmation(affirmationToStart);
                    const affirmationsArray = affirmationToStart.text.split(".");
                    if (affirmationsArray[affirmationsArray.length - 1] === "") {
                         affirmationsArray.pop();
                    }
                    setSentences(affirmationsArray);
                    return;
               }
          }
     }, []);


     return (
          <View className="flex-1">
               <ImageBackground
                    source={affirmation?.image}
                    resizeMode="cover"
                    className="flex-1"
               >
                    <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                         <Pressable
                              onPress={() => router.back()}
                              className="absolute z-10 top-10 left-4"
                         >
                              <Ionicons name="chevron-back" size={30} color="white" />
                         </Pressable>
                         <ScrollView
                              className="mt-20"
                              showsVerticalScrollIndicator={false}
                         >
                              <View className="justify-center h-full border-white">
                                   <View className="justify-center h-4/5">
                                        {sentences.map((sentence, idx) => (
                                             <Text
                                                  className="mb-12 text-3xl font-bold text-center text-white"
                                                  key={idx}
                                             >
                                                  {sentence}.
                                             </Text>
                                        ))}
                                   </View>
                              </View>
                         </ScrollView>
                    </AppGradient>
               </ImageBackground>
          </View>
     )
}

export default AffirmationPractice