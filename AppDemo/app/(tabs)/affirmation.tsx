import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/ui/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallary'
import GuidedAffirmationsGallery from '@/components/ui/GuidedAffirmationsGallery'

const Affirmation = () => {
     return (
          <View className='flex-1'>
               <AppGradient colors={[
                    "rgb(46, 31, 88)",
                    "rgb(84, 66, 107)",
                    "rgb(167, 144, 175)"
               ]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                         <Text className='text-3xl font-bold text-zinc-50'>Change your beliefs with affirmation</Text>
                         <View>
                              {AFFIRMATION_GALLERY.map((g) => (
                                   <GuidedAffirmationsGallery
                                        key={g.title}
                                        title={g.title}
                                        previews={g.data}
                                   />
                              ))}
                         </View>
                    </ScrollView>
               </AppGradient>

          </View>
     )
}

export default Affirmation