import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "./colors";

export default function App() {
  const [active, setActive] = useState(false);
  const onPress = () => {
    setActive((current) => !current);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    //color: active ? "white" : theme.grey,
    color: theme.grey,
  },
});

// TouchableOpacity
// View가 터치에 적절하게 반응하도록 하는 래퍼.
// 아래로 누르면 래핑된 View의 opacity가 감소하여 흐리게 표시됩니다.
// https://docs.expo.dev/versions/v44.0.0/react-native/touchableopacity/

// TouchableHighlight
// View가 터치에 적절하게 반응하도록 하는 래퍼.
// 아래로 누르면 래핑된 View의 background를 표시합니다.
// https://docs.expo.dev/versions/v44.0.0/react-native/touchablehighlight/

// TouchableWithoutFeedback
// 합당한 이유가 없는 한 사용하지 마십시오. 반응X.
// Press에 반응하는 모든 요소는 만졌을 때 시각적 피드백이 있어야 합니다.
// https://docs.expo.dev/versions/v44.0.0/react-native/touchablewithoutfeedback/

// Pressable
// Pressable은 정의된 자식에 대한 다양한 Press 상호 작용 단계를 감지할 수 있는 핵심 구성 요소 래퍼입니다.
// Touchable 시리즈보다 더 많은 종류의 속성을 가질 수 있음.
// https://docs.expo.dev/versions/v44.0.0/react-native/pressable/
