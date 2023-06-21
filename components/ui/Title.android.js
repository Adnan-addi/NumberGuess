import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import Colors from '../../constants/colors';

export default function Title({children}) {
  return (
      <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
   fontWeight:'bold',

    fontSize:24,
 
    color:"#ffffff",
    textAlign:'center',
//    borderWidth: Platform.OS === 'android' ? 2 : 0,

//    borderWidth : Platform.select({ios: 0,android: 2}),
borderWidth:2,
    borderColor:'white',
    padding:12,
    maxWidth:'80%',
    width:300,

  }
});
