import React from 'react';
import { Pressable, Text } from 'react-native';

import { card, text } from '../../Styles';

const ParkingCard = ({
  navigation,
  vehicleData,
}: {
  vehicleData: any;
  navigation: any;
}) => {
  const onPress = () => {
    navigation.navigate('VEHICLE_SCREEN', {
      navigation,
      vehicleData,
    });
  };

  return (
    <Pressable style={card.style} onPress={onPress}>
      <Text style={text.title}>{vehicleData?.id}</Text>
      <Text style={text.normal}>{vehicleData?.numberPlate}</Text>
    </Pressable>
  );
};

export default ParkingCard;
