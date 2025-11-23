import { StyleSheet } from "react-native";

const stylesInfoCard = StyleSheet.create({
  topSection: {
    backgroundColor: '#FEE38A',
    padding: 20,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10, // Espaço antes da próxima seção
    width: 300,
    alignSelf: 'center',
    elevation: 5
  },
  header: {
    flexDirection: 'row', // Foto ao lado da caixa Focus
    marginBottom: 10,
    alignItems: 'center'
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginRight: 8,
    elevation: 2
  },
  focusBox: {
    flex: 1, // Ocupa o espaço restante
    backgroundColor: '#2260FF',
    borderRadius: 15,
    padding: 10,
    width: 100,
    maxHeight: 'auto'
  },
  focusText: {
    color: 'white',
    fontFamily: 'LeagueSpartan_300Light',
    fontSize: 14,
    textAlign: 'justify'
  },
  profileBox:{
    flex: 1,
    backgroundColor: '#FFF',
    width: 260,
    height: 40,
    paddingHorizontal: 65,
    borderRadius: 13,
    marginBottom: 12,
    justifyContent: 'center',
    paddingTop: 5
    
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2260FF',
    textAlign: 'center', // Centralizado abaixo da foto/focus
    lineHeight: 12
  },
  profileService: {
    fontSize: 14,
    fontFamily: 'LeagueSpartan_600SemiBold',
    color: '#252525ff',
    textAlign: 'center',
  },
  infoBox: {
    flexDirection: 'row', // Itens lado a lado
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 10,
    height: 25,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: '#FFF',
    gap: 5
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'LeagueSpartan_300Light',
    color: '#2260FF',
  },
  actionBox:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 3
  },
  scheduleButton:{
    flexDirection: 'row',
    backgroundColor: '#2260FF',
    width: 80,
    height: 25,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  scheduleText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'LeagueSpartan_600SemiBold',
  },
  favoriteButton:{
    width: 25,
    height: 25,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2260FF'
  }
});

export default stylesInfoCard;