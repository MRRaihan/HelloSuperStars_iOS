import React from 'react';
import {
     Image, Text,
     TouchableOpacity, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import showcaseNavigator from './showcaseNavigator';
import styles from './styles';

const AuctionProductCard = (props) => {
     const { setView } = props
     return (
          <>
               <View style={styles.MaiN}>
                    <View style={styles.mainView}>
                         <View style={{ flexDirection: 'row', margin: 10 }}>
                              <View style={{ width: '40%' }}>
                                   <SwiperFlatList
                                        autoplay
                                        autoplayDelay={5}
                                        autoplayLoop
                                        width={130}
                                   >
                                        <Image source={props.productImg} style={styles.postImageX} />
                                        <Image source={props.productImg} style={styles.postImageX} />
                                        <Image source={props.productImg} style={styles.postImageX} />
                                   </SwiperFlatList>
                                   {/* <Image source={props.productImg} style={{ width: '100%' }} /> */}
                              </View>
                              <View style={styles.mainView2}>
                                   <Text style={{ color: 'white', fontSize: 18 }}>
                                        {props.name}
                                   </Text>
                                   <Text style={{ color: 'gray', fontSize: 11 }}>
                                        The product was designed for {'\n'} 2020 Ban vs Ind series!
                                   </Text>


                                   <View style={styles.PriceRow}>
                                        <View>

                                             <Text style={styles.Price}>{props.price}</Text>
                                        </View>
                                        <View>

                                             <Text style={styles.PriceBest}>Best Price</Text>
                                        </View>

                                   </View>

                                   <View
                                        style={styles.View3}>
                                        <View style={{ justifyContent: 'center' }}>
                                             <Image source={props.ownerImg} />
                                        </View>
                                        <View style={{ marginLeft: 5 }}>
                                             <Text style={{ color: 'gray', marginLeft: 2 }}>Owner</Text>
                                             <Text style={styles.Owner}> {props.owerName} </Text>
                                        </View>
                                   </View>

                                   <TouchableOpacity onPress={() => setView(showcaseNavigator.PARTICIPATE)}>

                                        <LinearGradient
                                             start={{ x: 0, y: 0 }}
                                             end={{ x: 1, y: 0 }}
                                             colors={['#FFAD00',
                                                  '#FFD273',
                                                  '#E19A04',
                                                  '#FACF75',
                                                  '#E7A725',
                                                  '#FFAD00',]}
                                             style={{ borderRadius: 15 }} >
                                             <Text
                                                  style={styles.Btn}>
                                                  {props.buttonText}
                                             </Text>
                                        </LinearGradient>
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </View>
               </View>

          </>
     )
}

export default AuctionProductCard