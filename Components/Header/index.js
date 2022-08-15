import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
const Header = () => {
  const Logo = require('../../assets/images/logo.png')
  const menu = require('../../assets/images/menu.png')
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Image source={menu} style={styles.menu} />
    </View>
  )
}

export default Header