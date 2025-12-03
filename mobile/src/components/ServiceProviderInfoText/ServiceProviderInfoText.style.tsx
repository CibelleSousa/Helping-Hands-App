import { StyleSheet } from "react-native";

const stylesInfoText = StyleSheet.create({
  bottomSection: {
    width: 285,
    alignSelf: 'center',
    paddingBottom: 75,
    gap: 10,
    marginTop: 20
  },
  sectionContainer:{
    width: 285
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'LeagueSpartan_600SemiBold',
    color: '#A04D1C',
    marginBottom: 5
  },
  sectionText: {
    fontSize: 14,
    fontFamily: 'LeagueSpartan_300Light',
    color: '#000',
    lineHeight: 20,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    marginBottom: 2
  },
  highlightBullet: {
    fontSize: 14,
    color: '#000',
    marginRight: 8,
    lineHeight: 20
  },
  highlightText: {
    flex: 1
  },
});

export default stylesInfoText;