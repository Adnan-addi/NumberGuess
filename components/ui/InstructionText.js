import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';


export default function InstructionText({children,style}){
    return(<Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

 



const styles = StyleSheet.create({
    instructionText:{
        color:Colors.yellow,
        fontSize:24,
        fontWeight:'bold',
    
      },
});