import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Colors from '../../constants/colors';

export default function NumberContainer({children}) {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}


const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth:4,
    borderColor: Colors.yellow,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius:8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems:'center' ,
    justifyContent:'center',

  },
  text:{
    color:Colors.yellow,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight:'bold',

  },
});
