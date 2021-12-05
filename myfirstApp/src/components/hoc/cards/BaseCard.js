import React from "react";
import { View, StyleSheet } from "react-native";

export function BaseCard(Card) {

    return function(props){

        return(
            <View style = {props.backgroundColor ? styles.cardContainer: styles.mainCardContainer}>
            <Card {...props} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FF0000',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    mainCardContainer:{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16, 
    }  
})