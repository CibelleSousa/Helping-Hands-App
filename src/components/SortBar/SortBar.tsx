import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { stylesSortBar } from './SortBar.styles';
import RenderedText from '../RenderedComponents/RenderedText';

export default function SortBar() {
  return (
    <View style={stylesSortBar.container}>
      <RenderedText style={stylesSortBar.sortByText}>Sort By</RenderedText>
      <TouchableOpacity style={stylesSortBar.button}>
        <RenderedText>A-Z</RenderedText>
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