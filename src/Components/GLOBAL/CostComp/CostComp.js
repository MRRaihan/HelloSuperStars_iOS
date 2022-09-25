import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';

import Heading from '../Reuseable/Heading';
import UnderlineImage from '../Reuseable/UnderlineImage';
import imagePath from '../../../Constants/imagePath';

const CostComp = ({title, amount}) => {
  return (
    <>
      <View style={styles.greetingsRequest}>
        <Heading heading="Cost" />
        <UnderlineImage />
        <View style={{margin: 13, borderRadius: 15, overflow: 'hidden'}}>
          <ImageBackground
            style={styles.costBg}
            source={imagePath.greetingsBanner}>
            <View style={{padding: 15}}>
              <Text style={styles.greetingsCost}>{title}</Text>
              <Text style={styles.twoFiftySix}>{amount} BDT</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

export default CostComp;
