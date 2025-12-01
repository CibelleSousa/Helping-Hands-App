import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import RenderedText from '../RenderedComponents/RenderedText';
import { FontAwesome } from '@expo/vector-icons';
import GenderSelectorstyles from './GenderSelector.style';

type GenderSelectorProps = {
    selectedGender: string; // 'F' ou 'M' ou ''
    onSelect: (gender: string) => void;
};

export default function GenderSelector({ selectedGender, onSelect }: GenderSelectorProps) {
    return (
        <View style={GenderSelectorstyles.container}>
            <RenderedText style={GenderSelectorstyles.label}>Gênero</RenderedText>
            <View style={GenderSelectorstyles.optionsContainer}>
                <TouchableOpacity style={GenderSelectorstyles.option} onPress={() => onSelect('F')}>
                    <FontAwesome 
                        name={selectedGender === 'F' ? "dot-circle-o" : "circle-o"} 
                        size={20} 
                        color="#EF762F" 
                    />
                    <RenderedText style={GenderSelectorstyles.optionText}>Feminino</RenderedText>
                </TouchableOpacity>

                <TouchableOpacity style={GenderSelectorstyles.option} onPress={() => onSelect('M')}>
                    <FontAwesome 
                        name={selectedGender === 'M' ? "dot-circle-o" : "circle-o"} 
                        size={20} 
                        color="#EF762F" 
                    />
                    <RenderedText style={GenderSelectorstyles.optionText}>Masculino</RenderedText>
                </TouchableOpacity>
            </View>
        </View>
    );
}