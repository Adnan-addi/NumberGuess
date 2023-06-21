import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Alert ,
   useWindowDimensions,
  KeyboardAvoidingView,
ScrollView} from 'react-native';
import MyButton from '../components/ui/MyButton';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
export default function StartGameScreen({onGetNumber}) {



  const {width , height} = useWindowDimensions();

  const [enteredNumber,setEnteredNumber] = useState('');


  function numberInputHandler(enteredNumber){
      setEnteredNumber(enteredNumber);
  }

  function resetInputHandler(){
    setEnteredNumber('');
  }

  function confirmInputHandler(){
   // console.log(enteredNumber);
    const chosenNumber = parseInt(enteredNumber);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >=99 ){
      Alert.alert('Invalid Number',' Number has to be a number between 1 and 99.',
      [{text:'okay' , style:'destructive',onPress:resetInputHandler}])
      return;
    }
    
    onGetNumber(enteredNumber);

   // resetInputHandler();
  }


  const marginTopD = height < 380 ? 30 :100 ;

  return (
    <ScrollView style = {styles.screen}>
    <KeyboardAvoidingView style = {styles.screen} behavior='position'>
    <View style={[styles.rootContainer,{marginTop:marginTopD}]}>
      <Title>Guess My Number</Title>

    
     <Card>
      <InstructionText>Enter a Number</InstructionText>
        <TextInput style={styles.inputNumber}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.btnContainer}><MyButton onMyBtnPressed={resetInputHandler}>Reset</MyButton></View>
          <View style={styles.btnContainer}><MyButton onMyBtnPressed={confirmInputHandler}>Confirm</MyButton></View>
        </View>

     </Card>

     </View>
     </KeyboardAvoidingView>
     </ScrollView>
  );
}

 

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent:'center',
    alignItems:'center',
    padding: 16,
    marginHorizontal:24,
    borderRadius:8,
    marginTop:36,
    elevation: 4,
    backgroundColor:Colors.primary700,
    shadowColor:'black',
    shadowOffset:{width:0 , height:2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
   
  },
  screen:{
    flex:1,
  },
  inputNumber:{
    height:50,
    width:50,
    textAlign:'center',
    fontSize:32,
    borderBottomColor:Colors.yellow,
    borderBottomWidth:2,
    color:Colors.yellow,
    marginVertical: 8,
    fontWeight:'bold',
    
  },
  buttonsContainer:{
    flexDirection:'row',
  },
  btnContainer:{
    flex:1,
  },

  rootContainer:{
    flex:1,
 
    alignItems:'center',
  },
 
});
