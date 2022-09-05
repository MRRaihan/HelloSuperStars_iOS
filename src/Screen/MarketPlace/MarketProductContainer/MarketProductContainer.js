import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
    RefreshControl, ScrollView, View
} from 'react-native';
import MarketPlaceSkeleton from '../../../Components/Skeleton/MarketSkeleton/MarketPlaceSkeleton';
import { AuthContext } from '../../../Constants/context';
import MarketProductCard from '../MarketProductCard/MarketProductCard';

const MarketProductContainer = ({ apiInPoint }) => {
    const { axiosConfig } = useContext(AuthContext);
    const [marketPlaceData, setMarketPlaceData] = useState();
    const [loder, setLoder] = useState(true);
    const [Refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        getAllMarketPost();
        setRefreshing(false);
    }

    useEffect(() => {
        getAllMarketPost();
    }, [])


    const getAllMarketPost = async () => {
        setLoder(true)
        let res = await axios.get(apiInPoint, axiosConfig).then(res => {
            if (res.data.status === 200) {
                setLoder(false);
                setMarketPlaceData(res.data.data);
            }
        }).catch(err => {
            console.log(err);
            // alert('network problem')
        });
    }

    return (
        <View>
            <ScrollView
                style={{ marginBottom: 95, backgroundColor: 'black' }}
                refreshControl={
                    <RefreshControl
                        refreshing={Refreshing}
                        onRefresh={onRefresh}
                        colors={['#FFAD00']}
                        progressBackgroundColor="black"
                    />
                }
            >
                {loder && [1, 2, 3, 4].map((index) => <MarketPlaceSkeleton key={index} />)}

                {marketPlaceData && marketPlaceData.map((data, index) => (
                    <MarketProductCard
                        data={data}
                        buttonText="Buy Now"
                        key={index}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
export default MarketProductContainer;