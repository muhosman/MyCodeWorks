import React, {useEffect, useLayoutEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,

} from 'react-native';

function App(){

 const initialUsers = [
   {name: 'Osman Talha Aydın', comment: 'I am going to school.I am going to school.I am going to school.I am going to school.'
   ,color:'#686de0'},
   {name: 'Sami Yavuz', comment: 'I am going to school.',color:'#686de0'}
 ];

 const [users,setUsers] = useState(initialUsers);
 const [press,setPress] = useState(false);
 const [tempName,setTempName] = useState('');
 const [tempComment,setTempComment] = useState('');
 
 function openWindow(){
   setPress(true);
 }
 function closeAddWindow(number:number)
 {
   if(number==0){
     addNewComment();
   }
   setPress(false);
   setTempName('');
   setTempComment('');
 }

 function addNewComment()
 {
   const newUser = {name:tempName,comment:tempComment,color:'#686de0'}
   
   if(newUser.name != '' && newUser.comment != '')
   {
     setUsers([...users,newUser]);
   }
 }


 return (
       <SafeAreaView style={{flex:1}}>
         <TouchableWithoutFeedback onPress={()=>{closeAddWindow(1)}}>
         <View style={{flex:1}}>
           <View style={{zIndex:0}}>
             <FlatList
               style={{maxHeight: '100%',width:350}}
               data={users}
               renderItem={({item}) => {
                   return (
                       <View style={styles.list}>
                         <View style={{marginTop:10,marginLeft:20,flexDirection:'row'}}>
                           <AntDesign name="user" size={20}/>
                           <Text style={{marginLeft:10,}}>{item.name}</Text>
                         </View>
                         <View style={{marginLeft:20,marginRight:20,marginTop:5,flexDirection:'row'}}>
                           <Text>{item.comment}</Text>
                         </View>
                         <View>
                           <AntDesign name="like1" size={15}
                           style={{marginLeft:240}}/>
                         </View>
                       </View>
                   );
               }}
             />
           </View>
           <TouchableOpacity onPress={openWindow} style={styles.addButton}/>
         </View>
         </TouchableWithoutFeedback>
         {press?( 
           <View style={styles.popUp}>

             <TextInput
               placeholder='Name'
               style={styles.input}
               autoFocus
               onChangeText={(text)=>setTempName(text)}
             />
             <TextInput
               placeholder='Comment'
               style={styles.input}
               onChangeText={(text)=>setTempComment(text)}
             />
             <TouchableOpacity onPress={()=>{closeAddWindow(0)}} style={styles.sendButton}/>
           </View>
         ) :null }
       </SafeAreaView>

 );
};

const styles = StyleSheet.create({
 list:{
   marginTop:10,
   marginLeft:30,
   marginRight:30,
   backgroundColor:'#dfe6e9',
   borderRadius:50,
   flexDirection:'column'
 },
 popUp:{
   zIndex:1,
   alignSelf:'center',
   borderRadius:50,
   backgroundColor:'#dfe6e9',
   position:'absolute',
   width:300,
   height:200,
   marginTop:200
 },
 addButton:{
   position:'absolute',
   borderRadius:50,
   width:50,
   height:50,
   backgroundColor:'#b2bec3',
   marginTop:600,
   marginLeft:300
 },
 sendButton:{
   position:'absolute',
   borderRadius:50,
   width:50,
   height:30,
   backgroundColor:'#b2bec3',
   marginTop:160,
   alignSelf:'center',
   alignItems:'center'
 },
 input: {
   marginTop:25,
   height: 40,
   margin: 12,
   borderWidth: 1,
 },

})


export default App;