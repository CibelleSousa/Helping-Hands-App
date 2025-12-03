import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import RenderedText from "../RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";
import { HeaderHomestyles } from "./HeaderHome.style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";  


export default function HeaderHome(){
    const user = useSelector((state: RootState) => state.auth.user);
    if (!user) return null;
    return(
        <View style={HeaderHomestyles.container}>
            <Image source={{uri: user.urlPhoto || 'https://via.placeholder.com/150'}} style={HeaderHomestyles.profilePicture} />
            <View style={HeaderHomestyles.textContainer}>
                <RenderedText style={HeaderHomestyles.welcomeText}>Bem-Vindo,</RenderedText>
                <RenderedText style={HeaderHomestyles.profileText}>{user.name}</RenderedText>
            </View>
            <TouchableOpacity style={HeaderHomestyles.bellContainer}>
                <FontAwesome name="bell-o" color='#000' size={17} />
            </TouchableOpacity>
        </View>
    );
}