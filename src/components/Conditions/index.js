import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Conditions(){
    return(
        <View style={styles.container}>
            <View style={styles.condition}>
                <Feather name='wind' size={23} color='#1ed6ff' />
                <Text>7 km/h</Text>
            </View>
            <View style={styles.condition}>
                <MaterialCommunityIcons name='weather-sunset-up' size={23} color='#1ed6ff' />
                <Text>7 km/h</Text>
            </View>
            <View style={styles.condition}>
                <Feather name='wind' size={23} color='#1ed6ff' />
                <Text>7 km/h</Text>
            </View>
            <View style={styles.condition}>
                <Feather name='wind' size={23} color='#1ed6ff' />
                <Text>7 km/h</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

});