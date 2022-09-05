import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderComp from '../../../Components/HeaderComp';
import Heading from '../../../Components/GLOBAL/Reuseable/Heading';
import UnderlineImage from '../../../Components/GLOBAL/Reuseable/UnderlineImage';
import imagePath from '../../../Constants/imagePath';
import RoundTopBanner from '../../Audition/Round1/RoundTopBanner';
const Instuction = () => {
  return (
    <View style={styles.container}>
      <HeaderComp />

      <ScrollView>
        <RoundTopBanner title={'AUDITION FIRST ROUND ENDING TIME'} />
        <View style={styles.auditionDescriptionRound}>
          <Heading heading="Instructions" />
          <UnderlineImage />

          <View style={{margin: 5}}>
            <View style={{padding: 10}}>
              <View
                style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <Image
                  style={styles.imageWidth}
                  source={imagePath.AuditionInstruction}
                  resizeMode="stretch"
                />
                <Text style={{color: '#fff', marginLeft: 4, marginRight: 4}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <Image
                  style={styles.imageWidth}
                  source={imagePath.AuditionInstruction}
                  resizeMode="stretch"
                />
                <Text style={{color: '#fff', marginLeft: 4, marginRight: 4}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <Image
                  style={styles.imageWidth}
                  source={imagePath.AuditionInstruction}
                  resizeMode="stretch"
                />
                <Text style={{color: '#fff', marginLeft: 4, marginRight: 4}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <Image
                  style={styles.imageWidth}
                  source={imagePath.AuditionInstruction}
                  resizeMode="stretch"
                />
                <Text style={{color: '#fff', marginLeft: 4, marginRight: 4}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <Image
                  style={styles.imageWidth}
                  source={imagePath.AuditionInstruction}
                  resizeMode="stretch"
                />
                <Text style={{color: '#fff', marginLeft: 4, marginRight: 4}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </Text>
              </View>
            </View>
          </View>

          <View style={{margin: 10, position: 'relative'}}>
            <Image
              source={imagePath.AuditionInstructionVideo}
              style={styles.video}
              resizeMode="stretch"
            />
            <Image source={imagePath.PauseIcon} style={styles.pauseImg} />
          </View>

          <View style={styles.rowStyle}>
            <View style={styles.startBg}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={imagePath.Flags} style={styles.flagImg} />
              </View>
              <View>
                <Text style={styles.starts}>Starts</Text>
                <Text style={styles.aprilTxt}>2 April 2022</Text>
              </View>
            </View>
            <View style={styles.endBg}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={imagePath.Flags} style={styles.flagImg} />
              </View>
              <View>
                <Text style={styles.starts}>End</Text>
                <Text style={styles.aprilTxt}>8 April 2022</Text>
              </View>
            </View>
            <View style={styles.startBg}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={imagePath.Flags} style={styles.flagImg} />
              </View>
              <View>
                <Text style={styles.starts}>Starts</Text>
                <Text style={styles.aprilTxt}>2 April 2022</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Instuction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  flagImg: {
    width: 25,
    height: 25,
  },
  starts: {
    fontSize: 12,
    color: '#fff',
  },
  aprilTxt: {
    fontSize: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  startBg: {
    backgroundColor: '#1d4779',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  endBg: {
    backgroundColor: '#806e08',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  video: {
    width: '100%',
  },
  auditionDescriptionRound: {
    margin: 10,
    backgroundColor: '#343434',
    padding: 5,
    borderRadius: 10,
  },
  imageWidth: {
    width: 20,
    height: 20,
    // margin: 5,
  },
  roundImage: {
    flexDirection: 'row',
    // padding: 8,
    backgroundColor: 'red',
  },
  auditionDescription: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b0b0b',
    margin: 10,
  },
  pauseImg: {
    position: 'absolute',
    left: '46%',
    top: '40%',
  },
});
