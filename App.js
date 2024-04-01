import React, { useEffect } from 'react';  
import { useState } from 'react';
import { View, Text,ImageBackground } from 'react-native';
import { styles } from './App.style.js';
import { SafeAreaProvider,SafeAreaView }from 'react-native-safe-area-context';
import hotBackground from "./assets/hot.png"; 
import coldBackground from "./assets/cold.png";
import { Input } from './components/Input/input.jsx';
import { DisplayTemperature } from './components/DisplayTemperature/DisplayTemperature.jsx';
import {
  UNITS,
  convertTemperature,
  getOppositeUnit,
} from "./utils/temperature";
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert.jsx';
export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit,setCurrentUnit]=useState("˚C");
  const [backgroundImg,setBackgroundImg]=useState(coldBackground);
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    setBackgroundImg(convertTemperature(inputValue, currentUnit) > 0 ? hotBackground : coldBackground);
  }, [inputValue, currentUnit]);

  function getCurrentUnit(){
    if (isNaN(inputValue)) {
      return "Invalid Input";
    }
    else{
    return convertTemperature(
      inputValue,
      oppositeUnit).toFixed(1)
    }
  }

  return (

  <ImageBackground style = {styles.backgroundImg} source={backgroundImg}>
   <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <View style={styles.workSpace}>
              <DisplayTemperature 
              unit={oppositeUnit} 
              temperature={getCurrentUnit()}/>
             <Input
               unit={currentUnit} 
               onChange={setInputValue}
               defaultValue={0}/>
             <ButtonConvert onPress={()=>{
              setCurrentUnit(oppositeUnit);
             }} unit={currentUnit}/>

        </View>
      </SafeAreaView>
   </SafeAreaProvider>
    </ImageBackground>
  );
}

