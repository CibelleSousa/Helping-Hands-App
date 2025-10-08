import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { stylesSortBar } from '../styles/SortBar.styles';

export default function SortBar() {
  return (
    <View style={stylesSortBar.container}>
      <Text style={stylesSortBar.sortByText}>Sort By</Text>
      <TouchableOpacity style={stylesSortBar.button}>
        <Text style={stylesSortBar.buttonText}>A-Z</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesSortBar.iconButton}>
        <FontAwesome name="star-o" size={20} color="#E67E22" />
      </TouchableOpacity>
      <TouchableOpacity style={stylesSortBar.iconButton}>
        <FontAwesome name="heart-o" size={20} color="#E67E22" />
      </TouchableOpacity>
    </View>
  );
}