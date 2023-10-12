import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';

interface cardProps {
  info: string
  titleCard: string

}
const Cards = ({ info, titleCard }: cardProps) => {

  return (
    <View style={{ padding: 20, left: 3, width: 80 }}>
      <View style={styles.cardContainer}>
        <View style={{ backgroundColor: '#32BC82', width: '100%', height: 75, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontSize: 28, textAlign: 'left', padding: 2 }}> 
             5 min antes  
          </Text>
          <Text style={{ color: 'white', fontSize: 28, textAlign: 'right', top: -40, }}> 
             15:40hrs
          </Text>
        </View>
        <Text style={{ color: 'black', fontSize: 28, textAlign: 'left' }}>
            {titleCard}
          </Text>
        <Text style={{ color: 'black', fontSize: 18, textAlign: 'left', padding: 20 }}>
          {info}
        </Text>
        <View style={styles.infoStyle}>


        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#D9D9D9',
    height: 200,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
   buttonStyle:{
     
   },



  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
    color: 'black'
  },
});

export default Cards;