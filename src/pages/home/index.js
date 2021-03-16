import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Página Home</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%',
        


    }

});