import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import WeightInput from './src/components/WeightInput';
import HeightInput from './src/components/HeightInput';
import CalculateButton from './src/components/CalculateButton';

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState(null);
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("")



  const calculateIMC = () => {

  const weightNum = parseFloat(weight);
  const heightNum = parseFloat(height);


  if (isNaN(weightNum) || isNaN(heightNum)) { 
    setMsg("Ingresa valores válidos para peso y altura"); //Mensaje de error si no son numeros
    //Para que en caso de un error no se muestre la imagen y el imc del calculo anterior
    setImage(null);
    setIMC(null);
    return;
  }
     const heightToM = height / 100; //Pasar altura a metros
     const imcFinal = weight / (heightToM * heightToM);
    setIMC(imcFinal.toFixed(2));
     if (imcFinal < 18.5) {
      setImage(require("./assets/lowWeight.png"));
      setMsg("Tienes bajo peso :(");
    } else if (imcFinal >= 18.5 && imcFinal < 25) {
      setImage(require("./assets/normalWeight.png"));
      setMsg("Tienes peso saludable :D");
    } else if (imcFinal >= 25 && imcFinal < 30) {
      setImage(require("./assets/anormalWeight.png"));
      setMsg("Tienes sobrepeso :/");
    } else {
      setImage(require("./assets/muchWeight.png"));
      setMsg("Tienes obesidad :(");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <WeightInput value={weight} onChangeText={setWeight} />
      <HeightInput value={height} onChangeText={setHeight} />
         <CalculateButton onPress={calculateIMC} />
         <Text style={styles.result}>{msg}</Text> 
      {imc !== null && (
        <View>
          <Text style={styles.result}>Tu IMC es: {imc}</Text>
          {image !== null && ( 
            <Image style={styles.image} source={image} />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#42E7C7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
    image: {
    width: 150,
    height: 300,
    alignSelf: "center",
    marginTop: 20,
  },
});




