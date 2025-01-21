import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { CounterContext } from './CounterProvider';
import { useState, useContext } from 'react';
import {useNavigation} from'@react-navigation/native';

const Login = () => {
  const Navigation=useNavigation();
  const image = require('../assets/images1.jpg');

  const [name, SetName] = useState('');
  const [password, SetPassword] = useState('');
  const { clients } = useContext(CounterContext);

  const submit=()=>{
    if (name && password) {
    const userExists =  clients.some((client) => client.name===name && client.password===password);
   if (userExists) {
        
        Navigation.replace('TabNav'); // Navigate to the Home screen
        alert('Login successful');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  }


  const register=()=>{
  
        Navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.mainText}> Welcome to Login page</Text>

        <Text style={styles.subText}>UserName :</Text>
        <TextInput
          placeholder="Plese input name"
          style={styles.enter}
          value={name}
          onChangeText={SetName}
        />

        <Text style={styles.subText}>Password :</Text>
        <TextInput
          placeholder="Plese input password"
          style={styles.enter}
          value={password}
          onChangeText={SetPassword}
        />

        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={register}>
          <Text>if you are not register ?</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  mainText: {
    textAlign: 'center',
    fontFamily: 'Times new Roman',
    fontWeight: 'bold',
    margin: 20,
    fontSize: 20,
  },
  subText: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 10,
  },
  enter: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 30,
    width: 200,
    marginLeft: '30%',
  },
  button: {
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 15,
    marginLeft: '30%',
  },
});
