
import * as React from 'react';
import {
  SafeAreaView, ScrollView, Text, View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../../Constants/imagePath';
import AuctionProductCard from './AuctionPorductCard';
import styles from './styles';

const Data = [
  {
    key: 1,
    name: 'Bangladeshi Jersey',
    details: 'The product was designed for 2020 Ban vs Ind series !',
    price: '$9.99',
    ownerImg: imagePath.mash,
    productImg: imagePath.product1,
    owerName: 'Mashrafee Mortaza',
  },
  {
    key: 2,
    name: 'Football',
    details: 'The product was designed for 2020 Ban vs Ind series !',
    price: '$19.99',
    ownerImg: imagePath.putin,
    productImg: imagePath.product2,
    owerName: 'Putin',
  },

  {
    key: 3,
    name: 'Acoustic Football',
    details: 'The product was designed for 2020 Ban vs Ind series !',
    price: '$7.99',
    ownerImg: imagePath.bal,
    productImg: imagePath.product3,
    owerName: 'Shakib Al Hasan',
  },
];

function AuctionTab(props) {

  return (
    <View style={styles.container}>

      <SafeAreaView>
        <View style={styles.row1}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={{ borderRadius: 15 }} >
            <Text
              style={styles.AuctionT}>
              Auction
            </Text>
          </LinearGradient>
        </View>

        <ScrollView>
          {Data.map((item) => {
            return <AuctionProductCard setView={props.setView} name={item.name} productImg={item.productImg} price={item.price} ownerImg={item.ownerImg} owerName={item.owerName} key={item.key} buttonText="Participate" />
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default AuctionTab;
