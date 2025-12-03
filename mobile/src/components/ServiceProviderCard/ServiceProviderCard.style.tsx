import { StyleSheet } from "react-native";
import { LeagueSpartan_500Medium, LeagueSpartan_300Light} from "@expo-google-fonts/league-spartan";

export const stylesProviderCard = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FEE38A',
    paddingHorizontal: 13,
    paddingVertical: 10.5,
    width: 300,
    height: 131,
    borderRadius: 17,
    alignSelf: 'center',
    marginVertical: 7
  },
  insideCard:{
    flexDirection: 'row',
    width: 274,
    height: 110,
    gap: 14
  },
  leftSide:{
    flexDirection: 'row',
    width: 240,
    height: 110,
    gap: 8
  },
  photo:{
    width: 110,
    height: 110,
    borderRadius: 100
  },
  info:{
    width: 117,
    height: 64,
    marginVertical: 23,
    justifyContent: "flex-end",
  },
  namePlate:{
    width: 240,
    height: 31,
    paddingBottom: 11
  },
  infoPlate:{
    flexDirection: "row",
    width: 100,
    height: 22,
    alignSelf: "flex-start",
  },
  rightSide:{
    height: 110,
    alignContent: "flex-end",
  },
  favButton:{
    width: 26,
    height: 26,
    backgroundColor: '#FFF',
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  profileName:{
    fontSize: 18,
    color: '#2260ff',
    fontFamily: 'LeagueSpartan_500Medium',
    lineHeight: 18
  },
  profileService:{
    fontSize: 14,
    color: '#070707ff',
    fontFamily: 'LeagueSpartan_300Light',
    lineHeight: 14
  },
  infoButton:{
    flexDirection: "row",
    width: 46,
    height: 22,
    marginTop: 6,
    gap: 3,
    alignItems: 'center'
  },
  label:{
    color: '#2260ff',
    fontSize: 15,
    fontFamily: "LeagueSpartan_400Regular"
  }
});