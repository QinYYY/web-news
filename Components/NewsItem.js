import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native';
// import { img } from 'react-native-web';
import moment from "moment";

export default function NewsItem(pros) {
  // moment("2021-07-14T00:00:00.000Z").utc().format('YYYY-MM-DD')

  const date = moment(pros.item.publishedAt).utc().format('YYYY-MM-DD')

  const itemImageStyle = {
    color: "brown",
    backgroundColor: "DodgerBlue",
    padding: 10,
    height: 200,
    margin: '10px 5px ',


  };
  const itemContainerView = {

    padding: 10,
    marginBottom: 10,
    borderBottom: '1px solid white'

  };

  const imgageView = {
    color: 'green'

  };
  const titleStyle = {
    fontSize: "20px",
    fontWeight: 'bolder',

  }
  const authorStyle = {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#00ABB3',
    color: 'white',
    fontWeight: 'bolder',
    borderRadius: '5px',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#3C4048',
    overflow: 'hidden',
  }
  const dateStyle = {

    color: '#B2B2B2',
    fontSize: '15px',
    marginTop: 5,
    backgroundColor: '#36ae7c',

    borderColor: "white",
    borderWidth: 1,
    color: 'white',
    borderRadius: 5,
    fontWeight: 'bolder',
    padding: 5,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#3C4048',
    overflow: 'hidden',
  }

  const descriptionStyle = {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    color: '#3C4048',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#f0f8ff'
  };
  const imageView = {
    color: "brown",
    backgroundColor: "DodgerBlue",
    padding: 10,
    width: "100%",
    height: 200,

    // margin: '10px 5px',
  }

  function clickItem(event) {
    console.log('点击了' + pros.item.title);

  }

  return (<View style={itemContainerView}
    onTouchStart={clickItem}>
    <View>
      <Text style={titleStyle}>{pros.item.title}</Text>
      <View>

        <Text style={dateStyle}>{date}</Text>
        <Text style={authorStyle}>{pros.item.author}</Text>


      </View>

      <View style={imgageView}>
        <Image
          style={imageView}
          source={{
            uri: pros.item.urlToImage
          }}></Image>

        {/* <img src={pros.item.urlToImage}></img> */}
      </View>
      <Text style={descriptionStyle}>{pros.item.description} </Text>

    </View>
  </View >)
}



// "source": {
//   "id": null,
//     "name": "MacRumors"
// },
// "author": "Hartley Charlton",
//   "title": "Apple's Next External Display: Everything We Know About Key Features and Launch Date",
//     "description": "Apple is rumored to be planning to launch an all-new external display within a matter of months, featuring a host of advanced capabilities that surpass the company's two existing monitors. The display, which is rumored to arrive in early 2023, is expecte…",
//       "url": "https://www.macrumors.com/2022/12/28/next-apple-external-display-features-and-launch/",
//         "urlToImage": "https://images.macrumors.com/t/bdp6moUQ-3XjqC78wfPg70HR7Ng=/2590x/article-new/2020/05/Pro-Display-XDR-Yella.jpg",
//           "publishedAt": "2022-12-28T15:59:51Z",
//             "content": "Apple is rumored to be planning to launch an all-new external display within a matter of months, featuring a host of advanced capabilities that surpass the company's two existing monitors. The displ… [+4728 chars]"
// }

