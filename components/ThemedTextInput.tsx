import React from "react";
import { ForwardRefRenderFunction, useState } from "react";
import { View, Text, TextInput } from "react-native";

interface TextInputProps {
    label: string;
    placeholder?: string;
    onChangeText: (text: string) => void;
    value: string;
   
}


const TextInputField: React.FC<TextInputProps> = ({ placeholder, onChangeText, value, label}) => {

    const handleChangeText = (text: string) => {
        onChangeText(text);
      };
   
    return(
        <View>
            <Text className="ml-8 py-1">{label}</Text>
            <TextInput className="border-solid border-2 rounded-md px-4 mx-8 py-2" placeholder={placeholder} onChangeText={handleChangeText}  value={value} />
            <Text>Value: {value}</Text>
        </View>
    );
}

export default TextInputField;