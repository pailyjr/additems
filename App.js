import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import AddItems from './Src/Screens/AddItems/AddItems';
import {SafeAreaView} from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Additem Screen */}
      <AddItems />
      <StatusBar translucent={true} style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
