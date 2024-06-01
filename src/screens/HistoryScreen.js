import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const HistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>PRESIDENTE PRUDENTE</Text>
      
      <Image source={require('../img/history_image2.jpg')} style={styles.image} />
      <Text style={styles.text}>
      Presidente Prudente, fundada em 1917, é uma cidade do interior de São Paulo com uma história marcada pela colonização europeia e pela influência de imigrantes japoneses, italianos e portugueses. Impulsionada pelo desenvolvimento ferroviário no século XX, cresceu como um centro econômico, agrícola e, posteriormente, educacional, comercial e de serviços na região oeste paulista.
      </Text>
      
      <Image source={require('../img/estrada_prudente.jpg')} style={styles.image} />
      <Text style={styles.text}>
      Um evento histórico significativo em Presidente Prudente foi a inauguração da Estrada de Ferro Sorocabana na região, no início do século XX. A chegada da ferrovia impulsionou o desenvolvimento econômico e social da cidade, conectando-a a outros centros urbanos e facilitando o transporte de mercadorias e pessoas. Esse evento marcou o início de uma nova fase de crescimento para Presidente Prudente, transformando-a em um importante centro ferroviário e agrícola na região oeste paulista.
      </Text>

      <Image source={require('../img/agripino_lima.png')} style={styles.image} />
      <Text style={styles.text}>
      Agripino de Oliveira Lima Filho foi um advogado, professor, empresário e político brasileiro. Nasceu em Lençóis Paulista em 31 de agosto de 1931 e faleceu em São Paulo em 7 de março de 2018. Ele foi prefeito de Presidente Prudente duas vezes, entre 1993 e 1996, e de 2001 a 2007. Fundador da Associação Prudentina de Educação e Cultura, que mantém a Universidade do Oeste Paulista. Na política, além de prefeito, foi vereador, deputado estadual e federal. Contribuiu significativamente para o desenvolvimento da educação e da infraestrutura na região. Faleceu em 2018, deixando um legado importante na história de Presidente Prudente.
      </Text>

      <Image source={require('../img/history_image1.jpg')} style={styles.image} />
      <Text style={styles.text}>
      Nos últimos anos, Presidente Prudente continuou seu desenvolvimento em infraestrutura, educação e economia. Investimentos em urbanização melhoraram a qualidade de vida, enquanto o setor educacional expandiu-se com novas instituições e cursos. Economicamente, a cidade atrai investimentos e fortalece seu papel como polo comercial e de serviços. A cidade mantém seu patrimônio cultural e histórico através de eventos e iniciativas locais.
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