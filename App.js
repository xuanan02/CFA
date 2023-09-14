import React from "react";
import {StatusBar} from 'react-native';
import  NavigationComponent from './src/modules/component/navigation';
import {AuthProvider} from './src/modules/context/AuthContext';
const App = () =>{

    return (
      <AuthProvider>
        <StatusBar backgroundColor="#06bcee" />
        <NavigationComponent />
      </AuthProvider>

    )
    
}

export default App;