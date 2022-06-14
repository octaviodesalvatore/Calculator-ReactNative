import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    numberBefore,
    number,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    makeNumber,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {numberBefore !== '0' && (
        <Text style={styles.smallResult}>{numberBefore}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true}>
        {number}
      </Text>

      {/* Btns row */}

      <View style={styles.row}>
        <ButtonCalc text="C" bgColor="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" bgColor="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" bgColor="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" bgColor="#FF9427" action={btnDivide} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" action={makeNumber} />
        <ButtonCalc text="8" action={makeNumber} />
        <ButtonCalc text="9" action={makeNumber} />
        <ButtonCalc text="X" bgColor="#FF9427" action={btnMultiply} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" action={makeNumber} />
        <ButtonCalc text="5" action={makeNumber} />
        <ButtonCalc text="6" action={makeNumber} />
        <ButtonCalc text="-" bgColor="#FF9427" action={btnSubtract} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" action={makeNumber} />
        <ButtonCalc text="2" action={makeNumber} />
        <ButtonCalc text="3" action={makeNumber} />
        <ButtonCalc text="+" bgColor="#FF9427" action={btnAdd} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" ancho={true} action={makeNumber} />
        <ButtonCalc text="." action={makeNumber} />
        <ButtonCalc text="=" bgColor="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
