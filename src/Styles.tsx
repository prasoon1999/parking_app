import { StyleSheet } from 'react-native';

export const screen = StyleSheet.create({
  style: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
  },
});

export const button = StyleSheet.create({
  default: {
    height: 40,
    zIndex: 2,
    marginTop: 32,
    borderRadius: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0e5cef',
  },
  fab: {
    position: 'absolute',
    height: 56,
    borderRadius: 16,
    alignSelf: 'flex-end',
    bottom: 16,
    right: 16,
    elevation: 3,
  },
  enabled: {
    backgroundColor: '#0e5cef',
  },
  disabled: {
    backgroundColor: '#d4e2fc',
  },
  text: {
    textAlignVertical: 'center',
    fontWeight: '500',
    color: '#fff',
    fontSize: 16,
  },
});

export const thumbnail = StyleSheet.create({
  style: {
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 60,
  },
});

export const text = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 36,
  },
  heading: {
    color: '#000',
    fontSize: 24,
  },
  normal: {
    color: '#000',
    fontSize: 16,
    marginBottom: 8,
  },
});

export const form = StyleSheet.create({
  style: {
    height: 56,
    padding: 12,
    borderRadius: 4,
    color: '#000',
    fontSize: 16,
    borderWidth: 1,
  },
});

export const modal = StyleSheet.create({
  style: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    marginHorizontal: -16,
  },
});

export const card = StyleSheet.create({
  style: {
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
});
