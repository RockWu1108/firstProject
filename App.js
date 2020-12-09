import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import {StyleSheet, Text, View , Button ,ImageBackground,TextInput,Alert} from 'react-native';
export default function App() {
  const image = {uri : 'https://images.unsplash.com/photo-1557683304-673a23048d34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'}
  const [Email,setEmail] = useState('');
  const [Password ,setPassword] = useState('');
  const [checkPassword,setcheckPassword]=useState('');
  function alterMessage(title , message){
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        },
      ],
      {cancelable: false},
    );
  }
  const vaildPassword = () =>{
        if(Email === ''){
          alterMessage('Error Message' , '\nPlease input Email');
        }
        else if (Password.length  == 0){
          alterMessage('Error Message' , '\nPlease input Password');
        }
        else if(checkPassword.length == 0){
          alterMessage('Error Message' , '\nPlease input checkPassword');
        }
        else if (Password != checkPassword){
          alterMessage('Error Message' , '\nValidation error');
        }
        else{
          alterMessage('Message' , '\nValidation Successful ! ! !');
        }
  }
  

  return (

    <View style={styles.container}>

      <ImageBackground source={image} style={styles.image}>
          <Text style={styles.loginText}>SignUp</Text>

          <TextInput 
          style={styles.textInput} 
          placeholder='Email' 
          keyboardType='email-address'
          onChangeText={(Email) => setEmail(Email)}
          />
          <TextInput 
          style={styles.textInput} 
          placeholder='輸入10位密碼' 
          keyboardType='numeric' 
          secureTextEntry={true}
          maxLength={10}
          onChangeText={(Password) => setPassword(Password)}
          />
          <TextInput 
          style={styles.textInput} 
          placeholder='確認輸入10位密碼' 
          keyboardType='numeric' 
          secureTextEntry={true}
          onChangeText={(checkPassword) => setcheckPassword(checkPassword)}
          maxLength={10}
          />

          <View style={{margin:40}}>
              <Button
                title="SignUp"
                color="blue"
                accessibilityLabel="Tap to Decrypt Data"
                onPress={() => vaildPassword()}
              />  
          </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover', 
    flex: 1,
    justifyContent: 'center',
  },
  loginText:{
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    marginBottom: 0,
  },
  textInput: {
    marginTop:50,
    height: 40,
    width:300,
    borderRadius:5,
    borderColor:'red',
    borderWidth:1,
    backgroundColor:'white',
    color:'black',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 40,
    paddingLeft:15
  },
  signButton:{
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
