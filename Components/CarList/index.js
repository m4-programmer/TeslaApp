import React from 'react'
import { View, Text, FlatList,Dimensions } from 'react-native'
import styles from './styles'
import CarItem from "../CarItem";
import  cars  from '../../assets/cars';
const CarList = () => {
  
  return (
    <FlatList
      data={cars}
      renderItem={({ item }) => <CarItem car={item} />}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('screen').height}
      showsVerticalScrollIndicator={false}
 
    />
  
  )
}

export default CarList