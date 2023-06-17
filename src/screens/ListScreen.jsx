import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Test from './Test.jsx'
export default function ListScreen() {

    const names = [
        {name: 'sam', age: 30},
        {name: 'jedd', age: 30}, 
        {name: 'fsdaj', age: 23},
        {name: 'samfdsa', age: 3},
        {name: 'jedfsdad', age: 23}, 
        {name: 'fsdafasdj', age: 23}]
  return (
    <View>
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator = {false}
            data={names}
            keyExtractor={(friend) => friend.name}
            renderItem={({item})=>{
                return <View key = {`${Math.random() + item.name}`}>
                    <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
                    {/* {item.fav && <Text>{item.fav}</Text>} */}
                    {/* <Test Name ={item.name}/> */}
                    </View>
            }}
           
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50, 
        marginHorizontal: 30, 
    }

})