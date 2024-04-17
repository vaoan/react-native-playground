import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface GoalInputProps {
    addGoalHandler: (t:string) => void;
}

const GoalInput = ({addGoalHandler}: GoalInputProps) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    const addGoalButtonHandler = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter your goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalButtonHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        flexGrow: 1,
      },
      textInput:{
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        flexGrow: 1,
      },
});

export default GoalInput;