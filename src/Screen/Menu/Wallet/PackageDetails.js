import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const PackageDetails = ({ setToggol, packageName, LiniarColor, price, handelPaymentView }) => {

  return (
    <View style={{ position: 'relative', marginBottom: 10 }}>
      <LinearGradient
        colors={LiniarColor}
        style={{ margin: 15, borderRadius: 15, paddingVertical: 10 }}>



        <View>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{packageName} PACKAGE</Text>
          <Text style={{ color: '#F4EAFB', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>{price}</Text>

          <View style={{ margin: 10 }}>
            <Text style={{ fontWeight: 'bold', marginVertical: 5, fontSize: 18 }}>
              <Icon name='star' size={12} />
              10% off.On Every Purchase.</Text>
            <Text style={{ fontWeight: 'bold', marginVertical: 5, fontSize: 18 }}>
              <Icon name='star' size={12} />
              One Free Chat With A Star.</Text>
            <Text style={{ fontWeight: 'bold', marginVertical: 5, fontSize: 18 }}>
              <Icon name='star' size={12} />
              One Free Video Uploaded.</Text>
            <Text style={{ fontWeight: 'bold', marginVertical: 5, fontSize: 18 }}>
              <Icon name='star' size={12} />
              Entry in One Fan Group.</Text>

            <Text style={{ fontWeight: 'bold', marginVertical: 5, fontSize: 18 }}>
              <Icon name='star' size={12} />
              E commerce Surfing.</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
            <TouchableOpacity style={
              packageName == 'SILVER' ?

                { backgroundColor: '#C2C2C2', width: '40%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 } : packageName === 'GOLD' ?
                  { backgroundColor: '#FFD465', width: '40%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 } : packageName === 'PLATINUM' ? { backgroundColor: '#E3BEE4', width: '40%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 } : null
            }
              onPress={handelPaymentView}
            >
              <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 5, color: 'white' }}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>



      </LinearGradient>

      <TouchableOpacity
        onPress={() => {
          setToggol(false);

        }}
        style={{ position: 'absolute', bottom: -10, left: '45%' }}>
        <Text>
          <Icon name="chevron-up-circle-sharp" size={40} color="#C2C2C2" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default PackageDetails