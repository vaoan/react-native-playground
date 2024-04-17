import { FlatList, Text, StyleSheet, View } from "react-native";
import { Goal } from "../App";

interface GoalListProps {
  goals: Goal[];
  children: (itemData: { item: Goal }) => JSX.Element;
}

const GoalList = ({ goals, children }: GoalListProps) => {
  return (
    <View style={styles.goalContainer}>
      <Text>Goals</Text>
      <FlatList
        data={goals}
        contentContainerStyle={styles.goalContainerScroll}
        renderItem={(itemData) => children(itemData)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainerScroll: {
    flexGrow: 4,
    backgroundColor: "#ff0",
    gap: 10,
  },

  goalContainer: {
    flexGrow: 4,
    backgroundColor: "#ff0",
  },
});

export default GoalList;
