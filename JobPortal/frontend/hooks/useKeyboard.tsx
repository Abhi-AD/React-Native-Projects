import { useState, useLayoutEffect } from "react";
import { Keyboard, KeyboardEvent } from "react-native";
const useKeyboardVisible = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  useLayoutEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e: KeyboardEvent) => {
        setKeyboardVisible(true);
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);
  return isKeyboardVisible;
};
export default useKeyboardVisible;
