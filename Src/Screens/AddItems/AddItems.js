import { View, Text } from 'react-native'
import React,{useState, useEffect} from 'react'
import Header from '../../Components/Header/Header'
import ItemsBody from '../../Components/ItemsBody/ItemsBody'

const AddItems = () => {

    //declaring states
    const [searchVal, setSearchVal] = useState("") //Search input
    const [items, setItems] = useState(["Milk 123","Coffee 776","Oranges 241","Bread 882"])   //initial items
    const [searchedItems, setSearchedItems] = useState([])   //searched items (initially everything will be displayed as seachval = '')
    const [backeditems] = useState(["blanket","magnet","phone","vase","socks","nail file","spring","floor","glass","shoe lace","pool stick","clock","purse","perfume","chalk","mirror","boom box","bookmark","cookie jar","chocolate","washing machine","air freshener","balloon","soda can",])

    //add item function definition
    const additem = () => {
        let len = Math.floor(Math.random() * backeditems.length)
        console.log(len);
        //To add id to each common items to separate them
        let itid = Math.floor(Math.random() * (1000-len))
        console.log(itid);
        //New item will be created with item name and unique id
        let newitem = backeditems[len] + " " + itid;
        console.log(newitem);
        setItems(preitems=>[newitem,...preitems])
    }

    //search item function definition
    const searchItems = () => {
        setSearchedItems(items.filter(item => item.toLowerCase().indexOf(searchVal) > -1))
    }

    //To trigger searchItems() whenever balue of searchval or items changes
    useEffect(() => searchItems(), [searchVal,items])
    
  return (
    <View>
      <Header additem={additem} setSearchVal={setSearchVal}/>  
      <ItemsBody items={searchedItems}/>
    </View>
  )
}

export default AddItems