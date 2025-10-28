import { View } from "react-native";
import RenderedText from "./RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";

export default function placeholder(){
    return(
        <View>
            <FontAwesome name="warning" size={70} color="black" />
            <RenderedText>Esta página ainda não está pronta! Volte mais tarde</RenderedText>
        </View>
    )
}