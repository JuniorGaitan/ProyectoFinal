import React, {useState,useEffect, Component } from "react";
import {View,Image,Button,TextInput,ScrollView,StyleSheet,Text,
  ListView,TouchableHighlight,TouchableOpacity,ActivityIndicator,
} from "react-native";
import {Icon,listItems,Avatar,ListItem, Divider,} from "react-native-elements";
import Formulario from "./Vistas/formulario";


const url ='http://127.0.0.1:8000/api/categorias';

const categorias = (props) => {
     const mostrarformulario=true
     //desetructuracion de arreglos
     const [loading,setLoading] = useState(false)
     const [categoriasList,setcategoria] = useState([])


     const [categoriaid,setcategoriaid] = useState({

       Formulario:"",


     })


   useEffect(()=>{
        listar()
     },[setcategoria])
     //fetch api del navegador o js
   
    
     const listar = async()=>{
         //https://dsalinas.pythonanywhere.com/api/preguntas
         //api/token
                await fetch(url,{
                 method:'GET',
                 body: JSON.stringify(),
                 headers: {
                     'Content-Type': 'application/json'
                 },
                     
         })
             .then((resp) => resp.json())
             .then((resp) =>setcategoria(resp.data)
             )
             .catch((error)=>{
               console.log(error);
   
             });
            
   
     }
    
     return (
       <ScrollView style={styles.subcontainer}>
          
         <Button color="#19AC52"
           title="Agregar Categoria"
           onPress={() =>  props.navigation.navigate("addCategorias")}
          
         />
         
         {categoriasList.map((categoria) => {
          
           return (
             <ListItem bottomDivider onPress={()=> alert(categoria.id)}
               key={categoria.id}
               containerStyle={categoria.id % 2 === 0 ? styles.item1 : styles.item2}
             >               
               <Avatar
                 size="small"
                 icon={{ name: "edit", type: "font-awesome" }}
                 rounded
                 onPress={()=> props.navigation.navigate("editarCategoria")}
               />
               <ListItem.Content>
                 <ListItem.Title>
                   {categoria.categoria} 
                 </ListItem.Title>
                
               </ListItem.Content>
               <ListItem.Chevron 
                onPress={()=> props.navigation.navigate("editarCategoria")}/>
             </ListItem>
           );
         })}
       </ScrollView>
     );
   };
   

const styles = StyleSheet.create({
    item1: { backgroundColor: "#808080" },
    item2: { backgroundColor: "#a9a9a9" },
    container: {
      flex: 1,
      backgroundColor: "#18448f",
      padding: 35,
    },
  
    disket: {
      marginTop: 5,
      width: 20,
      height: 20,
    },
    subcontainer: {
      flex: 1,
      backgroundColor: "#ffffff",
      borderRadius: 5,
      marginTop: 20,
    },
    imputgroup: {
      padding: 10,
      marginBottom: 15,
      borderBottomColor: "#cccccc",
    },
    Cabecera: {
      flex: 1,
      padding: 10,
      backgroundColor: "white",
    },
    button: {
      marginBottom: 15,
      borderRadius: 10,
      paddingBottom: 15,
      paddingTop: 15,
    },
  
    text: {
      borderWidth: 0.5,
      borderRadius: 2,
    },
  
    Avatar: {
      flex: 1,
      alignItems: "center",
      marginTop: 10,
      paddingTop: 15,
    },
  });
  
export default categorias;