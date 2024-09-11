import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ headerShown: false, animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="signup"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack>
  );
}
