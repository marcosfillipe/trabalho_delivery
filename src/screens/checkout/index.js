import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';

const Checkout = ({ navigation }) => {


  const produtosDetalhes = () => {
    navigation.replace('produtosDetalhe')
  }
  const creditCard = () => {
    navigation.replace('creditCard')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudoCabecalho}>
        <View style={styles.conteudo}>
          <View style={styles.cabecalho}>
            <View style={{ marginLeft: 20, width: 30, marginBottom: 10 }} >
              <TouchableOpacity style={styles.botaoVoltar} onPress={produtosDetalhes}>
                <AntDesign name="back" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 110, marginBottom: 10 }}>
              <Text style={styles.tituloPage}>Checkout</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerCentral}>
        <View style={styles.metodoPagamento}>
          <View style={styles.tituloPagamento}>
            <View style={styles.conteudoTituloPagamento}>
              <View>
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Metodo de Pagamento</Text>
              </View>
              <View>
                <TouchableOpacity onPress={creditCard}>
                  <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 8, marginLeft: 70, fontWeight: 'bold' }}>Mudar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.campoCard}>**** **** **** 4747</Text>
        </View>


        <View style={styles.enderecoEntrega}>
          <View style={styles.tituloEndereco}>
            <View style={styles.conteudoTituloEndereco}>
              <View>
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Endereço de Entrega</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 8, marginLeft: 95, fontWeight: 'bold' }}>Mudar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.campoEndereco}>
            <Text style={{ fontSize: 20 }}>Rua: Teste</Text>
            <Text style={{ fontSize: 20 }}>Bairro: Algum Local</Text>
            <Text style={{ fontSize: 20 }}>Numero: 9999</Text>
            <Text style={{ fontSize: 20 }}>Complemento: AP-101</Text>
          </View>
        </View>


        <View style={styles.opcaoDelivery}>
          <View style={styles.tituloEndereco}>
            <View style={styles.conteudoTituloEndereco}>
              <View>
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Opções de Entrega</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 8, marginLeft: 115, fontWeight: 'bold' }}>Mudar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.campoEndereco}>
            <Text style={{ fontSize: 20 }}>Pegar no Local</Text>
            <Text style={{ fontSize: 20 }}>Entregar na Porta de Casa</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  botaoVoltar: {

  },
  tituloPage: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',

  },
  conteudoCabecalho: {
    backgroundColor: '#F6F5F5',
    width: 400,
    marginTop: 30,
  },
  cabecalho: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: 400,

  },
  conteudo: {
    width: '50%',
  },
  metodoPagamento: {
    marginTop: 30,
    marginLeft: 5
  },
  tituloPagamento: {
    width: '50%',

  },
  conteudoTituloPagamento: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: 400,
  },
  campoCard: {
    marginTop: 25,
    marginLeft: 15,
    fontSize: 20,

  },
  enderecoEntrega: {
    marginTop: 50,
    marginLeft: 5
  },
  tituloEndereco: {
    width: '50%',

  },
  conteudoTituloEndereco: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: 400,
  },
  campoEndereco: {
    marginTop: 15,
    marginLeft: 15,

  },
  tituloDelivery: {
    width: '50%',
  },
  conteudoTituloDelivery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: 400,
  },
  opcaoDelivery: {
    marginTop: 50,
    marginLeft: 5
  },
})
export default Checkout