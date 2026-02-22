import 'react-native-reanimated';
import { MainNavigator } from '@presentation/navigation/MainNavigator';
import { store } from '@presentation/store';
import { ThemeProvider } from '@presentation/theme/ThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <MainNavigator />
            </ThemeProvider>
        </Provider>
    );
}
