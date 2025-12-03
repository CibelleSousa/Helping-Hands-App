import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";
import UserProfileInfo from "../../components/UserInfo/UserProfileInfo";
import { useDispatch } from 'react-redux';
import { logout } from "../../store/slices/auth";

export default function Profile() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <View>
            <UserProfileInfo />
            <View style = {styles.menu}>
                <TouchableOpacity style = {styles.menuOption} id="Profile">
                    <View style = {styles.rightSide}>
                        <FontAwesome name = 'user' style = {styles.icon}/>
                        <RenderedText style = {styles.menuText}>
                            Perfil
                        </RenderedText>
                    </View>
                    <FontAwesome name='chevron-right' style = {styles.button}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.menuOption} id="Favorite">
                    <View style = {styles.rightSide}>
                        <FontAwesome name='bookmark' style = {styles.icon}/>
                        <RenderedText style = {styles.menuText}>
                            Favoritos
                        </RenderedText>
                    </View>
                    <FontAwesome name='chevron-right' style = {styles.button}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.menuOption} id="Payment">
                    <View style = {styles.rightSide}>
                        <FontAwesome name='credit-card' style = {styles.icon}/>
                        <RenderedText style = {styles.menuText}>
                            Pagamentos
                        </RenderedText>
                    </View>
                    <FontAwesome name='chevron-right' style = {styles.button}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.menuOption} id="PrivacyPolicy">
                    <View style = {styles.rightSide}>
                        <FontAwesome name='lock' style = {styles.icon}/>
                        <RenderedText style = {styles.menuText}>
                            Política de Privacidade
                        </RenderedText>
                    </View>
                    <FontAwesome name='chevron-right' style = {styles.button}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.menuOption} id="Settings">
                    <View style = {styles.rightSide}>
                        <FontAwesome name='cog' style = {styles.icon}/>
                        <RenderedText style = {styles.menuText}>
                            Configurações
                        </RenderedText>
                    </View>
                    <FontAwesome name='chevron-right' style = {styles.button}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.menuOption} id="Help">
                    <View style = {styles.rightSide}>
                        <FontAwesome name='question' style = {styles.icon}/>
                        <RenderedText style = {styles.menuText}>
                            Ajuda
                        </RenderedText>
                    </View>
                    <FontAwesome name='chevron-right' style = {styles.button}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.menuOption} id="Logout" onPress={handleLogout}>
                    <View style = {styles.rightSide}>
                        <FontAwesome name='sign-out' style = {styles.icon}/>
                        <RenderedText style = {styles.menuText}>
                            Sair
                        </RenderedText>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    

    menu: {},

    menuOption: {
        flexDirection: 'row',
        paddingBottom: 10,
        justifyContent: 'space-between',
        paddingRight: 20
    },

    rightSide: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: 'center',
        
        flexDirection: 'row',
        columnGap: 10,
        paddingLeft: 10
    },

    button: {   
        fontSize: 20,
        color: '#2a3148ff'
    },

    icon: { 
        fontSize: 20, 
        backgroundColor: '#FEE38A', 
        height: 30, 
        width: 30,
        borderRadius: 30,
        textAlign: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: '#A04D1C',
    },

    menuText: {
        fontFamily: 'LeagueSpartan_400Regular', 
        fontSize: 20
    }    
})