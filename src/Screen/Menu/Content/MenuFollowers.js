import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/FontAwesome';
import imagePath from '../../../Constants/imagePath';
import styles from './FollowersStyle';
const dummyData = [
  {
    name: 'Shakib All Hasan',
    id: 1,
    imgUrl: imagePath.SakibBalHasan,
    type: 'Unfollow',
  },
  {
    name: 'Ferdous Ahamed',
    id: 2,
    imgUrl: imagePath.Ferdous,
    type: 'Unfollow',
  },

  {
    name: 'Momotaz Begum',
    id: 3,
    imgUrl: imagePath.Momotaz,
    type: 'Unfollow',
  },

  {
    name: 'Purnima',
    id: 4,
    imgUrl: imagePath.Purnima,
    type: 'Unfollow',
  },
];
const suggetionDummy = [
  {
    name: 'Sulaiman Sukoon',
    id: 1,
    imgUrl: imagePath.Sulaiman,
    type: 'Follow',
  },
  {
    name: 'Shakib Khan',
    id: 2,
    imgUrl: imagePath.ShakibKhan,
    type: 'Follow',
  },
];
const MenuFollowers = () => {
  const Category = ['Bollywood', 'Tollywood', 'Hollywood', 'Kollywood'];
  const [select, setSelect] = useState();
  const [data, setData] = React.useState(dummyData);
  const [data2, setData2] = React.useState(suggetionDummy);
  const [userData, setUserData] = useState(false);
  const [userData2, setUserData2] = useState(false);
  const updateObjectInArray = click_id => {
    setData(current =>
      current.map(obj => {
        if (obj.id === click_id) {
          return {
            ...obj,
            id: click_id,
            imgUrl: data[click_id - 1].imgUrl,
            type: userData ? 'Follow' : 'Unfollow',
          };
        }
        return obj;
      }),
    );
  };
  const updateObjectInArray2 = click_id => {
    // alert(click_id)
    setData2(current =>
      current.map(obj => {
        if (obj.id === click_id) {
          return {
            ...obj,
            id: click_id,
            imgUrl: data2[click_id - 1].imgUrl,
            type: userData2 ? 'Follow' : 'Unfollow',
          };
        }
        return obj;
      }),
    );
  };

  return (
    <View>
      {/*===== line row start====  */}
      {/* <View style={{flexDirection: 'row', marginVertical: 12}}>
        <View style={styles.line} />
        <View style={styles.lineText}>
          <Text style={styles.text}>You Follows</Text>
        </View>

        <View style={styles.line} />
      </View> */}
      {/* =====line row end ==== */}
      <SwiperFlatList
        style={{marginVertical: 10}}
        autoplay
        autoplayDelay={5}
        autoplayLoop
        data={Category}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setSelect(item)}
              style={
                item === select
                  ? {
                      backgroundColor: 'gold',
                      marginHorizontal: 10,
                      borderRadius: 10,
                      height: 35,
                      width: 150,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                  : {
                      backgroundColor: '#202020',
                      marginHorizontal: 10,
                      borderRadius: 10,
                      height: 35,
                      width: 150,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
              }>
              <Text
                style={
                  item === select
                    ? [
                        styles.text,
                        {
                          paddingHorizontal: 20,
                          paddingVertical: 5,
                          color: 'black',
                          fontWeight: 'bold',
                        },
                      ]
                    : [
                        styles.text,
                        {
                          paddingHorizontal: 20,
                          paddingVertical: 5,
                        },
                      ]
                }>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}></SwiperFlatList>
      <View
        style={{
          backgroundColor: '#202020',
          margin: 10,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={[
            styles.text,
            {
              paddingVertical: 8,
              fontWeight: 'bold',
            },
          ]}>
          You Follows
        </Text>
      </View>

      {/* category type start  */}
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
        backgroundColor:'#F29E00',
        padding:5
      }}>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>Hollywood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>Bollywood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>Dhallywood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>Kollywood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>Hollywood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>Bollywood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>Dhallywood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>Kollywood</Text>
        </TouchableOpacity>
      </ScrollView> */}

      {/* category type end  */}

      {/* follow list start  */}
      <View style={styles.followMainrow}>
        {/* <View
          style={styles.followCard}>
          <View style={styles.followContents}>
            <Image
              style={styles.followImage}
              source={imagePath.SakibBalHasan}
            />
            <Text style={styles.followText}>
          SuperStar
            </Text>
            <Text style={[styles.text, {marginVertical: 8,fontSize:18}]}>
              Sakib Al Hasan
            </Text>
          
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followBtnText}>Unfollow </Text>
          </TouchableOpacity>
        </View> */}

        <>
          {/* here i used flat grid package if any problem in backend please use top commented code  */}
          <FlatGrid
            itemDimension={160}
            data={data}
            renderItem={({item}) => (
              <View>
                <View style={styles.followCard}>
                  <View style={styles.followContents}>
                    <Image style={styles.followImage} source={item.imgUrl} />
                    <Text style={styles.followText}>SuperStar</Text>
                    <Text
                      style={[styles.text, {marginVertical: 8, fontSize: 18}]}>
                      {item.name}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setUserData(!userData);
                      updateObjectInArray(item.id);
                    }}
                    style={
                      item.type === 'Follow'
                        ? styles.followButton
                        : styles.unfollowButton
                    }>
                    <Text style={styles.followBtnText}>
                      <Icon
                        name={
                          item.type === 'Follow'
                            ? 'plus-circle'
                            : 'check-circle'
                        }
                        size={18}
                      />{' '}
                      {item.type}{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </>
      </View>
      {/* follow list end  */}

      {/* line row start  */}
      {/* <View style={{flexDirection: 'row', marginVertical: 12}}>
        <View style={styles.line} />
        <View style={styles.lineText}>
          <Text style={styles.text}>Suggestion</Text>
        </View>

        <View style={styles.line} />
      </View> */}
      {/* line row end  */}

      <View
        style={{
          backgroundColor: '#202020',
          margin: 10,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={[
            styles.text,
            {
              paddingVertical: 8,
              fontWeight: 'bold',
            },
          ]}>
          Suggissions
        </Text>
      </View>

      <View style={styles.followMainrow}>
        <>
          {/* here i used flat grid package if any problerm in backend please use top commented code  */}
          <FlatGrid
            itemDimension={160}
            data={data2}
            renderItem={({item}) => (
              <View>
                <View style={styles.followCard}>
                  <View style={styles.followContents}>
                    <Image style={styles.followImage} source={item.imgUrl} />
                    <Text style={styles.followText}>SuperStar</Text>
                    <Text
                      style={[styles.text, {marginVertical: 8, fontSize: 18}]}>
                      {item.name}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setUserData2(!userData2);
                      updateObjectInArray2(item.id);
                    }}
                    style={
                      item.type === 'Follow'
                        ? styles.followButton
                        : styles.unfollowButton
                    }>
                    {/* <Text style={styles.followBtnText}>{item.type} </Text> */}
                    <Text style={styles.followBtnText}>
                      <Icon
                        name={
                          item.type === 'Follow'
                            ? 'plus-circle'
                            : 'check-circle'
                        }
                        size={18}
                      />{' '}
                      {item.type}{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </>
      </View>
    </View>
  );
};

export default MenuFollowers;
