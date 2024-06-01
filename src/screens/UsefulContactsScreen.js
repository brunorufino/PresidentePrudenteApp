import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UsefulContactsScreen = () => {
  const usefulContacts = [
    { category: 'Emergência', contacts: [{ name: 'Polícia', phone: '190' }, { name: 'Bombeiros', phone: '193' }] },
    {
      category: 'Hospitais',
      contacts: [
        { name: 'Hospital Regional', phone: '(18) 3321-5011', address: 'Av. Coronel José Soares Marcondes, 415 - Jardim Bongiovani' },
        { name: 'Santa Casa de Misericórdia', phone: '(18) 2101-7000', address: 'Rua Coronel Albino, 1815 - Vila Iti' },
      ],
    },
    {
      category: 'Transporte Público',
      contacts: [
        { name: 'Transporte Coletivo Municipal', phone: '(18) 3903-5401', address: 'Av. Manoel Goulart, 2345 - Vila Santa Helena' },
        { name: 'Táxi', phone: '(18) 3917-1700', address: 'Rua Siqueira Campos, 277 - Centro' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contatos Úteis</Text>
      {usefulContacts.map((category, index) => (
        <View key={index}>
          <Text style={styles.category}>{category.category}</Text>
          {category.contacts.map((contact, index) => (
            <View key={index} style={styles.contact}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactPhone}>{contact.phone}</Text>
              <Text style={styles.contactAddress}>{contact.address}</Text>
            </View>
          ))}
        </View>
      ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: 'red',
  },
  contact: {
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  contactPhone: {
    fontSize: 16,
    color: '#666',
  },
  contactAddress: {
    fontSize: 16,
    color: '#666',
  },
});

export default UsefulContactsScreen;