import { View, Text, StyleSheet, Dimensions } from 'react-native'

const Display = (props) => {

    const value = props.value
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        backgroundColor: "rgba(0,0,0,0.6)",
        width: "100vw", 
        height: 150,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: 20
    },

    displayValue: {
        color: "#fff",
        fontSize: 60
    }
})

export default Display