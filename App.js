import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const frasesMotivacionais = [
  "Acredite em você mesmo e tudo será possível.",
  "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
  "Não deixe para amanhã o que você pode fazer hoje.",
  "O que você acha que pode ou não fazer, você está certo.",
  "A única forma de fazer um excelente trabalho é amar aquilo que você faz.",
  "A vida é como andar de bicicleta. Para ter equilíbrio, você tem que se manter em movimento."
];


const App = () => {
  const [frase, setFrase] = useState('');
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false);
  const [exibirFrase, setExibirFrase] = useState(false);

 
  const gerarFraseAleatoria = () => {
    const randomIndex = Math.floor(Math.random() * frasesMotivacionais.length);
    setFrase(frasesMotivacionais[randomIndex]);
    setBiscoitoQuebrado(true); 
    setExibirFrase(true); 
    setTimeout(() => {
      setBiscoitoQuebrado(false); 
      setExibirFrase(false); 
    }, 15000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.biscoitoContainer}>
        <Image
          source={biscoitoQuebrado ? require('./assets/biscoito_quebrado.png') : require('./assets/biscoito.png')}
          style={styles.biscoitoImagem}
        />
      </View>
      {exibirFrase && <Text style={styles.frase}>{frase}</Text>}
      <TouchableOpacity style={styles.botao} onPress={gerarFraseAleatoria}>
        <Text style={styles.botaoTexto}>Quebrar Biscoito</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  biscoitoContainer: {
    marginBottom: 20,
  },
  biscoitoImagem: {
    width: 200,
    height: 200,
  },
  frase: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#fff', 
    borderColor: '#FFA500', 
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  botaoTexto: {
    color: '#FFA500', 
    fontSize: 16,
  },
});

export default App;