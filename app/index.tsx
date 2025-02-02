import { Image, StyleSheet, Platform, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function LoginScreen(){

    return (
        <>
        <Stack.Screen options={{ title: 'Welcome Page'}} />
        <ThemedView>
            <ThemedText>Login Screen</ThemedText>
            <Link replace href="/(tabs)">Go to tabs</Link>
        </ThemedView>
        </>
    );
}