import { View, TextInput, StyleSheet ,Dimensions, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({additem,setSearchVal}) => {

  return (
    <View style={styles.headerView}>
      <View style={styles.searchView}>
          <TextInput onChangeText={(val)=>setSearchVal(val.toLowerCase())} style={styles.inputBar}/>
      </View>
      <View style={styles.divider}/>
      <View style={styles.addView}>
        <TouchableOpacity onPress={additem} style={styles.addView}>
            <Ionicons style={{elevation:5}} name="add" size={40} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerView:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        paddingHorizontal:10,
        elevation:5
    },
    searchView:{
        width:Dimensions.get("window").width-60,
        height:50,
        padding:5
    },
    inputBar:{
        height:40,
        backgroundColor:"white",
        borderWidth:0.4,
        borderColor:"grey",
        borderRadius:4,
        paddingHorizontal:10,
        elevation:5
    },
    addView:{
        width:40,
        margin:"auto"
    }
})