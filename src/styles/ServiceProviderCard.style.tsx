import { StyleSheet } from "react-native";

export const stylesProviderCard = StyleSheet.create({
    card: {
    flexDirection: 'row', // Organiza os itens (foto | informações) em linha
    alignItems: 'center', // Alinha a foto e o container de informações verticalmente no centro
    height: 130,
    width: 'auto',
    backgroundColor: '#fee38a', // A cor de fundo amarelada do card (aproximada do Figma)
    borderRadius: 25, // Um borderRadius alto para deixar as bordas bem arredondadas
    marginHorizontal: 16, // Espaçamento nas laterais
    marginVertical: 8, // Espaçamento em cima e embaixo de cada card
    padding: 16,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50, // Metade da largura/altura para um círculo perfeito
    marginRight: 16,
  },
  infoContainer: {
    flex: 1, // Faz este container ocupar todo o espaço restante na direita
  },
  textContainer: {
    marginBottom: 12, // Espaço entre o texto e os botões de ação
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2260ff',
  },
  profileService: {
    fontSize: 16,
    color: '#17140c',
  },
  actionsContainer: {
    flexDirection: 'row', // Coloca os botões e ícones em linha
    alignItems: 'center', // Alinha todos os itens de ação verticalmente
  },
  infoButton: {
    backgroundColor: '#2260ff', // Cor azul do botão (pode ser ajustada)
    borderRadius: 20, // Bordas totalmente arredondadas (estilo pílula)
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 14
  },
  infoButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  iconButton: {
    marginLeft: 10, // Espaçamento entre os ícones
  }
});