import React from "react";
import { Goal } from "../App";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface GoalItemProps {
  item: Goal;
  deleteGoalHandler: (id: string) => void;
}

const GoalItem: React.FC<GoalItemProps> = ({ item, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandler.bind(this, item.id)}
        style={({ pressed }) => (pressed ? styles.pressedItem : styles.item)}
      >
        <Text>{item.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  pressedItem: {
    padding: 10,
    backgroundColor: "#f0f",
  },
  item: {
    padding: 10,
  },
});

export default GoalItem;
