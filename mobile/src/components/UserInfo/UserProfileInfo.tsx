import { View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import RenderedText from "../RenderedComponents/RenderedText";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function UserProfileInfo(){
    const user = useSelector((state: RootState) => state.auth.user)

    if (!user) return null;

    return(
        <View style = {styles.head}>
            <TouchableOpacity style = {styles.photoIcon}>
                <Image source={{uri: user.urlPhoto || 'https://via.placeholder.com/150'}} style = {styles.profilePic}/>
            </TouchableOpacity>
            <RenderedText style={styles.profileName}>{user.name}</RenderedText>
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
    profileName: {
        fontFamily:'LeagueSpartan_600SemiBold',
        fontSize: 24,
        textAlign: 'center'
    },

})