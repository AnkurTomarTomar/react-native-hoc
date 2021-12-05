import React from "react";
import { BaseCard } from "./BaseCard";
import { View, StyleSheet, Text } from "react-native";

function Card(props) {

      const data = [];
      Object.entries(props).filter(([key]) => key !== 'id' && key !== 'backgroundColor').forEach(([key, value]) =>{
        data.push(<Text key={props.id+key} style={styles.title}>{ value}</Text>);
      });


    return (
        <View>
           {data}
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
    },
});

export default BaseCard(Card);