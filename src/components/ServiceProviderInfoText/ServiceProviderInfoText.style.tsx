import { StyleSheet } from "react-native";

const stylesInfoText = StyleSheet.create({
  bottomSection: {
    width: 300,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A04D1C',
    marginTop: 20, // Espaço acima de cada título
    marginBottom: 10, // Espaço abaixo de cada título
  },
  sectionText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20, // Melhora a legibilidade do parágrafo
  },
  highlightItem: {
    flexDirection: 'row', // Coloca a bolinha ao lado do texto
    alignItems: 'flex-start', // Alinha no topo caso o texto tenha mais de uma linha
    marginBottom: 2, // Espaço entre os itens da lista
  },
  highlightBullet: {
    fontSize: 14,
    color: '#000',
    marginRight: 8,
    lineHeight: 20, // Alinha verticalmente com o texto
  },
  highlightText: {
    flex: 1, // Faz o texto ocupar o espaço restante, quebrando a linha se necessário
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
});

export default stylesInfoText;