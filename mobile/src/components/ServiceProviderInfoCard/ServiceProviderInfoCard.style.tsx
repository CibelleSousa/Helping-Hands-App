import { StyleSheet } from "react-native";

const stylesInfoCard = StyleSheet.create({
  topSection: {
    backgroundColor: '#FEE38A',
    paddingHorizontal: 22,
    paddingVertical: 34,
    borderRadius: 30,
    marginVertical: 10,
    width: 301,
    height: 291,
    alignSelf: 'center',
    elevation: 5
  },
  topInfoCard: {
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: 199,
    height: 141,
    gap: 33
  },
  profilePicture: {
    width: 141,
    height: 141,
    borderRadius: 100,
    elevation: 2,
  },
  favoriteButton:{
    width: 26,
    height: 26,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    elevation: 2
  },
  bottomInfoCard:{
    width: 257,
    height: 110,
    gap: 10
  },
  namePlate:{
    width: 257,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'LeagueSpartan_500Medium',
    color: '#2260FF',
    lineHeight: 17
  },
  profileService: {
    fontSize: 16,
    fontFamily: 'LeagueSpartan_300Light',
    color: '#252525ff',
    lineHeight:14
  },
  generalInfo:{
    flexDirection: 'row',
    width: 257,
    height: 22,
    gap: 5
  },
  availbility:{
    flexDirection: 'row',
    width: 165,
    height: 22,
    borderRadius: 8,
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoButton:{
    flexDirection:'row',
    width: 40,
    height: 22,
    borderRadius: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'LeagueSpartan_400Regular',
    color: '#2260FF',
  }
  
});

export default stylesInfoCard;