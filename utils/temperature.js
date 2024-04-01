const UNITS  = {
    celsius: "˚C",
    fahrenheit: "˚F"
}

function convertTemperature(temperature,unit){
    if(unit === UNITS.celsius){
        return (temperature - 32) * 5/9;
    }else{
        return (temperature * 9/5) + 32;
    }
}

function isIceTeperature(temperature,unit){
    if(unit === UNITS.celsius){
        return temperature <= 0;
    }else if(unit === UNITS.fahrenheit){
    return temperature < 32;
    }else{
        return "Invalid Input";
    
    }
}

function getOppositeUnit(unit){
    if(unit === UNITS.celsius){
        return UNITS.fahrenheit;
    }else{
        return UNITS.celsius;
    }
}



export { UNITS, convertTemperature , getOppositeUnit, isIceTeperature};