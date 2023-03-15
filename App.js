import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Goal } from "./components/Goal";
import Input from "./components/Input";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	function goalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => {
			return [...currentCourseGoals, { text: enteredGoalText, id: (Math.random() * 100).toString() }].filter(goal => goal.text);
		});
		endAddGoalHandler();
	}

	function onDeleteGoal(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<>
			<StatusBar style="inverted" />
			<View style={styles.appWrapper}>
				<View style={styles.button}>
					<Button title="Add New Goal" color="#b180f0" onPress={startAddGoalHandler} />
				</View>
				<Input visible={modalIsVisible} onAddGoal={goalHandler} onCancelGoal={endAddGoalHandler} />
				<View style={styles.goalsWrapper}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return <Goal text={itemData.item.text} onDeleteGoal={onDeleteGoal} id={itemData.item.id} />;
						}}
						keyExtractor={(item, _index) => item.id}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appWrapper: {
		flex: 1,
		paddingTop: 50,
		alignItems: "center"
	},
	goalsWrapper: {
		flex: 6
	},
	button: {
		flex: 1,
		width: 340
	},
});
