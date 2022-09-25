import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComp from '../../../Components/HeaderComp';
import {AuthContext} from '../../../Constants/context';
import imagePath from '../../../Constants/imagePath';
import navigationStrings from '../../../Constants/navigationStrings';
import AppUrl from '../../../RestApi/AppUrl';
import styles from './Styles';
import CountDown from 'react-native-countdown-component';
const Learning = () => {
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [auditions, setAuditions] = useState([]);
  const {useInfo, axiosConfig} = useContext(AuthContext);

  const [lastTime, setLastTime] = useState(true);
  const [auditionComplete, setAuditionComplete] = useState(false);
  const remainingTime = time => {
    const startTime = new Date(time.concat(' 00:00:00')).getTime();
    const currentTime = new Date().getTime();
    if (startTime >= currentTime) {
      return (startTime - currentTime) / 1000;
    }
    return 0;
  };
  const isComplete = time => {
    const endTime = new Date(time.concat(' 00:00:00')).getTime();
    const currentTime = new Date().getTime();
    if (endTime >= currentTime) {
      return true;
    }
  };
  useEffect(() => {
    axios.get(AppUrl.enrolledAudition, axiosConfig).then(res => {
      if (res.data.status === 200) {
        setAuditions(res.data.enrolledAuditions);
      }
    });
  }, []);
  return (
    <>
      <HeaderComp backFunc={() => navigation.goBack()} />
      <View style={styles.container}>
        <SafeAreaView style={styles.ActiveNew}>
          <View style={{position: 'relative'}}>
            <Image source={imagePath.BgLane} style={styles.LaneBg} />
            <Text style={styles.LaneText} onPress={console.log(auditions)}>
              Auditions
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            {/*================== Card  Start here==================  */}
            {auditions.length > 0 ? (
              auditions.map((audition, index) => {
                return (
                  <TouchableOpacity
                    style={styles.LagEr}
                    onPress={() => {
                      if (remainingTime(audition.audition.start_date) == 0) {
                        navigation.navigate(navigationStrings.TOTALAUDITION, {
                          audition: audition.audition,
                        });
                      }
                      return;
                    }}>
                    <Image
                      source={{
                        uri: AppUrl.MediaBaseUrl + audition.audition.banner,
                      }}
                      style={width > 500 ? styles.ImgLanB : styles.ImgLan}
                    />
                    {remainingTime(audition.audition.start_date) != 0 &&
                    !isComplete(audition.audition.end_date) ? (
                      <Text
                        style={
                          width > 500 ? styles.LearnTextB : styles.LearnText
                        }>
                        Please Wait
                      </Text>
                    ) : remainingTime(audition.audition.start_date) == 0 &&
                      isComplete(audition.audition.end_date) ? (
                      <Text
                        style={
                          width > 500 ? styles.LearnTextB : styles.LearnText
                        }>
                        Join Now
                      </Text>
                    ) : (
                      <Text
                        style={
                          width > 500 ? styles.LearnTextB : styles.LearnText
                        }>
                        Completed
                      </Text>
                    )}
                    <View style={styles.LajFS}>
                      <View
                        style={{
                          backgroundColor: '#ffffffa2',
                          padding: 5,
                          borderRadius: 10,
                        }}>
                        <CountDown
                          // until={totalSecond}
                          until={remainingTime(audition.audition.start_date)}
                          onFinish={() => setLastTime(false)}
                          // onPress={() => alert('hello')}
                          digitStyle={{
                            backgroundColor: 'black',
                            borderWidth: 2,
                            borderColor: '#FFAD00',
                            borderRadius: 20,
                          }}
                          digitTxtStyle={{color: '#FFAD00'}}
                          timeLabelStyle={{
                            color: 'black',
                            fontWeight: 'bold',
                          }}
                          size={20}
                        />
                      </View>

                      <Text style={styles.autionTitleText}>
                        {audition.audition.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            ) : (
              <></>
            )}

            {/*================== Card  Start here==================  */}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Learning;
