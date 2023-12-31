import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View ,FlatList , useWindowDimensions} from 'react-native';
import Title from '../components/ui/Title';
import { useState , useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import MyButton from '../components/ui/MyButton';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';
 



function generateRandomBetween(min , max , exclude){

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;









export default function GameScreen({userNumberx , onGameOver}) {
const initialGuess = generateRandomBetween(
  1,
  100,
  userNumberx
);  
const [currentGuess,setCurrentGuess] = useState(initialGuess);
const [guessRounds, setGuessRounds] = useState([]);


const {width,height} = useWindowDimensions();

useEffect(() => {
 // console.log('<'+currentGuess,userNumberx+'>');
  // if(currentGuess === userNumberx){
  if(currentGuess == userNumberx){
    console.log('GAME OVER');
    onGameOver(guessRounds.length);
  }else{
    console.log('GAME NOT OVER');
  }
},[currentGuess , userNumberx , onGameOver]);


useEffect(() => {
  minBoundary = 1;
  maxBoundary = 100;
},[]);



function nextGuessHandler(direction){

 

if(
  (direction === 'lower' && currentGuess < userNumberx) ||
  (direction === 'greater' && currentGuess > userNumberx)
 ) {
  Alert.alert("Don't lie!",'You know that is wrong...',[
    {text:'Sorry!',style:'cancel'},
  ]);
  return;
}





  if(direction === 'lower'){
    maxBoundary = currentGuess;
  }else{  
    minBoundary = currentGuess + 1;
  }




  const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
  setCurrentGuess(newRndNumber);
  setGuessRounds(prevGuessRounds => [newRndNumber,...prevGuessRounds]);
}

const guessRoundsListLength = guessRounds.length;


let content = (
<>
 <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower
        </InstructionText>

        <View style={styles.buttonsContainer}>
        
         <View style={styles.buttonContainer}> 
            <MyButton onMyBtnPressed = {nextGuessHandler.bind(this,'lower')}>
              <Ionicons name='md-remove' size={24} color='#ffffff'/>
            </MyButton>
          </View>
        
         <View style={styles.buttonContainer}>
           <MyButton onMyBtnPressed = {nextGuessHandler.bind(this,'greater')}>
           <Ionicons name='md-add' size={24} color='#ffffff'/>
            </MyButton>
           </View>
        
        </View>

      </Card>
</>
);

if(width > 500){

    content = <>
      
        <View style={styles.buttonContainerwide}>

        <View style={styles.buttonContainer}> 
            <MyButton onMyBtnPressed = {nextGuessHandler.bind(this,'lower')}>
              <Ionicons name='md-remove' size={24} color='#ffffff'/>
            </MyButton>
          </View>

          <NumberContainer>{currentGuess}</NumberContainer>

         <View style={styles.buttonContainer}>
           <MyButton onMyBtnPressed = {nextGuessHandler.bind(this,'greater')}>
           <Ionicons name='md-add' size={24} color='#ffffff'/>
            </MyButton>
           </View>
        </View>
    
    
    </> 

}

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Oppenent's Guess</Title>


        {content}


      <View style={{flex:1,padding:16,}}> 
        {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding:54,
    alignItems:'center',

  },
instructionText:{
  marginBottom:12,
}
,
  buttonsContainer:{
    flexDirection:'row',
  },
  buttonContainer:{
    flex:1,
  },
  buttonContainerwide:{
    flexDirection:'row',
    alignItems:'center',
  },
 
});
