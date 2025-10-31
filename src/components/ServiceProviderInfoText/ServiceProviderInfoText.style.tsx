import { StyleSheet } from "react-native";

const stylesInfoText = StyleSheet.create({
  bottomSection: {
    width: 300,
    alignSelf: 'center',
    paddingBottom: 150
  },
  sectionTitle: {
    fontSize: 28,
    fontFamily: 'LeagueSpartan_700Bold',
    color: '#A04D1C',
    marginTop: 20, // Espaço acima de cada título
    marginBottom: 10, // Espaço abaixo de cada título
  },
  sectionText: {
    fontSize: 20,
    fontFamily: 'LeagueSpartan_400Regular',
    color: '#000',
    lineHeight: 20, // Melhora a legibilidade do parágrafo
  },
  highlightItem: {
    flexDirection: 'row', // Coloca a bolinha ao lado do texto
    alignItems: 'flex-start', // Alinha no topo caso o texto tenha mais de uma linha
    marginBottom: 2, // Espaço entre os itens da lista
  },
  highlightBullet: {
    fontSize: 20,
    color: '#000',
    marginRight: 8,
    lineHeight: 20, // Alinha verticalmente com o texto
  },
  highlightText: {
    flex: 1, // Faz o texto ocupar o espaço restante, quebrando a linha se necessário
    fontSize: 20,
    fontFamily: 'LeagueSpartan_400Regular',
    color: '#000',
    lineHeight: 20,
  },
});

export default stylesInfoText;