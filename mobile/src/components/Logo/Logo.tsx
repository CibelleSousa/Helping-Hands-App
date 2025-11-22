import React from "react";
import { View, Image } from "react-native";
import RenderedText from "../RenderedComponents/RenderedText";
import LogoStyle from "./Logo.style";

type RenderedLogoProps ={
    color: string
};

export default function Logo({ color }: RenderedLogoProps){
    const styles = LogoStyle(color)
    return(
        <View style={styles.logoContainer} >
            <Image source={color === 'white' ? require('../../../assets/Logo.png'): require('../../../assets/Logo-orange.png')} style={styles.logoPic} />
            <View style={styles.textContainer}>
                <RenderedText style={styles.titleText} fontFamily="LeagueSpartan_100Thin">Helping</RenderedText>
                <RenderedText style={styles.titleText} fontFamily="LeagueSpartan_100Thin">Hands</RenderedText>
            </View>
            <RenderedText style={styles.subtitleText} fontFamily="LeagueSpartan_600SemiBold">Serviço Comunitário</RenderedText>
        </View>    
    );
}

