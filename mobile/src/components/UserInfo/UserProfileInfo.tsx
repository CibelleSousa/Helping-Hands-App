import { View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { User } from '../../interfaces/auth.interface';
import { UserProfile } from '../../data/mockedUser.type';
import RenderedText from "../RenderedComponents/RenderedText";


type UserProfileInfoProps = {
    profile: User
}

export default function UserProfileInfo({ profile }: UserProfileInfoProps){
    return(
        <View style = {styles.head}>
                <TouchableOpacity style = {styles.photoIcon}>
                    <Image source={{uri: profile.urlPhoto || 'https://via.placeholder.com/150'}} style = {styles.profilePic}/>
                    <FontAwesome name="pencil" style = {styles.editPhoto}/>
                </TouchableOpacity>
                <RenderedText style={styles.profileName}>{profile.name}</RenderedText>
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
        paddingTop: 50
    },

    photoIcon: {
        height: 100,
        width: 100,
        flexDirection: 'row',
        alignItems: 'baseline',
    },

    profilePic: {
        flex: 1,
        height: '100%', 
        width: '100%', 
        aspectRatio: 1/1, 
        borderRadius: 100,
        resizeMode: 'cover',
        borderColor: '#f58484ff'
    },

    editPhoto: {
        fontSize: 20,
        backgroundColor: '#2260FF',
        height: 30,
        aspectRatio: 1,
        alignContent: 'center',
        textAlign: 'center',
        borderRadius: 25,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },

    profileName: {
        fontFamily:'LeagueSpartan_600SemiBold',
        fontSize: 24,
        textAlign: 'center'
    },

})