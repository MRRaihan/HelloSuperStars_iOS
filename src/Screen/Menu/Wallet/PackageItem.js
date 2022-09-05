import React, { useState } from 'react'
import PackageDetails from './PackageDetails';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import imagePath from '../../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import styles from './Styles';


const PackageItem = ({ data, handelPaymentView }) => {
    const [toggol, setToggol] = useState(false);
    const [platinum, setPlatinum] = useState(false);
    const [gold, setGold] = useState(false);
    return (
        <>



            {toggol ? null : <View style={{ position: 'relative', marginBottom: 10 }}>
                <LinearGradient
                    colors={['#C2C2C2', '#ff4f4f']}
                    style={{ margin: 15, borderRadius: 15, paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.cardGrid}>
                            <View style={{ height: 70, width: 100 }}>
                                <Image
                                    source={imagePath.gray1}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </View>
                        </View>
                        <View style={styles.cardGrid2}>
                            <Text
                                style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
                                {data?.price}
                            </Text>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                {data?.title}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
                <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                >


                    <TouchableOpacity
                        onPress={() => {
                            setToggol(true)
                            setGold(false)
                            setPlatinum(false)
                        }}
                        style={{ position: 'absolute', bottom: -10, left: '45%' }}>
                        <Text>
                            <Icon name="ios-chevron-down-circle" size={40} color="#C2C2C2" />
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>}

            {toggol ? <PackageDetails handelPaymentView={() => handelPaymentView(data.id)} setToggol={setToggol} packageName='SILVER' LiniarColor={['#C2C2C2', '#797979']} price={data?.price} /> : null}
        </>
    )
}

export default PackageItem