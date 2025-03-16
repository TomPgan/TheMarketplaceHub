import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../AuthContext'

const LoginScreen = () => {
    const {signIn} = useAuth();
    const router = useRouter();

    const handleLogin = () => {
        signIn();
        router.replace('/(tabs)/explore')
    }
    

    return(
        <SafeAreaView>
        <View>
            <Text>This is the Login Screen</Text>
            <Button 
                title='Login'
                onPress={handleLogin}
            />
        </View>
        </SafeAreaView>
    );

};

export default LoginScreen;