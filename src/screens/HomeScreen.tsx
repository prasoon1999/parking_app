import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';

import CustomButton from '../components/atoms/CustomButton';
import CustomTextInput from '../components/atoms/CustomTextInput';
import { screen } from '../Styles';
import { FreeSpacesContext, ParkingContext, TotalSpacesContext } from '../utils/Contexts';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const {totalSpaces, setTotalSpaces} = useContext(TotalSpacesContext);
  const {setFreeSpacesData} = useContext(FreeSpacesContext);
  const {setParkingData} = useContext(ParkingContext);

  const onPress = () => {
    setParkingData([]);
    setFreeSpacesData([...Array(Number(totalSpaces) + 1).keys()].slice(1));
    navigation.navigate('PARKING_SCREEN');
  };

  return (
    <SafeAreaView style={{...screen.style, justifyContent: 'center'}}>
      <CustomTextInput
        placeholder="Total parking spaces"
        value={totalSpaces}
        keyboardType="number-pad"
        onChangeText={(count: number) => setTotalSpaces(count)}
      />
      <CustomButton
        title="Submit"
        disabled={!totalSpaces || isNaN(totalSpaces)}
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
