import { StyleSheet } from "react-native";
import { LeagueSpartan_500Medium, LeagueSpartan_300Light} from "@expo-google-fonts/league-spartan";

export const stylesSortBar = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  sortByText: {
    fontSize: 14,
    color: '#888',
    marginRight: 10,
    fontFamily: 'LeagueSpartan_300Light'
  },
  orderButton: {
    backgroundColor: '#FEE38A',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
  },
  orderButtonActive:{
    backgroundColor: '#A04D1C'
  },
  orderButtonText:{
    color: '#A04D1C',
    fontSize: 12,
    fontFamily: 'LeagueSpartan_500Medium'
  },
  orderButtonTextActive:{
    color: '#FFF'
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
});