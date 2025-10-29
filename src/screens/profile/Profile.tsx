import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {

    return (
        <View style= {{paddingTop: 10}}>
            <View style = {styles.head}>
                <TouchableOpacity style = {styles.photoIcon}>
                    <Image style = {styles.profilePic}/>
                    <FontAwesome name="pencil" style = {styles.editPhoto}/>
                </TouchableOpacity>
                <RenderedText style={styles.profileName}>Name</RenderedText>
            </View>

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

                <TouchableOpacity style = {styles.menuOption} id="Logout">
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
    head: {
        alignSelf: 'center',
        alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingBottom: 10
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
        resizeMode: 'cover'
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
        color: '#A04D1C',
    },

    menuText: {
        fontFamily: 'LeagueSpartan_400Regular', 
        fontSize: 20
    }    
})