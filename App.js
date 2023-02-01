import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Touchable} from 'react-native';
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './StackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  )

}
