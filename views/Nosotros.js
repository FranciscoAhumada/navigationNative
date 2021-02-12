import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';


const Nosotros = ({navigation, route}) => {

const {clienteId} = route.params;

const volver = () => {
    //navigation.navigate('Inicio');
    navigation.goBack(); //retorna a la anterior
}

return (
    <View style={styles.contenedor}>
        <Text>{clienteId}</Text>
        <Button
            title = 'volver'
            onPress ={()=>volver()}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    contenedor : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});

export default Nosotros;