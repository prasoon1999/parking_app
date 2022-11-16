import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import CustomButton from '../components/atoms/CustomButton';
import CustomModal from '../components/molecules/CustomModal';
import ParkingCard from '../components/molecules/ParkingCard';
import { screen, text } from '../Styles';
import { ParkingContext, TotalSpacesContext } from '../utils/Contexts';

const ParkingScreen = ({navigation}: {navigation: any}) => {
  const {parkingData} = useContext(ParkingContext);
  const [availableSpaces, setAvailableSpaces] = useState(0);
  const [isModalVisible, setModalVisibility] = useState(false);
  const {totalSpaces} = useContext(TotalSpacesContext);

  const renderItem = ({item}: {item: any}) => (
    <ParkingCard vehicleData={item} navigation={navigation} />
  );

  useEffect(() => {
    setAvailableSpaces(totalSpaces - parkingData?.length);
  }, [parkingData]);

  return (
    <SafeAreaView style={{...screen.style, paddingRight: 8}}>
      <Text style={{...text?.title, marginBottom: 16}}>
        {availableSpaces
          ? `${availableSpaces} available spaces`
          : 'Parking is full'}
      </Text>

      <FlatList
        data={parkingData}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 80}} />}
      />

      <CustomButton
        type="fab"
        title={'New parking'}
        onPress={() => setModalVisibility(true)}
        disabled={!availableSpaces}
      />

      <CustomModal
        isModalVisible={isModalVisible}
        setModalVisibility={setModalVisibility}
      />
    </SafeAreaView>
  );
};

export default ParkingScreen;
