import React from 'react';
import {Image, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import imagePath from '../../../Constants/imagePath';
import TopAuditonBanner from '../TotalAuditons/TopAuditonBanner';
import AppUrl from '../../../RestApi/AppUrl';
import CountDown from 'react-native-countdown-component';
export default function RoundTopBanner({
  title,
  toptitle,
  RoundName,
  auditionTitle,
  auditionImage,
  remainingTime,
}) {
  console.log('-----------remaining time', remainingTime);
  return (
    <>
      <View
        style={{
          backgroundColor: '#272727',
          marginVertical: 15,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            padding: 10,
            textAlign: 'center',
          }}>
          {auditionTitle}
        </Text>
        <View
          style={{borderWidth: 0.5, borderColor: 'black', marginVertical: 2}}
        />
        <TopAuditonBanner title={toptitle ? 'Auditons' : RoundName} />

        <View style={{position: 'relative', paddingBottom: 20}}>
          <View
            style={{
              height: 150,
              width: '100%',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: AppUrl.MediaBaseUrl + auditionImage,
              }}
              style={{width: '90%', height: '100%', borderRadius: 10}}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              top: '20%',
            }}>
            <View style={{}}>
              {remainingTime > 0 ? (
                <CountDown
                  // until={totalSecond}
                  until={remainingTime}
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
              ) : (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#ECA81D',
                      justifyContent: 'center',
                      borderRadius: 5,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        backgroundColor: 'black',
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        height: 40,
                        width: 40,
                      }}>
                      <MaterialCommunityIcons
                        name="alarm"
                        color={'#ECA81D'}
                        size={18}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: 'black',
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        height: 40,
                        width: 40,
                      }}>
                      <Text style={{color: 'gold', fontSize: 10}}>Day</Text>
                      <Text style={{color: 'gold'}}>01</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: 'black',
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        height: 40,
                        width: 40,
                      }}>
                      <Text style={{color: 'gold', fontSize: 10}}>Hou</Text>
                      <Text style={{color: 'gold'}}>01</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: 'black',
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        height: 40,
                        width: 40,
                      }}>
                      <Text style={{color: 'gold', fontSize: 10}}>Min</Text>
                      <Text style={{color: 'gold'}}>01</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: 'black',
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        height: 40,
                        width: 40,
                      }}>
                      <Text style={{color: 'gold', fontSize: 10}}>Sec</Text>
                      <Text style={{color: 'gold'}}>01</Text>
                    </View>
                  </View>
                </>
              )}
            </View>
          </View>

          <View style={{position: 'absolute', top: '70%', width: '100%'}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
