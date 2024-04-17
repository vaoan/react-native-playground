import React from "react";
import { Goal } from "../App";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface GoalItemProps {
  item: Goal;
  deleteGoalHandler: (id: string) => void;
}

const GoalItem: React.FC<GoalItemProps> = ({ item, deleteGoalHandler }) => {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this, item.id)}>
      <View style={styles.goalItem}>
        <Text>{item.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
