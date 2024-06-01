import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const touristSpots = [
  {
    name: 'Parque do Povo',
    description: 'Um parque bonito no centro da cidade...',
    image: require('../img/tourist_spot1.jpg'),
  },
  {
    name: 'Museu e Arquivo Histórico',
    description: 'O museu contém artefatos históricos...',
    image: require('../img/tourist_spot2.jpg'),
  },
];

const TouristSpotsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Conheça melhor Presidente Prudente</Text>
      {touristSpots.map((spot, index) => (
        <View key={index} style={styles.spotContainer}>
          <Image source={spot.image} style={styles.image} />
          <Text style={styles.spotTitle}>{spot.name}</Text>
          <Text style={styles.spotDescription}>{spot.description}</Text>
        </View>
      ))}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  spotContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  spotTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  spotDescription: {
    fontSize: 16,
    color: '#555',
  },
});

export default TouristSpotsScreen;