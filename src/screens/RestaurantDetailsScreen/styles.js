import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 22,
    letterSpacing: 0.7,
  },
});
