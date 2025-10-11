import { StyleSheet } from "react-native";
import {LeagueSpartan_100Thin} from '@expo-google-fonts/league-spartan';
import { useFonts } from "expo-font";

export const stylesSearchBar = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    fontFamily: 'LeagueSpartan_100Thin',
  },
});
