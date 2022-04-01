import { StyleSheet, FlatList, View ,Text ,Dimensions} from 'react-native'
import React from 'react'

const ItemsBody = ({items}) => {

    const renderItem = ({ item }) => (
        <View style={styles.itemTube}>
            <Text>{item}</Text>
        </View>
    )

  return (
    <View style={styles.container}>
      <FlatList 
        data={items}
        renderItem={renderItem}
        keyExtractor={(item,i) => i}
        style={styles.scroll}
      />
    </View>
  )
}

export default ItemsBody

const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor:"grey"
    },
    itemTube:{
        height:40,
        borderBottomColor:"grey",
        borderBottomWidth:0.3,
        paddingVertical:10,
        paddingHorizontal:20
    },
    scroll:{
      height:Dimensions.get("window").height-2
    }
})