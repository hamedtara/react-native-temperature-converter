import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from "./input.style"; 

export function Input({defaultValue,onChange,unit}) {
    return(
    <View style={styles.root}>
    <TextInput 
        style={styles.input}
        maxLength={5}
        defaultValue={defaultValue.toString()}
        onChangeText={function(text){
            if(text === ''){
                onChange(0);
            }else{
                onChange(parseInt(text));
            }

        }}
        placeholder="Enter temperature" />
    <Text style={styles.unit} >{unit}</Text>
    </View>
    );
    
}
