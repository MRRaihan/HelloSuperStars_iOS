import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import HeaderComp from '../../../Components/HeaderComp';
import imagePath from '../../../Constants/imagePath';
import navigationStrings from '../../../Constants/navigationStrings';
import styles from './Styles';
const Learning = () => {
     const width = Dimensions.get('window').width;
     const navigation = useNavigation();
     return (
          <>
               <HeaderComp />
               <View style={styles.container}>
                    <SafeAreaView style={styles.ActiveNew}>
                         <View style={{ position: 'relative' }}>
                              <Image source={imagePath.BgLane} style={styles.LaneBg} />
                              <Text style={styles.LaneText}>Auditions</Text>
                         </View>
                         <View style={{ flexDirection: 'row' }}>
                              <TouchableOpacity
                                   style={styles.LagEr}
                                   onPress={() =>
                                        navigation.navigate(navigationStrings.TOTALAUDITION)
                                   }>
                                   <Image
                                        source={imagePath.Learning2}
                                        style={width > 500 ? styles.ImgLanB : styles.ImgLan}
                                   />
                                   <Text style={width > 500 ? styles.LearnTextB : styles.LearnText}>
                                        Join Now
                                   </Text>
                                   <View style={styles.LajFS}>
                                        <View style={width > 500 ? styles.BgLangB : styles.BgLang}>
                                             <Text
                                                  style={width > 500 ? styles.textLearMB : styles.textLearM}>
                                                  05
                                             </Text>
                                             <Text
                                                  style={width > 500 ? styles.textLearB : styles.textLear}>
                                                  DAYS
                                             </Text>
                                        </View>
                                        <View style={width > 500 ? styles.BgLangB : styles.BgLang}>
                                             <Text
                                                  style={width > 500 ? styles.textLearMB : styles.textLearM}>
                                                  05
                                             </Text>
                                             <Text
                                                  style={width > 500 ? styles.textLearB : styles.textLear}>
                                                  HOURS
                                             </Text>
                                        </View>
                                        <View style={width > 500 ? styles.BgLangB : styles.BgLang}>
                                             <Text
                                                  style={width > 500 ? styles.textLearMB : styles.textLearM}>
                                                  05
                                             </Text>
                                             <Text
                                                  style={width > 500 ? styles.textLearB : styles.textLear}>
                                                  MIN
                                             </Text>
                                        </View>
                                        <View style={width > 500 ? styles.BgLangB : styles.BgLang}>
                                             <Text
                                                  style={width > 500 ? styles.textLearMB : styles.textLearM}>
                                                  05
                                             </Text>
                                             <Text
                                                  style={width > 500 ? styles.textLearB : styles.textLear}>
                                                  SEC
                                             </Text>
                                        </View>
                                        <Text
                                             style={styles.autionTitleText}>
                                             Audition Title Here
                                        </Text>
                                   </View>
                              </TouchableOpacity>

                              <TouchableOpacity
                                   style={styles.LagEr2}
                                   onPress={() =>
                                        navigation.navigate(navigationStrings.TOTALAUDITION)
                                   }>
                                   <Image
                                        source={imagePath.Learning2}
                                        style={width > 500 ? styles.ImgLanB : styles.ImgLan}
                                   />
                                   <Text style={width > 500 ? styles.LearnTextB : styles.LearnText}>
                                        Join Now
                                   </Text>
                                   <View style={styles.LajFS}>
                                        <View style={width > 500 ? styles.BgLangB : styles.BgLang}>
                                             <Text
                                                  style={width > 500 ? styles.textLearMB : styles.textLearM}>
                                                  05
                                             </Text>
                                             <Text
                                                  style={width > 500 ? styles.textLearB : styles.textLear}>
                                                  DAYS
                                             </Text>
                                        </View>
                                        <View style={width > 500 ? styles.BgLangB : styles.BgLang}>
                                             <Text
                                                  style={width > 500 ? styles.textLearMB : styles.textLearM}>
                                                  05
                                             </Text>
                                             <Text
                                                  style={width > 500 ? styles.textLearB : styles.textLear}>
                                                  HOURS
                                             </Text>
                                        </View>
                                        <View style={width > 500 ? styles.BgLangB : styles.BgLang}>
                                             <Text
                                                  style={width > 500 ? styles.textLearMB : styles.textLearM}>
                                                  05
                                             </Text>
                                             <Text
                                                  style={width > 500 ? styles.textLearB : styles.textLear}>
                                                  MIN
                                             </Text>
                                        </View>
                                        <View style={width > 500 ? styles.BgLangB : styles.BgLang}>
                                             <Text
                                                  style={width > 500 ? styles.textLearMB : styles.textLearM}>
                                                  05
                                             </Text>
                                             <Text
                                                  style={width > 500 ? styles.textLearB : styles.textLear}>
                                                  SEC
                                             </Text>
                                        </View>
                                        <Text
                                             style={styles.autionTitleText}>
                                             Audition Title Here
                                        </Text>
                                   </View>
                              </TouchableOpacity>
                         </View>
                    </SafeAreaView>
               </View>
          </>
     );
};

export default Learning;
