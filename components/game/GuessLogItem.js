import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

export default function GuessLogItem({roundNumber,guess}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess is -  {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.yellow,
    borderWidth:1,
    borderRadius:40,
    padding:12,
    marginVertical:8,
    backgroundColor:Colors.yellow,
    flexDirection:'row',
  
     width:'100%',
     elevation:4,
     shadowColor:'#000000',
     shadowOffset: {width:0 , height:0},
     shadowOpacity:0.25,
     shadowRadius:3,
    justifyContent:'space-between',

  },
  text:{
    color:"#000000",
    fontSize: 14,
    fontWeight:'bold'
     

  },
});
