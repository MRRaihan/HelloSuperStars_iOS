import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Heading from '../../../Components/GLOBAL/Reuseable/Heading'
import HeaderComp from '../../../Components/HeaderComp'
// import Heading from '../../../Components/Reuseable/Heading'

import UnderlineImage from '../../../Components/GLOBAL/Reuseable/UnderlineImage'
import imagePath from '../../../Constants/imagePath'
import RoundTopBanner from '../Round1/RoundTopBanner'

const Judges = () => {
  return (
    <View style={styles.container}>
      <HeaderComp />
      <RoundTopBanner title='AUDITION FIRST ROUND ENDING SOON' />
      <View style={{ backgroundColor: '#272727', paddingBottom: 10, borderRadius: 10 }}>
        <Heading heading="Incredible jury waiting for you" />
        <UnderlineImage />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

          <View style={styles.borderBg}>
            <Image source={imagePath.judge1} style={{ height: '100%', width: '100%' }} />
          </View>
          <View style={styles.borderBg}>
            <Image source={imagePath.judge2} style={{ height: '100%', width: '100%' }} />
          </View>

        </View>
        {/* <View>

        </View> */}
      </View>
    </View>
  )
}

export default Judges

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  jamesImg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  blackBg: {
    // flex: 1,
    position: 'absolute',
    width: '100%',
    top: '50%',
  },
  jamesBg: {
    flex: 1,
    margin: 8,
    position: 'relative',
    height: 150,
    overflow: 'hidden',
    borderRadius: 10,
  },
  borderBg: {

    margin: 8,
    borderColor: '#ff0',
    borderWidth: 1,
    height: 150,
    width: '40%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  centerElement: {
    position: 'absolute',
    top: '20%',
    left: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})