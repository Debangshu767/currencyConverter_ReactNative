import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

import {currencyByRupee} from './constants';
import CurrencyButton from './components/CurrencyButton';

const App = () => {

  const [inputValue,setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
  
    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } 
  }




  return (
    <>
      <StatusBar backgroundColor={'rgb(30 27 75)'} />

      <View className='bg-indigo-950 h-full p-1'>

      {resultValue && (
            <View className=' bg-indigo-600 items-center p-3 m-2 ' >
              <Text className='text-3xl font-bold text-indigo-200 ' >
              {resultValue}
            </Text>
            </View>
          )}

        <View className=' flex flex-row  p-4 items-center  '>
          <TextInput keyboardType = 'numeric' onChangeText={(num) => setInputValue(num) }  className='bg-slate-300 rounded-lg w-full placeholder:text-center text-indigo-900 placeholder:text-lg ' placeholderTextColor={'rgb(30 27 75)'}  placeholder='Enter Amount here' />
        </View>

        <View className="flex flex-wrap flex-row items-center justify-center ">
          {currencyByRupee.map(item => {
            return (
              <TouchableOpacity key={item.value} onPress={() => buttonPressed(item)} >
              <CurrencyButton
                
                flag={item.flag}
                name={item.name}
              />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default App;
