import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import RenderedText from "../RenderedComponents/RenderedText";
import Inputstyles from "./Input.style";
import { FontAwesome5 } from "@expo/vector-icons";

type InputProps ={
    inputTitle: string,
    placeholder: string,
    id?: string,
    value: string,
    onChangeText: (text: string) => void
}

export default function Input ({ inputTitle, id, placeholder, value, onChangeText } : InputProps){
    if (id === 'password'){
        //const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
                setShowPassword(!showPassword)
        }

        return(
            <View style={Inputstyles.input}>
                <RenderedText style={Inputstyles.aboveInput}>{inputTitle}</RenderedText>
                <View style={Inputstyles.insidePassowrdInput}>
                    <TextInput 
                        secureTextEntry={!showPassword} 
                        placeholder={placeholder} 
                        placeholderTextColor='#EF762F' 
                        style={[Inputstyles.textInput, {flex: 1}]} 
                        value={value} 
                        onChangeText={onChangeText}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={{position: 'absolute', left: 266}}>
                        <FontAwesome5 name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#453C3C" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return(
            <View style={Inputstyles.input}>
                <RenderedText style={Inputstyles.aboveInput}>{inputTitle}</RenderedText>
                <TextInput 
                    placeholder={placeholder} 
                    placeholderTextColor='#EF762F' 
                    style={Inputstyles.textInput}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        );
}