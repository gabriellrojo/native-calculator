import { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Buttons from './components/Buttons';
import Display from './components/Display';

export default function App() {
  const [value, setValue] = useState([0])
  const [dot, setDot] = useState([])
  const [soma, setSoma] = useState([])

  const clear = () => {
    setValue([0])
    setDot([])
  }

  const addValue = (valor) => {
      setValue(valor);
  }

  const addDot = (valor) => {
    if(dot.length === 1){
      return
    } else {
      setDot(valor)
      setValue(valor)
    }
  }

  const operations = (valor) => {
    setValue(valor)
    const teste = eval(value)
    setValue(teste)
  }

  useEffect(() => {
    const numberStr = value.toString()
    if(numberStr[0] == 0 && numberStr[1]){
      const res = numberStr.replace(numberStr[0], '')
      setValue(res)
    } 
  },[value])

  return (
    <SafeAreaView>
      <Display value={value}/>
      <View style={styles.btnContainer}>
        <Buttons valor="AC" triple={true} clear={clear}/>
        <Buttons valor="/" operation={true} addValue={addValue}/>
        <Buttons valor="7" addValue={addValue}/>
        <Buttons valor="8" addValue={addValue}/>
        <Buttons valor="9" addValue={addValue}/>
        <Buttons valor="*" operation={true} addValue={addValue}/>
        <Buttons valor="4" addValue={addValue}/>
        <Buttons valor="5" addValue={addValue}/>
        <Buttons valor="6" addValue={addValue}/>
        <Buttons valor="-" operation={true} addValue={addValue}/>
        <Buttons valor="1" addValue={addValue}/>
        <Buttons valor="2" addValue={addValue}/>
        <Buttons valor="3" addValue={addValue}/>
        <Buttons valor="+" operation={true} addValue={addValue}/>
        <Buttons valor="0" addValue={addValue} double={true}/>
        <Buttons valor="." addDot={addDot} />
        <Buttons valor="=" operation={true} operations={operations}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
})
