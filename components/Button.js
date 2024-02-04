import { Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"


const Buttons = (props) => {

    const buttonStyles = [styles.button]
    
    if(props.operation){
        buttonStyles.push(styles.buttonOperation)
    }
    if(props.triple){
        buttonStyles.push(styles.buttonTriple)
    }
    if(props.double){
        buttonStyles.push(styles.buttonDouble)
    }

    return (
    <TouchableOpacity style={buttonStyles} onPress={() => {
        if(props.valor === "AC"){
            props.clear()
        } else if (props.valor === "0" || props.valor === "1" || props.valor === "2" ||
        props.valor === "3" || props.valor === "4" || props.valor === "5" || props.valor === "6" ||
        props.valor === "7" || props.valor === "8" ||props.valor === "9") {
            props.addValue(prev => prev + props.valor)
            
        } else if(props.valor === '.') {
            props.addDot(prev => prev + props.valor)
        
        } else if(props.valor === "+" || props.valor === "-" || props.valor === "/" 
        || props.valor === "*") {
            props.addValue(prev => prev + props.valor)
            
        } else if(props.valor === "=") {
            props.operations(prev => prev + props.valor)
        } 
        
        }}>
        <Text>{props.valor}</Text>
    </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    button: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#f0f0f0',
        borderColor: "#888",
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        
    },

    buttonOperation: {
        color: "#fff",
        backgroundColor: "#c7a210",
    },

    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    }, 

    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }, 
})

export default Buttons