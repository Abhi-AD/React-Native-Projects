import { View, Text, Pressable, FlatList } from 'react-native';
import React, { useContext } from 'react';
import AppGradient from '@/components/ui/AppGradient';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/ui/Button';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {
    const { setDuration } = useContext(TimerContext);
    const durations = [10, 5 * 60, 10 * 60, 10, 5 * 60, 10 * 60, 10, 5 * 60, 10 * 60, 15 * 60];
    const labels = ["10 seconds", "5 minutes", "10 minutes", "10 seconds", "5 minutes", "10 minutes", "10 seconds", "5 minutes", "10 minutes", "15 minutes"];

    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    };

    const renderItem = ({ item, index }: { item: number; index: number }) => (
        <Button
            title={labels[index]}
            onPress={() => handlePress(item)}
            containerStyles="mb-5"
        />
    );

    return (
        <View className="relative flex-1">
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <Pressable onPress={() => router.back()} className="absolute z-10 top-10 left-4">
                    <Ionicons name="chevron-back" size={30} color="white" />
                </Pressable>
                <View className="flex items-center justify-center mt-20">
                    <Text className="mb-8 text-3xl font-bold text-center text-white">
                        Adjust your meditation duration
                    </Text>
                </View>

                <View>
                    <FlatList
                        data={durations}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </AppGradient>
        </View>
    );
};

export default AdjustMeditationDuration;
