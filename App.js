// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import RootRoute from './routes/RootRoute';
import { Colours } from './components/Colours';

export default function App() {
  return (
    <View style={styles.container}>
      <RootRoute/>
      <StatusBar barStyle='light-content' backgroundColor={Colours.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colours.primary,
    // paddingTop:StatusBar.currentHeight
  },
});
