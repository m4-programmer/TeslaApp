import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
import Buttons from '../Buttons'
import styles from './styles'
const CarItem = (props) => {
  
  const { name, tagline, taglineCTA, image } = props.car
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>{tagline} &nbsp;
          <Text style={{textDecorationLine: 'underline'}}>{taglineCTA}</Text></Text>
          
          
        </View>
        <View style={styles.buttons}>
          <Buttons text={'Customer Order'} type='secondary' />
          <Buttons text={'Existing Inventory'} type='primary'/>
        </View>
      </ImageBackground>
    </View>
  )
}

export default CarItem