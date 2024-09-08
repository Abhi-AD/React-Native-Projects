import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="flex-1 items-center justify-center">
        <Text className="text-blue-600 font-smedium">
          The quick brown fox jumps over the lazy dog.
        </Text>
      </View>
    </SafeAreaView>
  );
}
