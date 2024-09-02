import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainMenu from './screens/MainMenu';
import Savings from './screens/Savings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainMenu">
          <Stack.Screen name="MainMenu" component={MainMenu} options={{headerShown: false}}/>
          <Stack.Screen name="Savings" component={Savings} options={{headerTitle: ''}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
