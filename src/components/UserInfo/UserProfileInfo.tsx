import { View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { UserProfile } from '../../data/mockedUser.type';
import RenderedText from "../RenderedComponents/RenderedText";


type UserProfileInfoProps = {
    profile: UserProfile
}

export default function UserProfileInfo({ profile }: UserProfileInfoProps){
    return(
        <View style = {styles.head}>
                <TouchableOpacity style = {styles.photoIcon}>
                    <Image source={{uri: profile.urlFoto}} style = {styles.profilePic}/>
                    <FontAwesome name="pencil" style = {styles.editPhoto}/>
                </TouchableOpacity>
                <RenderedText style={styles.profileName}>{profile.nome}</RenderedText>
            </View>
    );
}

const styles = StyleSheet.create({
    head: {
        alignSelf: 'center',
        alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingBottom: 10,
        paddingTop: 10
    },

    photoIcon: {
        height: 100,
        width: 100,
        flexDirection: 'row',
        alignItems: 'baseline',
    },

    profilePic: {
        height: 100, 
        width: 100, 
        aspectRatio: 1/1, 
        backgroundColor: "#000", 
        borderRadius: 100,
        resizeMode: 'center',
        borderColor: '#f58484ff'
    },

    editPhoto: {
        fontSize: 20,
        backgroundColor: '#2260FF',
        height: 30,
        aspectRatio: 1/1,
        alignContent: 'center',
        textAlign: 'center',
        borderRadius: 25,
        right: 30,
        bottom: 15
    },

    profileName: {
        fontFamily:'LeagueSpartan_600SemiBold',
        fontSize: 24,
        textAlign: 'center'
    },

})