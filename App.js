import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { theme } from "./colors";

export default function App() {
  const [active, setActive] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const travel = () => setActive(false);
  const work = () => setActive(true);
  const onChangeText = (payload) => {
    setText(payload);
  };
  const addToDo = () => {
    if (text === "") {
      return;
    }
    //3개의 객체를 결합하기 위해 Object.assign을 사용
    // const newToDos = Object.assign({}, toDos, {
    //   [Date.now()]: { text, work: active },
    // });
    const newToDos = { ...toDos, [Date.now()]: { text, work: active } };
    setToDos(newToDos);
    setText("");
  };
  console.log(toDos);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: active ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{ ...styles.btnText, color: !active ? "white" : theme.grey }}
          >
            Travel
          </Text>
        </TouchableOpacity>
        {/* text input은 리액트 네이티브에서 유저가 텍스트를 쓸 수 있는 유일한 방법
        리액트 네이티브에는 HTML과 같이 textarea나 input이 없음 */}
      </View>

      <TextInput
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        value={text}
        placeholder={active ? "Add a To Do" : "Where do you want to go?"}
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) => (
          <View style={styles.toDo} key={key}>
            <Text style={styles.toDoText}>{toDos[key].text}</Text>
          </View>
        ))}
      </ScrollView>
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
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
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
