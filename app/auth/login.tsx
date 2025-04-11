import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../AuthContext'
import ThemedTextInput from '@/components/ThemedTextInput';
import GoogleLoginButton from '@/components/googleLoginButton';
const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formErrorMessage, setFormErrorMessage] = useState('');

    const handleEmailChange = (text: React.SetStateAction<string>) => {
        setEmail(text);
    }

    const handlePasswordChange = (text: React.SetStateAction<string>) => {
        setPassword(text);
    }
// Validate email is formated correctly
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    const {signIn} = useAuth();
    const router = useRouter();

// Login button logic
    const handleLogin = () => {
        if(email.trim() === '' && password.trim() === ''){
            setFormErrorMessage('Form can not be empty ');
            return;
        }
        else if(email.trim() === '' || !validateEmail(email) ){
            setError('Enter a valid Email');
            return;
        }
        else if(password.trim() === ''){
            setPasswordError('Enter a valid password');
            return;
        }
        signIn();
        router.replace('/(tabs)/explore')
    }
    

    return(
        <SafeAreaView className='bg-Light-red min-h-screen flex justify-center'>
        <View className='flex justify-center pb-1'>
            <Image className="mx-auto"alt='Logo' source={require('../../assets/images/TheMarketplaceHubLogo-sample.png')}/>
        </View>
        <View className='flex'>
           
            <ThemedTextInput 
                label='Enter Email'
                placeholder='Enter Email'
                onChangeText={handleEmailChange}
            />
             {error&& <Text>{error}</Text>}
            <ThemedTextInput 
                label='Enter password'
                placeholder='Enter Password'
                onChangeText={handlePasswordChange}
            />
           {passwordError && <Text>{passwordError}</Text>}
           {formErrorMessage && <Text>{formErrorMessage}</Text>}
           <View className='mt-5 mr-6 ml-6'>
                <View className='bg-Licorice rounded-full'>
                    <Button
                        title='Login'
                        onPress={handleLogin}
                        color='#ffffff'
                    />
                </View>
                <GoogleLoginButton />
            </View>
        </View>
        </SafeAreaView>
    );

};

export default LoginScreen;