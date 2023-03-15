import {StyleSheet, Text, Pressable, View} from 'react-native'

export const Goal = (props) => {
    return (
            <Pressable android_ripple={{color: 'white'}} onPress={props.onDeleteGoal.bind(this, props.id)}>
                <View style={styles.goalItem}>
                    <Text style={styles.goalText}>
                        {props.text}
                    </Text>
                </View>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        width: 340, 
        borderRadius: 2,
        backgroundColor: "#88cc00",
        margin: 3
    },
    goalText: {
        color: "white",
        padding: 6,
        fontWeight: 500,
        fontSize: 17
    }
})