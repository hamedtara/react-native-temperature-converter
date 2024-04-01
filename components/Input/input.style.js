import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    root:{
        alignSelf: "stretch",
        justifyContent: 'center',

    },
    input: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 20,
        paddingLeft: 25,
    },
    unit:{
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingRight: 20,
        fontSize: 20,
    }
});
