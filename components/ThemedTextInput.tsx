import React from "react";
import { ForwardRefRenderFunction, useState } from "react";
import { View, Text, TextInput } from "react-native";

interface TextInputProps {
    label: string;
    placeholder?: string;
    onChangeText: (text: string) => void;
    
   
}


const ThemedTextInput: React.FC<TextInputProps> = ({ placeholder, onChangeText, label}) => {

    const handleChangeText = (text: string) => {
        onChangeText(text);
      };
   
    return(
        <View className="pb-2 pt-2">
            <TextInput className="border-solid border-2 rounded-md px-4 mx-8 py-2" placeholder={placeholder} onChangeText={handleChangeText} placeholderTextColor="#333" />
            
        </View>
    );
}

export default ThemedTextInput;