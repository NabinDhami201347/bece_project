import { StyleSheet, View } from "react-native";

import { COLORS } from "./src/constants";
import Signup from "./src/screens/Auth/Signup";
import Login from "./src/screens/Auth/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      {/* <Signup /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20, // Add horizontal padding to provide spacing
  },
});
