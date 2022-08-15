import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
const Buttons = ({ text, type }) => {
  const bgColor = type === 'primary' ? '#f1f1fc' : '#01010c'
  const txtColor = type === 'primary' ? '#01010c' : '#f1f1fc'
  return (
    <View style={{width: '100%',padding:10}}>
      <Pressable>
        <View style={[styles.Buttons,{backgroundColor: bgColor}]}>
          <Text style={[styles.ButtonsText,{color: txtColor}]}>{text}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Buttons