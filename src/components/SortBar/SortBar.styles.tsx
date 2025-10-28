import { StyleSheet } from "react-native";

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
  },
  button: {
    backgroundColor: '#FFE4B5',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
  },
  buttonText: {
    color: '#E67E22',
    fontWeight: 'bold',
  },
  iconButton: {
    marginRight: 10,
  }
});