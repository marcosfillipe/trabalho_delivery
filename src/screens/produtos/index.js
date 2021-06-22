import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons';
import Alface from '../../assets/Alface.png'
import Couve from '../../assets/Couve.png'
import Repolho from '../../assets/Repolho.png'

const Produtos = ({ navigation }) => {


  const categoriaPage = () => {
    navigation.replace('categories')
  }

  const produtosDetalhes = () => {
    navigation.replace('produtosDetalhe')
  }
  const checkout = () => {
    navigation.replace('checkout')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.conteudoCabecalho}>
        <TouchableOpacity style={styles.botaoVoltar} >
          <AntDesign name="back" size={24} color="black" onPress={categoriaPage} />
        </TouchableOpacity>
        <View>
          <Text style={styles.tituloPage}>Produtos</Text>
        </View>
        <View style={styles.conteudoPesquisa}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={styles.searchBar}
          />
        </View>
      </View>

      {/* <FlatList data={data} renderItem={(item) => <Card {...item} />} keyExtractor={(item) => item.id} numColumns={2} /> */}

      <TouchableOpacity onPress={produtosDetalhes}>
        <View style={styles.conteudoProduto}>
          <View style={styles.linhaProduto}>
            <Image style={styles.imagem} source={Alface} />

            <View style={styles.conteudoDireita}>
              <View>
                <Text style={styles.produtoText}>Alface</Text>
              </View>
              <View>
                <Text style={styles.produtoContent}>1.10 R$</Text>
              </View>
              <View style={styles.botoes}>
                <View style={styles.contentButao}>
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
          </View>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={produtosDetalhes}>
        <View style={styles.conteudoProduto}>
          <View style={styles.linhaProduto}>
            <Image style={styles.imagem} source={Couve} />

            <View style={styles.conteudoDireita}>
              <View>
                <Text style={styles.produtoText}>Couve</Text>
              </View>
              <View>
                <Text style={styles.produtoContent}>1.45 R$</Text>
              </View>
              <View style={styles.botoes}>
                <View style={styles.contentButao}>
                  <TouchableOpacity style={styles.conteudoButaoEsquerdo}>
                    <View style={styles.botaoEsquerdo}>
                      <EvilIcons name="heart" size={24} color="black" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.conteudoBotaoDireito}>
                    <View style={styles.botaoDireito}>
                      <AntDesign name="shoppingcart" size={24} color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={produtosDetalhes}>
        <View style={styles.conteudoProduto}>
          <View style={styles.linhaProduto}>
            <Image style={styles.imagem} source={Repolho} />

            <View style={styles.conteudoDireita}>
              <View>
                <Text style={styles.produtoText}>Repolho</Text>
              </View>
              <View>
                <Text style={styles.produtoContent}>1.85 R$</Text>
              </View>
              <View style={styles.botoes}>
                <View style={styles.contentButao}>
                  <TouchableOpacity style={styles.conteudoButaoEsquerdo}>
                    <View style={styles.botaoEsquerdo}>
                      <EvilIcons name="heart" size={24} color="black" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.conteudoBotaoDireito}>
                    <View style={styles.botaoDireito}>
                      <AntDesign name="shoppingcart" size={24} color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5',
    padding: 16
  },
  conteudoCabecalho: {
    marginTop: 30
  },
  botaoVoltar: {
    width: 300,
    height: 50,
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
    width: 55,
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

export default Produtos