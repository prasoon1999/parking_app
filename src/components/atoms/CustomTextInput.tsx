import React, { memo } from 'react';
import { TextInput } from 'react-native';

import { form } from '../../Styles';

const CustomTextInput = (props: any) => (
  <TextInput
    placeholder={props?.placeholder}
    value={props?.value}
    maxLength={30}
    numberOfLines={1}
    style={form.style}
    onChangeText={props?.onChangeText}
    placeholderTextColor="gray"
    keyboardType={props?.keyboardType}
    editable={props?.editable}
  />
);

export default memo(CustomTextInput);
