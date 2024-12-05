import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from '../../components/Header/Header';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});
