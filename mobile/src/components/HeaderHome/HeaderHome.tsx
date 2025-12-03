import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import RenderedText from "../RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";
import { User } from "../../interfaces/auth.interface";
import { HeaderHomestyles } from "./HeaderHome.style";

type HeaderHomeProps = {
    profile: User
}

export default function HeaderHome({ profile } : HeaderHomeProps){
    return(
        <View style={HeaderHomestyles.container}>
            <Image source={{uri: profile.urlPhoto || 'https://via.placeholder.com/150'}} style={HeaderHomestyles.profilePicture} />
            <View style={HeaderHomestyles.textContainer}>
                <RenderedText style={HeaderHomestyles.welcomeText}>Bem-Vindo,</RenderedText>
                <RenderedText style={HeaderHomestyles.profileText}>{profile.name}</RenderedText>
            </View>
            <TouchableOpacity style={HeaderHomestyles.bellContainer}>
                <FontAwesome name="bell-o" color='#000' size={17} />
            </TouchableOpacity>
        </View>
    );
}