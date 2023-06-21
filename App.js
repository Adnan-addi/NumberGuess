import { StatusBar } from 'expo-status-bar';
import { useState  } from 'react';
import { StyleSheet, Text, View ,ImageBackground,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import {useFonts} from 'expo-font';
 

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds , setGuessRounds] = useState(0);

  


  function getNumberhandler(Number){
    setUserNumber(Number);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);

  }

  let screen = <StartGameScreen onGetNumber={getNumberhandler}/>;

  if(userNumber){
    screen = (
    <GameScreen userNumberx={userNumber}  onGameOver={gameOverHandler} />
    );
  }

  if(gameIsOver && userNumber){
    screen =<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>;
  }

 

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[ Colors.primary800,Colors.yellow ]} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')}
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.backgroundImage}>


        {/* <StartGameScreen/> */}
        <SafeAreaView style={styles.container}>
        {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
 
  },
  backgroundImage:{
    opacity: 0.15,
  }
});
