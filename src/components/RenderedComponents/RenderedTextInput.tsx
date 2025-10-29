import {TextInput, useColorScheme} from 'react-native';
import {colors} from '../../constants/colors';
import {    LeagueSpartan_100Thin,
            LeagueSpartan_200ExtraLight,
            LeagueSpartan_300Light,
            LeagueSpartan_400Regular,
            LeagueSpartan_500Medium, 
            LeagueSpartan_600SemiBold,
            LeagueSpartan_700Bold,
            LeagueSpartan_800ExtraBold,
            LeagueSpartan_900Black,
            useFonts } from "@expo-google-fonts/league-spartan";


export type Props = {
    style?: object,
    fontFamily?: string,
    children: React.ReactNode
}

const RenderedTextInput = ({style, fontFamily = 'LeagueSpartan_500Medium', children}:Props) => {
    const styles = style?? {}
    const colorScheme = useColorScheme()?? 'dark'
    const theme = colors[colorScheme] ?? colors.light
    const textColor = theme.text
    let [LoadFonts] = useFonts({LeagueSpartan_100Thin,
            LeagueSpartan_200ExtraLight,
            LeagueSpartan_300Light,
            LeagueSpartan_400Regular,
            LeagueSpartan_500Medium, 
            LeagueSpartan_600SemiBold,
            LeagueSpartan_700Bold,
            LeagueSpartan_800ExtraBold,
            LeagueSpartan_900Black,})
    return (
        <TextInput
            style={[{color: textColor, fontFamily: fontFamily}, styles]}>
                {children}
        </TextInput>
    )

}

export default RenderedTextInput