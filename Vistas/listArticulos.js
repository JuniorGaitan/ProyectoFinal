import React, {useState,useEffect, Component } from "react";

import {
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import {
  Icon,
  listItems,
  Avatar,
  ListItem,
  Divider,
} from "react-native-elements";

const url="http://127.0.0.1:8000/api/productos"
const List = (props) => {

 const Productos=[
  { id:1,
   name:"frijol",
  }
 ]
  const mostrarformulario=true
  //desetructuracion de arreglos
  const [loading,setLoading] = useState(false)
  const [formLogin,setFormlogin] = useState({
      username:'',
      password:'',
      loading:false,
  })
  const [productosList,setProductos] = useState([])
  useEffect(()=>{
    entrar()

  },[])
  //fetch api del navegador o js

 
  const entrar = async()=>{
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
          .then((resp) =>setProductos(resp.data)
          )
          .catch((error)=>{
            console.log(error);

          });
         
         

  }
 
  return (
    <ScrollView style={styles.subcontainer}>
       
      <Button color="#19AC52"
        title="Agregar Articulo"
        onPress={() =>  props.navigation.navigate("Formulario")}
       
      />
      
      
      {productosList.map((Producto) => {
        <Text>AGREGAR</Text>;
        return (
          <ListItem bottomDivider onPress={()=>alert(Producto.id)}
            key={Producto.id}
            containerStyle={Producto.id % 2 === 0 ? styles.item1 : styles.item2}
          >            
            <Avatar
              size="small"
              icon={{ name: "edit", type: "font-awesome" }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>
              
                {Producto.producto} 
              </ListItem.Title>
              
              <ListItem.Subtitle>C$ {Producto.precio}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
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

export default List;
