import { View, Text, TextInput } from "react-native";

export function ThemedTextInput({}){
    return (
        <View>
            
                <Text>Full Name</Text>
               <TextInput className="border-solid border-4 rounded-md" placeholder="Full Name"/>
            
        </View>
    )
}