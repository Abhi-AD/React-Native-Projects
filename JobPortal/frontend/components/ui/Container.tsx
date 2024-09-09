import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import clsx from "clsx";
interface Props extends ViewProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: Props) => {
  return (
    <View style={styles.container} className={clsx(className)}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    maxWidth: 768,
    width: "100%",
    height: "100%",
    marginHorizontal: "auto",
    paddingHorizontal: 30,
    alignSelf: "center",
  },
});
export default Container;
