import React from "react";
import { TouchableOpacity, View } from "react-native"
import RenderedText from "../RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";
import { stylesSeeMore } from "./SeeMoreButton.style";

export default function SeeMoreButton(){
    return(
        <TouchableOpacity style={stylesSeeMore.container}>
            <RenderedText style={stylesSeeMore.text}>Veja Mais</RenderedText>
            <View style={stylesSeeMore.chevronContainer}>
                <FontAwesome name="chevron-right" size={20} color="#A04D1C" />
            </View>
        </TouchableOpacity>
    );
}