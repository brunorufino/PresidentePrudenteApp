import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const GeneralInfoScreen = () => {
  const generalInfo = [
    { label: 'População', value: '225,668' },
    { label: 'Área', value: '562.8 km²' },
    { label: 'Altitude', value: '475 m' },
    { label: 'Clima', value: 'Tropical com estação seca' },
    { label: 'Economia', value: 'Agronegócio, comércio...' },
    { label: 'PIB', value: 'R$ 9,2 bilhões' },
    { label: 'IDH (Índice de Desenvolvimento Humano)', value: '0,806' },
    { label: 'Escolarização', value: '97,8%'},
    { label: 'Prefeito Atual', value: 'Ed Thomas' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>PRESIDENTE PRUDENTE (IBGE 2022)</Text>
      <View style={styles.table}>
        {generalInfo.map((info, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableLabel}>{info.label}</Text>
            <Text style={styles.tableValue}>{info.value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
 
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tableLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  tableValue: {
    fontSize: 18,
    fontWeight: '300',
    color: '#777',
  },
});

export default GeneralInfoScreen;