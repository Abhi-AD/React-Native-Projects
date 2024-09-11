import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/Input";
import Container from "@/components/ui/Container";
import { Link } from "expo-router";
import { useState } from "react";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/icon/Google";
import FacebookIcon from "@/components/icon/Facebook";
import useKeyboardVisible from "@/hooks/useKeyboard";
import { router } from "expo-router";
const Login = () => {
  const [remember, setRemember] = useState(false);
  const isKeyboardVisible = useKeyboardVisible();
  const handleRememberPress = () => {
    setRemember(!remember);
  };
  return (
    <SafeAreaView className="flex-1 bg-neutralWhite">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView className="flex-1">
          <View className="bg-brandgreen rounded-br-3xl">
            <View className="p-8 mx-auto mb-10">
              <Text className="font-title text-[54px] text-center">
                Job Tree
              </Text>
              <Text className="font-smedium">
                Job Tree is the destination to find and list incredible remote
                jobs
              </Text>
            </View>
          </View>

          <View className=" mt-[-50px]">
            <Container>
              <Input
                placeholder="john@gmail.com"
                label="Email"
                containerStyles="mt-8"
              />
              <Input
                placeholder="●●●●●●●●"
                label="Password"
                containerStyles="mt-4"
              />
              <View className="mt-4">
                <Button onPress={() => router.push("/(tabs)")}>
                  <Text className="font-smedium text-lg text-neutralBlack">
                    Log In
                  </Text>
                </Button>
                <View className="flex-row my-4 items-center">
                  <View className="flex-1 h-px bg-gray-300" />
                  <Text className="mx-4 font-smedium text-gray-400">Or</Text>
                  <View className="flex-1 h-px bg-gray-300" />
                </View>
                <View className="flex flex-col w-full space-y-2">
                  <View className="flex">
                    <Button
                      className="flex flex-row items-center justify-center space-x-2"
                      variant="alternate"
                    >
                      <GoogleIcon />
                      <Text className="font-sbold text-base text-neutralBlack">
                        Continue with Google
                      </Text>
                    </Button>
                  </View>
                  <View className="flex">
                    <Button
                      className="flex items-center justify-center"
                      variant="alternate"
                    >
                      <FacebookIcon />
                      <Text className="font-sbold text-base text-neutralBlack">
                        Continue with Facebook
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Container>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {!isKeyboardVisible && (
        <View className="left-0 right-0 flex-row w-full bottom-0 justify-center border-t-[1px] border-gray-200 items-center py-[22px]">
          <Text className="font-smedium text-md text-gray-800">
            Don't Have an Account?{" "}
          </Text>
          <Link href="/signup">
            <Text className="font-smedium text-md text-brandgreen">
              Sign Up
            </Text>
          </Link>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Login;
