import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  bgColor?: string;
  ancho?: boolean;
  action: (textNumber: string) => void;
}

export const ButtonCalc = ({
  text,
  bgColor = '#2D2D2D',
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => action(text)}>
      <View
        style={[
          styles.button,
          {backgroundColor: bgColor},
          {
            width: ancho ? 180 : 80,
          },
        ]}>
        <Text
          style={[
            styles.btnText,
            {color: bgColor === '#9B9B9B' ? 'black' : 'white'},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
