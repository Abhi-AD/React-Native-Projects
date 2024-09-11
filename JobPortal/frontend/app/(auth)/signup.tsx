import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/Input";
import Container from "@/components/ui/Container";
import { Link, router } from "expo-router";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/icon/Google";
import FacebookIcon from "@/components/icon/Facebook";
import useKeyboardVisible from "@/hooks/useKeyboard";
const SignUp = () => {
  const isKeyboardVisible = useKeyboardVisible();
  return (
    <SafeAreaView className="flex-1 bg-neutralWhite">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container className="flex-1">
          <View style={{ flex: 1 }}>
            <View className="p-8 mx-auto">
              <Text className="font-title text-[54px] text-center">
                Job Tree
              </Text>
            </View>
            <Input
              placeholder="John Deo"
              label="Full Name *"
              containerStyles="mt-8"
            />
            <Input
              placeholder="johndeo@email.com"
              label="Email"
              containerStyles="mt-4"
            />
            <Input
              placeholder="+977 98XXXXXXXX"
              label="Phone Number *"
              containerStyles="mt-4"
            />
            <Input
              placeholder="●●●●●●●●"
              label="Password *"
              containerStyles="mt-4"
            />
            <View className="mt-4">
              <Button onPress={() => router.push("/(tabs)")}>
                <Text className="font-smedium text-lg text-neutralBlack">
                  Sign Up
                </Text>
              </Button>
              <View className="flex-row my-4 items-center">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-4 font-smedium text-gray-400">
                  Or Continue With
                </Text>
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
              <Text className="font-smedium text-sm text-center my-4 text-gray-800">
                By Signing up, you agree to our{" "}
                <Link href="/login">
                  <Text className="font-smedium text-sm text-brandgreen underline">
                    Terms of Service
                  </Text>
                </Link>{" "}
                and{" "}
                <Link href="/login">
                  <Text className="font-smedium text-sm text-brandgreen underline">
                    Privacy Policy
                  </Text>
                </Link>{" "}
                and{" "}
                <Link href="/login">
                  <Text className="font-smedium text-sm text-brandgreen underline">
                    Cookies Policy
                  </Text>
                </Link>
              </Text>
            </View>
          </View>
        </Container>
      </ScrollView>
      {!isKeyboardVisible && (
        <View className="left-0 right-0 flex-row w-full bottom-0 justify-center border-t-[1px] border-gray-200 items-center py-[22px]">
          <Text className="font-smedium text-md text-gray-800">
            Already have an account?{" "}
          </Text>
          <Link href="/login">
            <Text className="font-smedium text-md text-brandgreen">Log In</Text>
          </Link>
        </View>
      )}
    </SafeAreaView>
  );
};
export default SignUp;
