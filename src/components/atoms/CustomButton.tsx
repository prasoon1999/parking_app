import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';

import { button } from '../../Styles';

const CustomButton = (props: any) => (
  <Pressable
    onPress={props?.onPress}
    disabled={props?.disabled}
    style={[
      props?.disabled ? button.disabled : button.enabled,
      props?.type === 'secondary'
        ? [button?.default, button?.secondary]
        : props?.type === 'fab'
        ? [button?.default, button?.fab]
        : button?.default,
    ]}>
    <Text
      style={
        props?.type === 'secondary'
          ? {...button?.text, color: '#0e5cef'}
          : button?.text
      }>
      {props?.title}
    </Text>
  </Pressable>
);

export default memo(CustomButton);
