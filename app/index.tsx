import { Image, StyleSheet, Platform, Button, View, Text, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import TextInputField from "../components/ThemedTextInput"
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';

export default function LoginScreen(){

    const [text, setText] = useState('');
    
    return (
        <>
        <Stack.Screen options={{ title:'' }} />
        <ThemedView darkColor='#111D4A'>
      
            <TextInputField  
                label='Email'
                placeholder="Email"
                value={text}
                onChangeText={setText}
            />
            <TextInputField  
                label='Password'
                placeholder="Password"
                value={text}
                onChangeText={setText}
            />
            <Link replace href="/(tabs)">Go to tabs</Link>
        </ThemedView>
        </>
    );
}