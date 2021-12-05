import React from "react";
import { View, Text } from "react-native";
import {BaseCommentsSearchHoc} from "./src/components/hoc/search";

const App = () =>{
  
  return (
    <View style={{flex: 1}}>
      <BaseCommentsSearchHoc/>
    </View>
  )
}

export default App;