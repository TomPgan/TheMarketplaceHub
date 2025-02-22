import { Image, StyleSheet, Platform, Button, View, Text, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedTextInput } from '@/components/ThemedTextInput';

import { Link, Stack } from 'expo-router';
import React from 'react';

export default function LoginScreen(){

    return (
        <>
        <Stack.Screen options={{ title:'' }} />
        <ThemedView darkColor='#111D4A'>
      
        <ThemedTextInput></ThemedTextInput>
            <Link replace href="/(tabs)">Go to tabs</Link>
        </ThemedView>
        </>
    );
}