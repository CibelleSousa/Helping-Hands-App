import { View } from "react-native";
import RenderedText from "../components/RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";

export default function WIPScreen(){
    return(
        <View style={{alignItems:'center', justifyContent:'center', alignSelf: 'center', paddingTop: 50, padding: 20}}>
            <FontAwesome name="warning" size={300} color="#A04D1C" style ={{alignSelf: 'center'}}/>
            <RenderedText style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center',fontSize:40, textAlign: 'center'}}>
                Esta Página está em manutenção!
            </RenderedText>
        </View>
    );
}