import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import HeaderComp from '../../../Components/HeaderComp';
import imagePath from '../../../Constants/imagePath';
import navigationStrings from '../../../Constants/navigationStrings';
import styles from './Styles';

const TotalAuditions = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      {/*========= header start here==========  */}
      <HeaderComp />
      {/*========= header start here==========  */}

      <ScrollView style={{ marginTop: 6 }}>

        {/*============ top banner start here ======= */}

        <View
          style={styles.topBannerImg}>
          <Image
            source={imagePath.RoundBanner}
            style={{ height: '100%', width: '100%', borderRadius: 10 }}
          />
          <Text
            style={styles.topBannerTxt}>
            Audition Master Banner
          </Text>
        </View>
        {/*============ top banner end here ======= */}




        {/* =============Round-1 & 2 Navigation start here==========  */}
        <View
          style={styles.roundView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.ROUND1, {
              roundName: 1
            })}
            style={{
              height: 180,
              width: '49%',
              backgroundColor: '#282828',
              borderRadius: 10,
              padding: 10
            }}>
            <Image
              source={imagePath.Round}
              style={styles.roundImg}
              resizeMode={'stretch'}
            />

            <Text
              style={styles.roundTxt}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.ROUND1, {
              roundName: 2
            })}
            style={styles.roundTouchable}>
            <Image
              source={imagePath.Round}
              style={styles.roundImg}
              resizeMode={'stretch'}
            />

            <Text
              style={styles.roundTxt}>
              2
            </Text>
          </TouchableOpacity>
        </View>
        {/* =============Round-1 & 2 Navigation end here==========  */}



        {/* =============Round-3 & 4 Navigation start here==========  */}
        <View
          style={styles.roundView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.ROUND1, {
              roundName: 3
            })}
            style={styles.roundTouchable}>
            <Image
              source={imagePath.Round}
              style={styles.roundImg}
              resizeMode={'stretch'}
            />

            <Text
              style={styles.roundTxt}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.ROUND1, {
              roundName: 4
            })}
            style={styles.roundTouchable}>
            <Image
              source={imagePath.Round}
              style={styles.roundImg}
              resizeMode={'stretch'}
            />

            <Text
              style={styles.roundTxt}>
              4
            </Text>
          </TouchableOpacity>
        </View>
        {/* =============Round-3 & 4 Navigation end here==========  */}


        {/* =============Round-5 & 6  Navigation start here==========  */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.ROUND1,
              {
                roundName: 5
              }
            )}
            style={styles.roundTouchable}>
            <Image
              source={imagePath.Round}
              style={styles.roundImg}
              resizeMode={'stretch'}
            />

            <Text
              style={styles.roundTxt}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.ROUND1,
              {
                roundName: 6
              }
            )}
            style={styles.roundTouchable}>
            <Image
              source={imagePath.Round}
              style={styles.roundImg}
              resizeMode={'stretch'}
            />

            <Text
              style={styles.roundTxt}>
              6
            </Text>
          </TouchableOpacity>
        </View>
        {/* =============Round-5 & 6  Navigation end here==========  */}



        {/* =============Round-7 & 8  Navigation start here==========  */}

        <View
          style={styles.roundView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.ROUND1,
              {
                roundName: 7
              }
            )}
            style={styles.roundTouchable}>
            <Image
              source={imagePath.Round}
              style={styles.roundImg}
              resizeMode={'stretch'}
            />

            <Text
              style={styles.roundTxt}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.ROUND1,
              {
                roundName: 8
              }
            )}
            style={styles.roundTouchable}>
            <Image
              source={imagePath.Round}
              style={styles.roundImg}
              resizeMode={'stretch'}
            />

            <Text
              style={styles.roundTxt}>
              8
            </Text>
          </TouchableOpacity>
        </View>
        {/* =============Round-7 & 8  Navigation end here==========  */}


      </ScrollView>
    </View>
  );
};

export default TotalAuditions;
