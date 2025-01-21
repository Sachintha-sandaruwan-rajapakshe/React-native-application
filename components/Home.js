import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { CounterContext } from './CounterProvider';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
const Home=()=>{
  const {clients}=useContext(CounterContext);
  return(
    <View>
      <View>
        <Text>Name</Text>
        <Text>Email</Text>
      </View>

      {clients.map((student,index)=>(
        <View key={index}>
          <Text>{student.name}</Text>
          <Text>{student.email}</Text>
        </View>
      ))}

    </View>
  )

}
export {Home};