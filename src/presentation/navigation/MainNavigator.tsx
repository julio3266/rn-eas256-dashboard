import { HomeScreen } from '@presentation/screens/HomeScreen';
import { UserDetailsScreen } from '@presentation/screens/UserDetailsScreen';
import { theme } from '@presentation/theme/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} id="main-stack">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerStyle: {
                            backgroundColor: theme.colors.background,
                        },
                    }}
                    name="UserDetails"
                    component={UserDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
