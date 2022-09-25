import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import HeaderComp from '../../../Components/HeaderComp';
import imagePath from '../../../Constants/imagePath';
import navigationStrings from '../../../Constants/navigationStrings';
import styles from './Styles';
import AppUrl from '../../../RestApi/AppUrl';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';
import {AuthContext} from '../../../Constants/context';
import axios from 'axios';
const TotalAuditions = ({route}) => {
  const navigation = useNavigation();
  const {audition} = route.params;
  const {axiosConfig} = useContext(AuthContext);

  const [roundInfo, setRoundInfo] = useState([]);
  const [roundPass, setRoundPass] = useState(0);

  const [roundInstruction, setRoundInstruction] = useState([]);
  const [auditionRoundNum, setAuditionRoundNum] = useState(0);
  const [round, setRound] = useState([]);

  useEffect(() => {
    axios
      .get(AppUrl.activeRounds + audition.slug, axiosConfig)
      .then(res => {
        if (res.data.status === 200) {
          setRoundInfo([res.data.round_info]);
          setRoundPass(res.data.myRoundPass);
          console.log(res.data);
          setRoundInstruction(res.data.round_instruction);
          setAuditionRoundNum(
            res.data.myRoundPass + 1 >= res.data.totalRound
              ? res.data.totalRound
              : res.data.myRoundPass + 1,
          );
          const allRounds = audition.audition_round;

          const activeRoundNumber = res.data.myRoundPass;

          console.log('all rounds', allRounds);

          console.log('activeRoundNumber', activeRoundNumber);

          const currentRound = allRounds?.filter(item => {
            return item.round_num <= activeRoundNumber + 1;
          });

          setRound(currentRound);
          console.log('data is===>', currentRound);

          // allRounds.map((singleRound, index) => {
          //   if (index === activeRoundNumber - 1) {

          //     setRound([allRounds[index]]);
          //     return;
          //   }
          // });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log('----------------------______________--------------', audition);

  const buildRound = () => {};
  return (
    <View style={styles.container}>
      {/*========= header start here==========  */}
      <HeaderComp backFunc={() => navigation.goBack()} />
      {/*========= header start here==========  */}

      <ScrollView style={{marginTop: 6}}>
        {/*============ top banner start here ======= */}

        <View style={styles.topBannerImg}>
          <Image
            // source={imagePath.RoundBanner}
            source={{
              uri: AppUrl.MediaBaseUrl + audition.banner,
            }}
            style={{height: '100%', width: '100%', borderRadius: 10}}
          />
          <Text
            style={styles.topBannerTxt}
            onPress={() => {
              console.log(round);
            }}>
            {audition.title}
          </Text>
        </View>
        {/*============ top banner end here ======= */}

        {/* =============Round-1 & 2 Navigation start here==========  */}
        <View style={styles.roundView}>
          <FlatGrid
            itemDimension={160}
            data={round}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(navigationStrings.ROUND1, {
                      auditionInfo: item,
                      auditionImage: audition.banner,
                      auditionTitle: audition.title,
                      auditionId: item.audition_id,
                      roundId: item.id,
                      judges: audition.assigned_judges,
                      juries: audition.assigned_juries,
                    })
                  }
                  style={{
                    height: 180,
                    width: '100%',
                    backgroundColor: '#282828',
                    borderRadius: 10,
                    padding: 10,
                  }}>
                  <Image
                    source={imagePath.Round}
                    style={styles.roundImg}
                    resizeMode={'stretch'}
                  />

                  <Text style={styles.roundTxt}>{item.round_num}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TotalAuditions;
