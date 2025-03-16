import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../AuthContext'
import ThemedTextInput from '@/components/ThemedTextInput';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (text: React.SetStateAction<string>) => {
        setEmail(text);
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const {signIn} = useAuth();
    const router = useRouter();

    const handleLogin = () => {
        if(email.trim() === '' || !validateEmail(email)){
            setError('Enter a valid Email');
            return;
        }
        signIn();
        router.replace('/(tabs)/explore')
    }
    

    return(
        <SafeAreaView>
        <View>
            <Text>This is the Login Screen</Text>
            <ThemedTextInput 
                label='Enter Email'
                value={email}
                placeholder='Enter Email'
                onChangeText={handleEmailChange}
            />
            {error&& <Text>{error}</Text>}
            <Button 
                title='Login'
                onPress={handleLogin}
            />
        </View>
        </SafeAreaView>
    );

};

export default LoginScreen;