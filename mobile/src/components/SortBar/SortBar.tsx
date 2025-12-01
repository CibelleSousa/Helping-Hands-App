import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { stylesSortBar } from './SortBar.styles';
import RenderedText from '../RenderedComponents/RenderedText';

type SortBarProps = {
  sortByAZ: boolean;
  onToggleSort: () => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
}

export default function SortBar({ sortByAZ, onToggleSort, showFavoritesOnly, onToggleFavorites } : SortBarProps) {
  return (
    <View style={stylesSortBar.container}>
      <RenderedText style={stylesSortBar.sortByText}>Sort By</RenderedText>
      <TouchableOpacity style={[stylesSortBar.orderButton, sortByAZ && stylesSortBar.orderButtonActive]} onPress={onToggleSort}>
        <RenderedText style={[stylesSortBar.orderButtonText, sortByAZ && stylesSortBar.orderButtonTextActive]}>A-Z</RenderedText>
      </TouchableOpacity>
      <TouchableOpacity style={stylesSortBar.iconButton} onPress={onToggleFavorites}>
        <FontAwesome name={showFavoritesOnly ? "heart" : "heart-o"} size={20} color="#A04D1C" />
      </TouchableOpacity>
    </View>
  );  
}