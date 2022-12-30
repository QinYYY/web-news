// import { response } from 'express';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NewsItem from './NewsItem'
import NewsData from '../src/NewsData'



export default function HomeScreen() {

  const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-11-29&sortBy=publishedAt&apiKey=584df0ee9095458686d2680f03a89e39'

  const [newsList, setnewsList] = useState([])


  useEffect(() => {
    getdata()
  }, [])

  function getdata() {


    const list = NewsData.articles;
    list.map(item => {
      return setnewsList(newsItems => {
        return [...newsItems, item]
      })
    })
    // fetch(url)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then(res => {
    //     res.articles.map(item => {
    //       console.log("返回结果");
    //       console.log(item.title);
    //       setnewsList(items => {
    //         return [...items, {
    //           title: item.title
    //         }]
    //       })
    //     })
    //   }).catch(err => {
    //     console.log(err);
    //   })
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  const Item = ({ title, description, index }) => (
    <View>
      <Text>
        {index}. {title}
      </Text>
      <Text> {description} </Text>
    </View>
  );



  const renderItem = ({ item, index }) => (
    <NewsItem description={item.description} title={item.title} index={index} item={item} />
  );


  return (
    // <NavigationContainer>

    // </NavigationContainer>
    <SafeAreaView style={{
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }}>
      <FlatList
        data={newsList}
        renderItem={
          renderItem
        }
        keyExtractor={(item, index) => index}
      // extraData={selectedId}
      />
    </SafeAreaView>

  )

}