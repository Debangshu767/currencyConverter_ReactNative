import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name : string;
    flag : string;
}>

const CurrencyButton = (props : CurrencyButtonProps) : JSX.Element => {
  return (
      
        <View className='items-center bg-indigo-950 w-[100px] p-2 rounded-lg shadow-xl shadow-neutral-950  border-b-2 border-indigo-700 m-2 '>
            <Text className=' text-7xl '>{props.flag}</Text>
            <Text className=' text-sm text-white font-extralight '>{props.name}</Text>
        </View>

  )
}

export default CurrencyButton