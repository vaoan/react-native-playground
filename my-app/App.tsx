import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import GoalItem from "./components/GoalItem";

export interface Goal {
  title: string;
  id: string;
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (text: string) => {
    setGoals((goals) => [
      ...goals,
      { title: text, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={isAddMode}
        setVisibility={setIsAddMode}
      />
      <GoalList goals={goals}>
        {({ item }) => (
          <GoalItem item={item} deleteGoalHandler={deleteGoalHandler} />
        )}
      </GoalList>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#f0f",
    gap: 10,
    paddingBottom: 20,
  },
});
