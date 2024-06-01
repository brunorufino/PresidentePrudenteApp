import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const HistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>PRESIDENTE PRUDENTE</Text>
      <Image source={require('../img/history_image1.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Presidente Prudente é um município brasileiro no interior do estado de São Paulo...
      </Text>
      <Image source={require('../img/history_image2.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Fundada em 14 de setembro de 1917, a cidade tem uma rica história que inclui...
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Times New Roman'
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
});

export default HistoryScreen;