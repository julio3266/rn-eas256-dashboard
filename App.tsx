import { MainNavigator } from '@presentation/navigation/MainNavigator';
import { store } from '@presentation/store';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';


export default function App() {
    return (
       <Provider store={store}>
           <MainNavigator/>
       </Provider>
    );
}

