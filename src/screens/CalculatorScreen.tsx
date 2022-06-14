import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [numberBefore, setNumberBefore] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const makeNumber = (textNumber: string) => {
    //No aceptar doble punto

    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //Punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);

        //Evaluar si es otro cero y hay un punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        //Evaluar si es diferente de 0 y no tiene punto para cambiar el num 0
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
        //Evitar 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{numberBefore}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true}>
        {number}
      </Text>

      {/* Btns row */}

      <View style={styles.row}>
        <ButtonCalc text="C" bgColor="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" bgColor="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" bgColor="#9B9B9B" />
        <ButtonCalc text="/" bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" action={makeNumber} />
        <ButtonCalc text="8" action={makeNumber} />
        <ButtonCalc text="9" action={makeNumber} />
        <ButtonCalc text="X" bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" action={makeNumber} />
        <ButtonCalc text="5" action={makeNumber} />
        <ButtonCalc text="6" action={makeNumber} />
        <ButtonCalc text="-" bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" action={makeNumber} />
        <ButtonCalc text="2" action={makeNumber} />
        <ButtonCalc text="3" action={makeNumber} />
        <ButtonCalc text="+" bgColor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" ancho={true} action={makeNumber} />
        <ButtonCalc text="." action={makeNumber} />
        <ButtonCalc text="=" bgColor="#FF9427" />
      </View>
    </View>
  );
};
