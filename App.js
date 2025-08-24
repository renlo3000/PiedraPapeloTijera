import { SafeAreaView, StyleSheet } from 'react-native';
import { AppBar } from '@react-native-material/core';
import PPTForm from './app/PPTForm';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar title="PPT" />
      <PPTForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
