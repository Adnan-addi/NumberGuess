import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,useWindowDimensions,ScrollView} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import MyButton from '../components/ui/MyButton';

export default function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {

const {width,height} = useWindowDimensions();
  
let imageSize = 300;

if (width < 380){
  imageSize = 150;
}

if (height < 400){
  imageSize = 80;
}

const imageStyle = {
  width: imageSize,
  height : imageSize,
  borderRadius: imageSize / 2
}

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.container}>
       <Title>GAME OVER</Title>
       <View style={[styles.imgContainer,imageStyle]}>
       <Image style={styles.img} source={require('../assets/images/success.png')}/>
       </View>
       <Text style={styles.summaryText}>Your phone needed 
        <Text style={styles.highlightText}> {roundsNumber} </Text>
        rounds to guess the number 
        <Text style={styles.highlightText}> {userNumber} </Text>
        </Text>
        <MyButton onMyBtnPressed={onStartNewGame}>Start New Game</MyButton>
    </View>
    </ScrollView>
  );
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:24,
    alignItems: 'center',
    justifyContent: 'center',
    
  },


  imgContainer:{
    // width: deviceWidth < 380 ? 150 : 300,
    // height:deviceWidth < 380 ? 150 : 300,
    // borderRadius:deviceWidth < 380 ? 75 : 150,
    borderWidth:3,
    borderColor:'#000000',
    overflow:'hidden',
    margin:36,
  },

  img:{
    width:'100%',
    height:'100%',

  },

  summaryText:{
    fontSize:25,
    textAlign:'center',
    marginBottom:24,
    
  },
  highlightText:{
    color:Colors.primary500,
    fontWeight:'bold',

  },

  screen:{
    flex:1,
  },

});
