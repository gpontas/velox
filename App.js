import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainMenu from './screens/MainMenu';
import Savings from './screens/Savings';
import Budget from './screens/Budget';
import SavingsJune from './screens/SavingsJune';
import IncomeDynamic from './screens/IncomeDynamic';
import DigitIncome from './screens/DigitIncome';
import IncomeFixed from './screens/IncomeFixed';
import { GlobalProvider } from './GlobalState';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalProvider>

      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainMenu">
            <Stack.Screen name="MainMenu" component={MainMenu} options={{headerShown: false}}/>
            <Stack.Screen name="Savings" component={Savings} options={
                {headerTitle: '', headerStyle:
                {backgroundColor:'#F8F8F8'},
                headerShadowVisible: true,
                headerBackTitleVisible: true,
                headerBackTitleStyle: {color: '#808080'},
                headerBackTitle: 'Back',
                headerTintColor: '#808080'
              }
                }/>
            <Stack.Screen name="Budget" component={Budget} options={
                {headerTitle: '', headerStyle:
                {backgroundColor:'#F8F8F8'},
                headerShadowVisible: true, 
                headerBackTitleVisible: true,
                headerBackTitleStyle: {color: '#808080'},
                headerBackTitle: 'Back',
                headerTintColor: '#808080'}}/>
            <Stack.Screen name="SavingsJune" component={SavingsJune} options={
                {headerTitle: '', headerStyle:
                {backgroundColor:'#F8F8F8'},
                headerShadowVisible: true, 
                headerBackTitleVisible: true,
                headerBackTitleStyle: {color: '#808080'},
                headerBackTitle: 'Back',
                headerTintColor: '#808080'}}/>
            <Stack.Screen name="IncomeDynamic" component={IncomeDynamic} options={
                {headerTitle: '', headerStyle:
                {backgroundColor:'#F8F8F8'},
                headerShadowVisible: true, 
                headerBackTitleVisible: true,
                headerBackTitleStyle: {color: '#808080'},
                headerBackTitle: 'Back',
                headerTintColor: '#808080'}}/>
            <Stack.Screen name="DigitIncome" component={DigitIncome} options={
                {headerTitle: '', headerStyle:
                {backgroundColor:'#F8F8F8'},
                headerShadowVisible: true, 
                headerBackTitleVisible: true,
                headerBackTitleStyle: {color: '#808080'},
                headerBackTitle: 'Back',
                headerTintColor: '#808080'}}/>
            <Stack.Screen name="IncomeFixed" component={IncomeFixed} options={
                {headerTitle: '', headerStyle:
                {backgroundColor:'#F8F8F8'},
                headerShadowVisible: true, 
                headerBackTitleVisible: true,
                headerBackTitleStyle: {color: '#808080'},
                headerBackTitle: 'Back',
                headerTintColor: '#808080'}}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto"/>
      </View>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
