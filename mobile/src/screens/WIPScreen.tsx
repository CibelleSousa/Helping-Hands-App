import { View } from "react-native";
import placeholder from "../components/PlaceHolder";
import RenderedText from "../components/RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";

export default function WIPScreen(){
    return(
        <View style={{alignItems:'center', justifyContent:'center', alignSelf: 'center', paddingTop: 50, paddingLeft: 20}}>
            <FontAwesome name="warning" size={300} color="black" />
            <RenderedText style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center',fontSize:50}}>
                Esta Página está em manutenção!
            </RenderedText>
        </View>
    );
}