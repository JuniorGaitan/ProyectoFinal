import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Image, ScrollView, TextInput,Header } from "react-native";
import Formulario from "./Vistas/formulario";
import ListaArticulos from "./Vistas/listArticulos";
import AddCategoria from "./Vistas/agregarCategoria";
import EditarCategoria from "./Vistas/editarcategoria";

import Categorias from "./Vistas/categorias";
const Stack = createStackNavigator();

const MyStack = () => { 
 
  return ( 
    
    <Stack.Navigator>

        <Stack.Screen
            name="ListaArticulos"
            component={ListaArticulos}
            options={{ title: "Articulos" }}
      />
     <Stack.Screen name="addCategorias" 
      component={AddCategoria} 
       options={{ title: "Agregar categoria" }} />
     
    

        <Stack.Screen
         name="Categorias" 
        component={Categorias} 
        options={{ title: "Categoria" }} />
     
      
     <Stack.Screen name="Formulario" 
      component={Formulario} 
       options={{ title: "Agregar Articulos" }} />

      

<Stack.Screen name="editarCategoria" 
      component={ EditarCategoria } 
       options={{ title: "Agregar Articulos" }} />

      

     

    </Stack.Navigator>
  );
};
const App = () => {
 
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
