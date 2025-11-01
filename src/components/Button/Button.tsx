import React from "react";
import { TouchableOpacity } from "react-native";
import RenderedText from "../RenderedComponents/RenderedText";
import ButtonStyle from "./Button.style";

type ButtonProps ={
    color: string,
    backgroundColor: string,
    text: string
};

export default function Button ({ color, backgroundColor, text } : ButtonProps) {
    const styles = ButtonStyle(color, backgroundColor);
    return(
        <TouchableOpacity style={styles.button}>
            <RenderedText style={styles.buttonText}>{text}</RenderedText>
        </TouchableOpacity>
    );
}