import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'
import { Assets } from 'react-navigation-stack'

export default function ImageScreen() {
    const place = [
        {person: 'jefak', age: 23, run: true }, 
        {person: 'fdsaf',age: 23,run: true}, 
        {person: 'hrt',age: 23, run: true}, 
        ]
  return (
    <View>
      <ImageDetail title ='Forest' img={require('../../assets/forest.jpg')}/>
      <ImageDetail title ='Beach' img={require('../../assets/beach.jpg')}/>
      <ImageDetail title ='Mountain' img={require('../../assets/mountain.jpg')}/>
      <ImageDetail title ='fdasf' img={require('../../assets/forest.jpg')}/>
      {/* <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator = {false}
            data={place}
            keyExtractor={(place) => place.person}
            renderItem={({place})=>{
                return <View>
                        <ImageDetail title ={place.person}/>
                    </View>
            }}
           
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({})