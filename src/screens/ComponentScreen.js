import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

export default function ComponentScreen() {

    const [word, setWord] = useState('worddertron')


    const butter = () => {
        setWord('fjdskalfjsd')
    }
  return (
    <View>
      <Text style={styles.textStyle}>This is the ComponentScreen</Text>
        <Text>thsi si another {word}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})