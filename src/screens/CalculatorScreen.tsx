import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,5000.00</Text>
      <Text style={styles.result}>1,5000.00</Text>

      {/* Btns row */}

      <View style={styles.row}>
        <ButtonCalc text="C" bgColor="#9B9B9B" />
        <ButtonCalc text="+/-" bgColor="#9B9B9B" />
        <ButtonCalc text="del" bgColor="#9B9B9B" />
        <ButtonCalc text="/" bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" />
        <ButtonCalc text="8" />
        <ButtonCalc text="9" />
        <ButtonCalc text="X" bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" />
        <ButtonCalc text="5" />
        <ButtonCalc text="6" />
        <ButtonCalc text="-" bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" />
        <ButtonCalc text="2" />
        <ButtonCalc text="3" />
        <ButtonCalc text="+" bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" ancho={true} />
        <ButtonCalc text="." />
        <ButtonCalc text="=" bgColor="#FF9427" />
      </View>
    </View>
  );
};
