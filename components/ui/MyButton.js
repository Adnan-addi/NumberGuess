import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import Colors from '../../constants/colors';
export default function MyButton({children , onMyBtnPressed}) {
   

  return (
    <View style={styles.buttonOuter}>
     <Pressable style={({pressed}) => 
     pressed ? 
     [styles.iospressed , styles.buttonInner] : styles.buttonInner} 
     onPress={onMyBtnPressed} 
     android_ripple={{color: Colors.primary600}}
     >
        <Text style={styles.buttonText}>{children}</Text>
     </Pressable>
     </View>
  );
}

const styles = StyleSheet.create({
  buttonOuter:{
    borderRadius:28,
    margin:4,
    overflow:'hidden',

  },

  buttonInner: {
    backgroundColor:Colors.primary500,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
  },
  buttonText:{
    color:'#ffffff',
    textAlign:'center',

  },
  iospressed:{
    opacity:0.75,

  }
});
