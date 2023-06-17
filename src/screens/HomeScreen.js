import React, {useState} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ListScreen from "./ListScreen";



const HomeScreen = ({navigation}) => {
  const {navigate} = navigation
  let jeff = 'fja4j23klgh dl'
  const [name, setName] = useState('jeff')


  const onButtonPress = () => {
     navigate('List')
  }

  const onTouchPress = ()=> {
    if(name !== 'jamal'){
      setName('Earl')
    } else{
      setName('Gooper')
    }
  }

  return <View>
    <Text style={styles.text}> {name}</Text>
    <Button 
      onPress={onButtonPress}
      title="Go to component Demo"/>
    <TouchableOpacity onPress={onTouchPress}>
      <Text>This is a button</Text>
    </TouchableOpacity>
    <Button 
      onPress={()=>{navigate('Images')}}
      title='Images'/>
      <Button 
      onPress={()=>{navigate('Counter')}}
      title='Counter'/>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


