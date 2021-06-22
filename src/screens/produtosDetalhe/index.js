import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, Image, FlatList, ImageBackground } from 'react-native'
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons';


const img = require('../../assets/backAlface.png')

const ProdutosDetalhe = ({ navigation }) => {


  const categoriaPage = () => {
    navigation.replace('produtos')
  }
  const checkout = () => {
    navigation.replace('checkout')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={img} style={styles.backImage}>

        <View style={styles.conteudoCabecalho}>
          <TouchableOpacity style={styles.botaoVoltar} >
            <AntDesign name="back" size={24} color="black" onPress={categoriaPage} />
          </TouchableOpacity>
        </View>

      </ImageBackground>

      <View style={styles.containerDetalhes}>
        <View style={styles.conteudoText}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Alface</Text>
          <Text style={{ fontSize: 25, marginTop: 10 }}>Preço: 1.85 R$</Text>
          <Text style={{ fontSize: 20 }}>150g / 1.85 R$</Text>
          <Text style={{ fontSize: 25, marginTop: 25 }}>Detalhes</Text>
          <Text style={{ fontSize: 15, marginTop: 15 }}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
        </View>
        <View style={styles.containerBotao}>
          <View style={styles.botoes}>
            <TouchableOpacity style={styles.conteudoButaoEsquerdo}>
              <View style={styles.botaoEsquerdo}>
                <EvilIcons name="heart" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.conteudoBotaoDireito} onPress={checkout}>
              <View style={styles.botaoDireito}>
                <AntDesign name="shoppingcart" size={24} color="white" />
              </View>
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
    backgroundColor: '#F6F5F5',
  },
  backImage: {
    flex: 1,
    height: 300,
    marginTop: 30,
    width: '100%'
  },
  containerDetalhes: {
    flex: 1,
    backgroundColor: '#F6F5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -200,

  },
  conteudoText: {
    flex: 1,
    padding: 16,
    marginTop: 25,
  },
  conteudoCabecalho: {
    marginTop: 30
  },
  containerBotao: {
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 50
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '50%',
  },
  botaoVoltar: {
    width: 300,
    height: 50,
    marginLeft: 10,
  },
  tituloPage: {
    fontSize: 30,
    fontWeight: "bold"
  },
  searchBar: {
    width: 350,
    padding: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderRadius: 15
  },
  linhaProduto: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'

  }, conteudoDireita: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  conteudoProduto: {
    width: 350,
  },
  produtoText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  produtoContent: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  imagem: {
    width: '50%'
  },
  butoes: {
    fontSize: 22,
    marginTop: 8,
  },
  contentButao: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: 25
  },
  conteudoBotaoDireito: {
    backgroundColor: '#0BCE83',
    borderRadius: 5,
    marginLeft: 10

  },
  botaoEsquerdo: {
    width: 55,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoDireito: {
    width: 100,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudoBotaoesquerda: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ProdutosDetalhe