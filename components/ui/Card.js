import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Colors from '../../constants/colors';

export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>

  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:'center',
        alignItems:'center',
        padding: 16,
        marginHorizontal:24,
        borderRadius:8,
        marginTop:deviceWidth < 380 ? 18 : 36,
        elevation: 4,
        backgroundColor:Colors.primary700,
        shadowColor:'#000000',
        shadowOffset:{width:0 , height:2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
  },
});
