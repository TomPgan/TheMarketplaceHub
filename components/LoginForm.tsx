import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextInputField from "./ThemedTextInput";
import { View, Text, TextInput, Button } from 'react-native';



// interface LogInFormProps {
//     onSubmit: ( userName: string, password: string) => void;
// }

// const LogInForm: React.FC<LogInFormProps> = ({onSubmit}) => {
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         onSubmit(userName, password);
//         console.log(onSubmit)
//     }

//     return (
//         <View>
//             <View>
//                <Text>Email/User name:</Text>
//                <TextInput
//                     id='userName'
//                     placeholder='Enter User name or Email'
//                     value={userName}
//                     onChangeText={setUserName} 
//                />
//             </View>
//             <View>
//                <Text>Password:</Text>
//                <TextInput
//                     id='password'
//                     placeholder='Enter password'
//                     value={password}
//                     onChangeText={setPassword} 
//                />
//             </View>
//             <Button 
//                 title='Login'
//                 onPress={() => onSubmit}
//             />
            
//         </View>
//     )
// }
const LogInForm = () => {
  return(
    <>
        <Text>LOINGFORM Component</Text>
    </>
  )
}

export default LogInForm