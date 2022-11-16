import React, { useContext } from 'react';
import { SafeAreaView, Text, ToastAndroid, View } from 'react-native';

import CustomButton from '../components/atoms/CustomButton';
import { getTimeSpent } from '../helpers/Functions';
import { screen, text, thumbnail } from '../Styles';
import { FreeSpacesContext, ParkingContext } from '../utils/Contexts';

const VehicleScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {vehicleData} = route.params;
  const {parkingData, setParkingData} = useContext(ParkingContext);
  const {freeSpacesData, setFreeSpacesData} = useContext(FreeSpacesContext);

  const getParkingCharge = (timeSpent: number) => {
    var parkingCharge;
    if (timeSpent <= 2) parkingCharge = 10;
    else parkingCharge = 10 + (timeSpent - 2) * 10;
    return parkingCharge;
  };

  const postVehicleData = (carRegistration: string, charge: number) => {
    return fetch('https://httpstat.us/200/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'car-registration': carRegistration,
        charge: charge,
      }),
    });
  };

  const onPaymentTaken = (thisNumberPlate: string, thisId: number) => {
    ToastAndroid.show('Parking spot cleared', ToastAndroid.BOTTOM);
    postVehicleData(vehicleData?.numberPlate, parkingCharge);
    const newParkingData = parkingData?.filter(
      (vehicle: any) => vehicle?.numberPlate != thisNumberPlate,
    );
    setParkingData(newParkingData);
    setFreeSpacesData([...freeSpacesData, thisId]);
    navigation.goBack();
  };

  const timeSpent = getTimeSpent(vehicleData?.parkingTime);
  const parkingCharge = getParkingCharge(timeSpent);

  return (
    <SafeAreaView style={screen.style}>
      <View style={thumbnail?.style}>
        <Text style={thumbnail?.text}>{vehicleData?.id}</Text>
      </View>

      <View style={{height: 32}} />
      <Text style={text?.normal}>Registration number</Text>
      <Text style={text?.heading}>{vehicleData?.numberPlate}</Text>

      <View style={{height: 32}} />
      <Text style={text?.normal}>Parking charge</Text>
      <Text style={text?.heading}>${parkingCharge}</Text>

      <View style={{height: 32}} />
      <Text style={text?.normal}>Time spent</Text>
      <Text style={text?.heading}>
        {timeSpent} {timeSpent < 2 ? 'hour' : 'hours'}
      </Text>

      <View style={{height: 32}} />
      <Text style={text?.normal}>Parking time</Text>
      <Text style={text?.heading}>{vehicleData?.parkingTime}</Text>

      <CustomButton
        title="Payment taken"
        onPress={() =>
          onPaymentTaken(vehicleData?.numberPlate, vehicleData?.id)
        }
      />
    </SafeAreaView>
  );
};

export default VehicleScreen;
