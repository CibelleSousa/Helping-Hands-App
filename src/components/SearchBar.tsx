import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { stylesSearchBar } from '../styles/SearchBar.style';

// Definimos as props que o componente espera receber do HomeScreen
type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (text: string) => void;
};

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps){
    return(
        <View style={stylesSearchBar.searchContainer}>
            <View style={stylesSearchBar.inputWrapper}>
                <FontAwesome 
                    name="search" 
                    size={18}            
                    color="#ef762f" 
                    style={stylesSearchBar.searchIcon} />
                <TextInput
                    style={stylesSearchBar.input}
                    placeholder="Busque por nome ou serviço..."
                    placeholderTextColor="#999"
                    value={searchTerm}
                    onChangeText={onSearchChange} />
            </View>
        </View>
    );
}