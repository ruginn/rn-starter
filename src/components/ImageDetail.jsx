import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ImageDetail({title, img}) {
  
    return (
    <View>
    <Image source={img}/>
        <Text>this is {title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})