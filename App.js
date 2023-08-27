import { Text, SafeAreaView, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import {useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import {Bangers_400Regular} from '@expo-google-fonts/bangers';
import {SourceSansPro_400Regular} from '@expo-google-fonts/source-sans-pro';
import {Lusitana_400Regular} from '@expo-google-fonts/lusitana';
import {Manrope_700Bold} from '@expo-google-fonts/manrope';
import {Ubuntu_400Regular} from '@expo-google-fonts/ubuntu';
import {Nunito_700Bold} from '@expo-google-fonts/nunito';
import {Lato_400Regular} from '@expo-google-fonts/lato';
import {Jost_400Regular_Italic} from '@expo-google-fonts/jost';
import {BalsamiqSans_700Bold} from '@expo-google-fonts/balsamiq-sans';
import {PlayfairDisplay_500Medium_Italic} from '@expo-google-fonts/playfair-display';
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Bangers_400Regular,
    SourceSansPro_400Regular,
    Lusitana_400Regular,
    Manrope_700Bold,
    Ubuntu_400Regular,
    Nunito_700Bold,
    Lato_400Regular,
    Jost_400Regular_Italic,
    BalsamiqSans_700Bold,
    PlayfairDisplay_500Medium_Italic
  })
  if (!fontsLoaded && !fontError)
  {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <ImageBackground source={require('./assets/image-background.jpg')} style={styles.imageBackground}>
      <Text style={styles.titulo}>
        Frases Motivacionais 
        {'\n'}
        dedicado aos alunos da Etec.
      </Text>
    
      <Text style={styles.titulo1}>
        “Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos”
        {'\n'}
        {'\n'}
         James Cameron, cineasta
      </Text>

      <Text style={styles.titulo2}>
        “Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali” 
        {'\n'}
        {'\n'}
        Vaibhav Shah, pensador
      </Text>

      <Text style={styles.titulo3}>
        “O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo” 
        {'\n'}
        {'\n'}
        Henry Ford, empreendedor.
      </Text>

      <Text style={styles.titulo4}>
        “Tenha em mente que o seu desejo em atingir o sucesso é mais importante que qualquer coisa”
        {'\n'}
        {'\n'}
        Abraham Lincoln, político
      </Text>
     

     <Text style={styles.titulo5}>
        “A lógica pode levar de um ponto A a um ponto B. A imaginação pode levar a qualquer lugar” 
        {'\n'}
        {'\n'}
       Einstein
      </Text>
     

     <Text style={styles.titulo6}>
        A primeira regra de qualquer tecnologia utilizada nos negócios é que a automação aplicada a uma operação eficiente aumentará a eficiência. A segunda é que a automação aplicada a uma operação ineficiente aumentará a ineficiência.
        {'\n'}
        {'\n'}
Bill Gates
      </Text>

     <Text style={styles.titulo7}>
        Tecnologia é qualquer coisa que não estava por aí quando você nasceu.
        {'\n'}
        {'\n'}
Alan Kay
      </Text>
     

     <Text style={styles.titulo8}>
        A informática está interligada ao mundo sobre as reações intergalaxias! 
        {'\n'}
        {'\n'}
        Bill Gates
      </Text>
     

     <Text style={styles.titulo9}>
        Nunca confie em um computador que você não pode jogar pela janela.
        {'\n'}
        {'\n'}
Steve Wozniak
      </Text>
     

     <Text style={styles.titulo10}>
        Estou fazendo um sistema operacional gratuito (apenas um hobby, não será grande e profissional como GNU) para 386/486 AT.
        {'\n'}
        {'\n'}
Linus Torvalds, se referindo ao Linux.
      </Text>
     
       </ImageBackground>

     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'space-around',
    backgroundColor: '#77AEA6',
    padding: 8,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
    marginTop: 24,
    padding: 10,
    borderRadius: 12,
    backgroundColor:'#808080',
    fontWeight:'bold',
    fontSize: 20,
    color:'#fff',
    textAlign: 'center',
    fontFamily: 'Inter_400Regular'
  },
  titulo1: {
    margin: 15,
    padding: 7,
    borderRadius: 12,
    backgroundColor:'#64F3AE',
    opacity: 0.9,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Bangers_400Regular'

  },
  titulo2: {
    margin: 15,
    padding: 6,
    borderRadius: 12,
    backgroundColor:'#D5F364',
    opacity: 0.9,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'SourceSansPro_400Regular'
  },
  titulo3: {
    margin: 15,
    padding: 10,
    borderRadius: 12,
    backgroundColor:'#1F89D6',
    color:'#fff',
    opacity: 0.9,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Lusitana_400Regular'
  },
   titulo4: {
    margin: 15,
    padding: 6,
    borderRadius: 12,
    backgroundColor:'#8E9CA5',
    color:'#D5E0E7',
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'center',
    fontFamily: 'Manrope_700Bold'
  },
   titulo5: {
    margin: 15,
    padding: 10,
    borderRadius: 12,
    backgroundColor:'#99C824',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Ubuntu_400Regular'
  },
   titulo6: {
    margin: 15,
    padding:5,
    borderRadius: 12,
    backgroundColor:'#fff',
    color:'#49A21D',
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold'
  },
   titulo7: {
    margin: 15,
    padding: 8,
    borderRadius: 12,
    backgroundColor:'#BB1111',
    color:'#CEAEAE',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Lato_400Regular'
  },
   titulo8: {
    margin: 15,
    padding: 8,
    borderRadius: 12,
    backgroundColor:'#fff',
    color:'#49A21D',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Jost_400Regular_Italic'
  },
   titulo9: {
    margin: 15,
    padding: 10,
    borderRadius: 12,
    backgroundColor:'#9C9C9C',
    color:'#fff',
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'center',
    fontFamily: 'BalsamiqSans_700Bold'
  },
   titulo10: {
    margin: 15,
    padding: 7,
    borderRadius: 18,
    backgroundColor:'#000000',
    color:'#fff',
    opacity: 0.9,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_500Medium_Italic'
  },
});
