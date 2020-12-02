import React, { Component, useState, Header } from "react";
import {View,Image,Button,TextInput,ScrollView,StyleSheet,Text,ListView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import {Icon,listItems,Avatar,ListItem,CheckBox,Divider,
} from "react-native-elements";
import { render } from "react-dom";
import Edit from './categorias'

const Formulario = (props) => {
  const [formArticulos, setFormArticulos] = useState({
    nombre: "",
    categoria: "",
    marca: "",
    precio: "",
    costo: "",
    stock: "",
  });
  const entrar = async()=>{
    //https://dsalinas.pythonanywhere.com/api/preguntas
    //api/token
           await  fetch('http://127.0.0.1:8000/api/productos',{
            method:'POST',
            body: JSON.stringify(formArticulos),
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
  const Mostrarlista = () => {
    if (formArticulos.nombre === "") {
      alert("faltan campos por llenar");
     
    } else {
      entrar()
      props.navigation.navigate("ListaArticulos");
     
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.Avatar}>
          <Text>Ingresar Prodcutos </Text>
        </View>
        <View style={styles.imputgroup}>
          <Text>Nombre: </Text>
          <View style={styles.text}>
            <TextInput
             
              onChangeText={(text) =>
                setFormArticulos({ ...formArticulos, nombre: text })
              }
              placeholder="Nombre"
            />
          </View>
          <Text>Categoria: </Text>
          <View style={styles.text}>
            <Button style={styles.button}
             onPress={()=>  props.navigation.navigate("Categorias")}
              title="selecconar Categoria"
            />
            <TextInput
              onChangeText={(text) =>
                setFormArticulos({ ...formArticulos, categoria: text })
              }
              placeholder="Desplegable"
            />
            
          </View>
          <Text>Marca: </Text>
          <View style={styles.text}>
            <TextInput
              onChangeText={(text) =>
                setFormArticulos({ ...formArticulos, marca: text })
              }
              placeholder="Desplegable"
            />
            
          </View>
          <Text>Precio: </Text>
          <View style={styles.text}>
            <TextInput
              onChangeText={(text) =>
                setFormArticulos({ ...formArticulos, precio: text })
              }
              placeholder="Númerico"
            />
          </View>
          <Text>Costo: </Text>
          <View style={styles.text}>
            <TextInput
              onChangeText={(text) =>
                setFormArticulos({ ...formArticulos, costo: text })
              }
              placeholder="Númerico"
            />
          </View>
          <Text>Stock por almacenar: </Text>
          <View style={styles.text}>
            <TextInput
              onChangeText={(text) =>
                setFormArticulos({ ...formArticulos, stock: text })
              }
              placeholder="Númerico"
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#19AC52"
              title="Agregar"
              onPress={() => Mostrarlista()}
            />
          </View>
        </View>
      </View>
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
    borderWidth: 1,
  },
  imputgroup: {
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
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
    borderBottomWidth: 0.1,
    borderRadius: 2,
    borderWidth: 1,
  },

  Avatar: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    paddingTop: 15,
  },
});
export default Formulario;
