import {useRef, useState} from 'react';
import {Alert} from 'react-native';

enum Operadores {
  add,
  subtract,
  divide,
  multiply,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [numberBefore, setNumberBefore] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const clean = () => {
    setNumber('0');
    setNumberBefore('0');
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

  const btnDelete = () => {
    if (number.length === 2 && number.includes('-')) {
      setNumber('0');
    } else if (number.length > 1) {
      setNumber(number.slice(0, number.length - 1));
    } else if (number.length === 1) {
      setNumber('0');
    }
  };

  const chageToNumberBefore = () => {
    if (number.endsWith('.')) {
      setNumberBefore(number.slice(0, -1));
    } else {
      setNumberBefore(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    chageToNumberBefore();
    ultimaOperacion.current = Operadores.divide;
  };
  const btnMultiply = () => {
    chageToNumberBefore();
    ultimaOperacion.current = Operadores.multiply;
  };
  const btnAdd = () => {
    chageToNumberBefore();
    ultimaOperacion.current = Operadores.add;
  };
  const btnSubtract = () => {
    chageToNumberBefore();
    ultimaOperacion.current = Operadores.subtract;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(numberBefore);

    switch (ultimaOperacion.current) {
      case Operadores.add:
        setNumber(`${num2 + num1}`);
        break;

      case Operadores.subtract:
        setNumber(`${num2 - num1}`);
        break;

      case Operadores.multiply:
        setNumber(`${num2 * num1}`);
        break;

      case Operadores.divide:
        if (num1 !== 0) {
          setNumber(`${num2 / num1}`);
        } else if (num2 / num1 && num1 === 0) {
          Alert.alert('No se puede dividir por 0');
          setNumber('0');
        }
    }
    setNumberBefore('0');
  };

  return {
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
  };
};
