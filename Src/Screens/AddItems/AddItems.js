import { View, Text } from 'react-native'
import React,{useState, useEffect} from 'react'
import Header from '../../Components/Header/Header'
import ItemsBody from '../../Components/ItemsBody/ItemsBody'

const AddItems = () => {
    const [searchVal, setSearchVal] = useState("")
    const [items, setItems] = useState(["Milk 123","Coffee 776","Oranges 241","Bread 882"])
    const [searchedItems, setSearchedItems] = useState([])
    const [backeditems] = useState(["blanket","magnet","phone","vase","socks","nail file","spring","floor","glass","shoe lace","pool stick","clock","purse","perfume","chalk","mirror","boom box","bookmark","cookie jar","chocolate","washing machine","air freshener","balloon","soda can",])

    const additem = () => {
        let len = Math.floor(Math.random() * backeditems.length)
        let itid = Math.floor(Math.random() * (1000-len))
        let newitem = backeditems[len] + " " + itid;
        setItems(preitems=>[newitem,...preitems])
    }

    const searchItems = () => {
        setSearchedItems(items.filter(item => item.toLowerCase().indexOf(searchVal) > -1))
    }

    useEffect(() => searchItems(), [searchVal,items])
    
  return (
    <View>
      <Header additem={additem} setSearchVal={setSearchVal}/>
      <ItemsBody items={searchedItems}/>
    </View>
  )
}

export default AddItems