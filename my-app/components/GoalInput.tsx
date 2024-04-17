import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

interface GoalInputProps {
  addGoalHandler: (t: string) => void;
  visible: boolean;
  setVisibility: (v: boolean) => void;
}

const GoalInput = ({
  addGoalHandler,
  visible,
  setVisibility,
}: GoalInputProps) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalButtonHandler = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
    setVisibility(false);
  };

  const cancelGoalButtonHandler = () => {
    setEnteredGoal("");
    setVisibility(false);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/splash.png")} style={styles.image} />
        <TextInput
          placeholder="Enter your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={cancelGoalButtonHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalButtonHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderWidth: 5,
    backgroundColor: "#f0f",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#158e80",
  },
  textInput: {
    borderColor: "#ccc",
    borderRadius: 5,
    borderWidth: 1,
    padding: 16,
    width: "100%",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flexGrow: 1,
  },
});

export default GoalInput;
