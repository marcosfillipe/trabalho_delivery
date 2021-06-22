import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';
import Card from '../../assets/Card.png'
import takephoto from '../../assets/takephoto.png'

const CreditCard = ({ navigation }) => {

  const checkout = () => {
    navigation.replace('checkout')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudoCabecalho}>
        <TouchableOpacity style={styles.botaoVoltar} >
          <AntDesign name="back" size={24} color="black" onPress={checkout} />
        </TouchableOpacity>
        <View >
          <Text style={styles.tituloPage}>Credito / Debito</Text>
        </View>
      </View>
      <View style={styles.cartaoCredito}>
        <Image source={Card} />
      </View>
      <View style={styles.estiloTakephoto}>
        <Image source={takephoto} />
      </View>

      <View style={styles.conteudoCadastro}>
        <View style={styles.fieldNome}>
          <Text style={{ fontSize: 15 }}>Nome no Cartão</Text>
          <TextInput
            style={styles.imputNome}
            value='Alexandra Smith'
          />
        </View>

        <View style={styles.fieldNome}>
          <Text style={{ fontSize: 15 }}>Numero do Cartão</Text>
          <TextInput
            style={styles.imputNome}
            value='4747 4747 4747 4747'
          />
        </View>


        <View style={styles.fieldButton}>
          <View style={styles.camposDataCvc}>
            <View style={styles.fieldDataExpiracao}>
              <Text>Data de Expiração</Text>
              <TextInput
                style={styles.imputData}
                value='07 / 21'
              />
            </View>
            <View style={styles.fieldCVC}>
              <Text>CVC</Text>
              <TextInput
                style={styles.imputCVC}
                value='474'
              />
            </View>
          </View>
        </View>
        <View style={styles.botaoSalvar}>
          <TouchableOpacity style={styles.conteudoButao} onPress={checkout}>
            <Text style={styles.buttonSalvar}>Usar esse Cartão</Text>
          </TouchableOpacity>
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
  botaoVoltar: {
    width: 300,
    height: 50,
  },
  tituloPage: {
    fontSize: 30,
    fontWeight: "bold"
  },
  conteudoCabecalho: {
    marginTop: 30,
    padding: 16
  },
  searchBar: {
    width: 350,
    padding: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderRadius: 15
  },
  linha1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  conteudo: {
    width: '50%',
  },
  cartaoCredito: {
    padding: 8
  },
  estiloTakephoto: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imputNome: {
    width: 350,
    padding: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderRadius: 10
  },
  fieldNome: {
    padding: 8,
    marginLeft: 10,
  },
  fieldButton: {
    padding: 8,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  fieldDataExpiracao: {

  },
  imputData: {
    width: 100,
    padding: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderRadius: 10
  },
  imputCVC: {
    width: 100,
    padding: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderRadius: 10
  },
  camposDataCvc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: 400
  },
  fieldCVC: {
    width: 200,
    marginLeft: 85,
  },
  botaoSalvar: {
    marginTop: 10,
    alignSelf: 'center',
  },
  conteudoButao: {
    backgroundColor: '#0BCE83',
    borderRadius: 5,
    width: 300,
    height: 50,
  },
  buttonSalvar: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 22,
    marginTop: 8,
  },
})
export default CreditCard