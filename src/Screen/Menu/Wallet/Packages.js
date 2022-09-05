import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import imagePath from '../../../Constants/imagePath';
import styles from './Styles';
import PackageDetails from './PackageDetails';
import * as Animatable from 'react-native-animatable';
import PackageItem from './PackageItem';
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

import axios from 'axios';
import { AuthContext } from '../../../Constants/context';
import AppUrl from '../../../RestApi/AppUrl';
import PaymentComp from '../../../Components/GLOBAL/PaymentComp/PaymentComp';

const Packages = () => {
  const { axiosConfig } = useContext(AuthContext);
  const [buffre, setBuffre] = useState(true);
  const [packagesData, setPackagesData] = useState()
  const [paymentView, setPaymentView] = useState(false)

  useEffect(() => {
    getAllpackeges()
  }, [])

  const getAllpackeges = () => {
    axios.get(AppUrl.AllPackages, axiosConfig).then((res) => {
      setBuffre(false)
      if (res.data.status === 200) {
        setPackagesData(res.data.allPackages)
      }
    }).catch((err) => {
      console.log(err)
      // alert('network problem')
    })
  }

  const [PackegeId, setPackegeId] = useState()
  const handelPaymentView = (id) => {
    setPaymentView(true)
    setPackegeId(id)
  }


  return (
    <>
      <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#343434' }}>
        <Text style={{ color: '#F4EAFB', textAlign: 'center', marginTop: 13, fontSize: 18 }}>
          Available Package
        </Text>
        <View style={styles.vlLine} />
        {buffre ?

          <SkeletonPlaceholder
            backgroundColor='#2e2e2e'
            highlightColor="#3d3d3d"
            height="200"
          >
            <SkeletonPlaceholder.Item width="95%" height={90} borderRadius={10} marginLeft={8} marginRight={8} marginTop={20} />
            <SkeletonPlaceholder.Item width="95%" height={90} borderRadius={10} marginLeft={8} marginRight={8} marginTop={5} />
            <SkeletonPlaceholder.Item width="95%" height={90} borderRadius={10} marginLeft={8} marginRight={8} marginTop={5} marginBottom={20} />

          </SkeletonPlaceholder >
          :
          <>
            {packagesData && !paymentView ? packagesData.map((item, index) =>
              <PackageItem key={index} data={item} handelPaymentView={handelPaymentView} />
            )
              :

              <PaymentComp setPaymentView={setPaymentView} type={'packageBuy'} PackegeId={PackegeId} />
            }

          </>
        }


      </View>
    </>
  );
};

export default Packages;
