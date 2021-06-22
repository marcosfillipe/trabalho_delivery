import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';
import Vegetais from '../../assets/Vegetais.png'
import Doces from '../../assets/Doces.png'
import Frutas from '../../assets/Frutas.png'
import Massas from '../../assets/Massas.png'
import Drinks from '../../assets/Drinks.png'
import Pães from '../../assets/Pães.png'


import firebase from 'firebase'

const Categores = ({ navigation }) => {


  const [data, setData] = useState([])

  const feachAll = () => {

    const ref = firebase.database().ref('categorias/')
    const ret = []

    //ref.on('value', (item) => item.forEach((e) => console.log(e.key, e.val())))
    ref.on('value', (item) => item.forEach((e) => { ret.push({ id: e.key, ...e.val() }) }))
    setData(ret)

  }

  useEffect(() => feachAll(), [])

  const initialPage = () => {
    navigation.replace('home')
  }

  const produtosPage = () => {
    navigation.replace('produtos')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudoCabecalho}>
        <TouchableOpacity style={styles.botaoVoltar} >
          <AntDesign name="back" size={24} color="black" onPress={initialPage} />
        </TouchableOpacity>
        <View>
          <Text style={styles.tituloPage}>Categorias</Text>
        </View>
        <View style={styles.conteudoPesquisa}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={styles.searchBar}
          />
        </View>
      </View>

      {/* <FlatList data={data} renderItem={(item) => <Card {...item} />} keyExtractor={(item) => item.id} numColumns={2} /> */}




      <View style={styles.linha1}>
        <View style={styles.conteudo}>
          <View style={{ backgroundColor: '#FFFFFF', width: 177, margin: 8, borderRadius: 5 }}>
            <TouchableOpacity onPress={produtosPage}>
              <Image source={Vegetais} />
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Vegetais</Text>
                <Text style={{ fontSize: 10 }}>14</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.conteudo}>
          <View style={{ backgroundColor: '#FFFFFF', width: 177, margin: 8, borderRadius: 5 }}>
            <TouchableOpacity >
              <Image source={Frutas} />
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Frutas</Text>
                <Text style={{ fontSize: 10 }}>8</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.linha1}>
        <View style={styles.conteudo}>
          <View style={{ backgroundColor: '#FFFFFF', width: 177, margin: 8, borderRadius: 5 }}>
            <TouchableOpacity >
              <Image source={Pães} />
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Pães</Text>
                <Text style={{ fontSize: 10 }}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.conteudo}>
          <View style={{ backgroundColor: '#FFFFFF', width: 177, margin: 8, borderRadius: 5 }}>
            <TouchableOpacity >
              <Image source={Doces} />
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Doces</Text>
                <Text style={{ fontSize: 10 }}>5</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.linha1}>
        <View style={styles.conteudo}>
          <View style={{ backgroundColor: '#FFFFFF', width: 177, margin: 8, borderRadius: 5 }}>
            <TouchableOpacity >
              <Image source={Massas} />
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Massas</Text>
                <Text style={{ fontSize: 10 }}>25</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.conteudo}>
          <View style={{ backgroundColor: '#FFFFFF', width: 177, margin: 8, borderRadius: 5 }}>
            <TouchableOpacity >
              <Image source={Drinks} />
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Drinks</Text>
                <Text style={{ fontSize: 10 }}>5</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5',
    padding: 16
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
    marginTop: 30
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
  }
})
export default Categores

const Card = ({ item }) => {

  //const { id, name, uri } = item
  return (

    <View style={{ backgroundColor: '#FFFFFF', width: 177, margin: 8, borderRadius: 5 }}>
      <TouchableOpacity >
        <Image source={Vegetais} />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 10 }}>{item.id}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}