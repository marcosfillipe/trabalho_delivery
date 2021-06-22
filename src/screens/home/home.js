import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {

  const initialOrder = () => {
    navigation.replace('categories')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudoTop}>
        <Text style={styles.textoTop}>D</Text>
      </View>
      <View style={styles.conteudoButton}>
        <View style={styles.containerButton}>
          <View style={styles.imagemButton}>
            <AntDesign name="shoppingcart" size={50} color="black" style={styles.contentImagem} />
          </View>
          <Text style={styles.textoUm}>Faça suas compras agora mesmo!</Text>
          <Text style={styles.textoDois}>Selecione os itens que deseja e logo apos a confirmação do pedido, tudo será entregue na posta de sua casa.</Text>
          <View style={styles.viewOrder}>
            {/* <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
            /> */}
            <TouchableOpacity style={styles.conteudoButao} onPress={initialOrder}>
              <Text style={styles.buttonOrder}>Comprar Agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A259FF',
    justifyContent: 'center',
  },
  textoTop: {
    fontSize: 20,
    color: '#8C33FF',
    marginLeft: 22,
    marginTop: 15,
    width: 23,
    height: 25

  },
  conteudoTop: {
    backgroundColor: '#CDFFB6',
    borderRadius: 100,
    marginLeft: 25,
    marginTop: 100,
    width: 60,
    height: 60,
  },
  conteudoButton: {
    marginTop: 200,
    backgroundColor: '#F6F5F5',
    width: 400,
    height: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    width: 100,
    height: 100,
    marginTop: 30,

  },
  contentImagem: {
    marginTop: 20,
    marginLeft: 20,
  },
  textoUm: {
    fontSize: 20,
    marginTop: 30,
  },
  textoDois: {
    fontSize: 15,
    marginTop: 30,
    width: 300,
  },
  viewOrder: {
    marginTop: 50,
  },
  buttonOrder: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 22,
    marginTop: 8,
  },
  conteudoButao: {
    backgroundColor: '#0BCE83',
    borderRadius: 5,
    width: 300,
    height: 50,
  }


})

export default Home