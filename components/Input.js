import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import {useState} from 'react';

function Input(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

	return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputWrapper}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancelGoal} color="#f53d99" />
                    </View>
                </View>
            </View>
        </Modal>
	);
}

export default Input;

const styles = StyleSheet.create({
    inputWrapper: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4169E1"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius: 9,
        backgroundColor: "#fff",
        color: "#120438",
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    buttonWrapper: {
        flexDirection: "row",
        marginTop: 20
    },
    button: {
        width: 100,
        marginHorizontal: 18
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
})
