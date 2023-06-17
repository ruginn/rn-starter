import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

export default function CounterScreen() {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


  return (
    <View>
      <Text>{count}</Text>
      <Button
        onPress={increment}
        title='+'
      />
    
      <Button
        onPress={decrement}
        title='-'
      />
    </View>
  )
}

const styles = StyleSheet.create({})