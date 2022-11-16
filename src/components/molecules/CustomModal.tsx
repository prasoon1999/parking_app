import React, { useContext, useEffect, useState } from 'react';
import { Modal, Pressable, Text, ToastAndroid, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { getRandomSpace, getTimeSpent } from '../../helpers/Functions';
import { modal, screen, text } from '../../Styles';
import { FreeSpacesContext, ParkingContext } from '../../utils/Contexts';
import CustomButton from '../atoms/CustomButton';
import CustomTextInput from '../atoms/CustomTextInput';

const CustomModal = ({
  isModalVisible,
  setModalVisibility,
}: {
  isModalVisible: boolean;
  setModalVisibility: (value: boolean) => void;
}) => {
  const {parkingData, setParkingData} = useContext(ParkingContext);
  const {freeSpacesData, setFreeSpacesData} = useContext(FreeSpacesContext);
  const [numberPlate, setNumberPlate] = useState('');
  const [parkingTime, setParkingTime] = useState('');
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const onSelectTime = (time: any) => {
    const selectedTime = time.getHours() + ':' + time.getMinutes();
    setTimePickerVisibility(false);
    getTimeSpent(selectedTime) < 0
      ? ToastAndroid.show(
          'Parking time exceeds the current time',
          ToastAndroid.BOTTOM,
        )
      : setParkingTime(selectedTime);
  };

  const addParking = () => {
    setModalVisibility(false);
    setParkingData([
      {
        id: getRandomSpace(freeSpacesData, setFreeSpacesData),
        numberPlate: numberPlate,
        parkingTime: parkingTime,
      },
      ...parkingData,
    ]);
    setNumberPlate('');
    setParkingTime('');
  };

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var mins = new Date().getMinutes(); //Current Minutes
    setParkingTime(hours + ':' + mins);
  }, [isModalVisible === true]);

  return (
    <Modal
      animationType="fade"
      visible={isModalVisible}
      transparent={true}
      onRequestClose={() => setModalVisibility(false)}>
      <View
        style={{
          ...screen.style,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={modal.style}>
          <Text style={text?.normal}>Registration number</Text>

          <CustomTextInput
            value={numberPlate}
            placeholder="Registration number"
            onChangeText={setNumberPlate}
          />

          <Text style={{...text?.normal, marginTop: 16}}>Parking time</Text>

          <Pressable onPress={() => setTimePickerVisibility(true)}>
            <CustomTextInput value={parkingTime} editable={false} />
          </Pressable>

          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={onSelectTime}
            onCancel={() => setTimePickerVisibility(false)}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <CustomButton
              type="secondary"
              title="Cancel"
              onPress={() => setModalVisibility(false)}
            />

            <CustomButton
              title="Submit"
              disabled={!numberPlate || !parkingTime}
              onPress={addParking}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
