import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListCard from "../hoc/cards/Cards";


const CommentsList = (props) => {

   console.log("comments list props changes");

    const renderItem = ({ item }) => (
        <ListCard id={item.id} title={item.name} email={item.email} />
      );

    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: 12,
    },
  });


  export default CommentsList;