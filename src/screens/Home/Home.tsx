import React from 'react'
import {SafeAreaView, StyleSheet } from 'react-native'
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'

export default function Home() {
  return (
    <SafeAreaView style={style.Home}>
        <Header />
        <Body />
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  Home: {
    backgroundColor: '#f3f3f3',
  }
})