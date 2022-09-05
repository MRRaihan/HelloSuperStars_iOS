import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import InfiniteScroll from 'react-native-infinite-scrolling';
// import PostCard from '../../../Components/Card/PostCard/PostCard';
import CardSkeleton from '../../../Components/Skeleton/CardSkeleton/CardSkeleton';
import { AuthContext } from '../../../Constants/context';
import imagePath from '../../../Constants/imagePath';
import StarPromoVedio from '../StarPromoVideo/StarPromoVedio';
import PostCard from '../../../Components/GLOBAL/Card/PostCard/PostCard';

const PostContainer = ({
  path = null,
  position = null,
  setFilterPost = null,
  setPostPage = null,
  postPage = null,
  type = null,
}) => {


  const Navigation = useNavigation();
  const { axiosConfig, authContext } = useContext(AuthContext);

  const [buffer, setBuffer] = useState(true);
  const [loadMore, setLoadMore] = useState(false);
  const [Refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {

    console.log('path', path)
    getAllPost();
    setBuffer(true);
    setPostPage(1);
  }, []);


  const getAllPost = async () => {
    setLoadMore(true);
    if (postPage != null) {
      setPostPage(postPage + 1);
    }

    let res = await axios
      .get(path, axiosConfig)

      .then(res => {
        setLoadMore(false);
        setBuffer(false);

        if (res.data.status === 200) {
          setBuffer(false);
          if (setFilterPost != null) {
            setFilterPost(res.data.posts);
          }

          setPosts([...posts, ...res.data.posts]);
        }
      })
      .catch(err => {
        // authContext.signOut();
        console.log(err);
        // alert('network problem')
      });
  };

  const renderData = ({ item, index }) => {
    return (
      <>
        {index === 0 ? (
          setFilterPost == null ? (
            <StarPromoVedio />
          ) : (
            <></>
          )
        ) : (
          <PostCard key={index} post={item} />
        )}
      </>
    );
  };

  return (
    <>
      {/* <View style={styles.CardRow}>
          <View style={styles.MainCard}>
            <TouchableOpacity style={styles.cardImg}>
              <Image
                style={styles.starCardImg}
                source={imagePath.srkProfileLogo}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Navigation.navigate(navigationStrings.STARPROFILE)}>
              <Text style={styles.cardText}>Shrukh khan</Text>
              <Text style={styles.time}>5.31pm 2nd july</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.CardContent}>
            <Text style={styles.cardContentText}>
              Join Shrukh vs Salman fan group!
            </Text>

            <View style={{ position: 'relative' }}>
              <Image style={styles.cardCoverImg} source={imagePath.bannerFan} />
              <View style={styles.mainMeetUpView}>
                <View style={{ paddingVertical: 2 }}>
                  <Text style={{ color: '#FFAD00', fontSize: 15 }}>Fangroup</Text>
                  <Text
                    style={{ color: '#FFAD00', fontWeight: 'bold', fontSize: 18 }}>
                    Explore fan group by joining now!
                  </Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <TouchableOpacity
                    onPress={() =>
                      Navigation.navigate(navigationStrings.FANGROUP)
                    }
                    style={styles.meetupBtn}>
                    <Text style={styles.meetupTxt}>Explore</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.cardInfo}>
              <View>
                <Text style={styles.infoText}>
                  <FontAwesome5 name={'heart'} />
                  240
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={styles.infoText}>16 Comments</Text>
                </View>
                <View>
                  <Text style={styles.infoText}>106 Share</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.7,
                margin: 10,
              }}
            />
            <View style={styles.cardButtons}>
              <TouchableOpacity style={styles.likeBtn}>
                <Text style={styles.btnText}>
                  {' '}
                  <Icon name="heart" color={'red'} />
                  Like
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeBtn}>
                <Text style={styles.btnText}>
                  {' '}
                  <FontAwesome5 name={'comment'} />
                  Comment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeBtn}>
                <Text style={styles.btnText}>
                  {' '}
                  <FontAwesome5 name={'share'} />
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}


      {buffer ? (
        <View>
          {[1, 2, 3, 4].map(index => (
            <CardSkeleton key={index} />
          ))}
        </View>
      ) : (
        <View style={{ marginBottom: 130 }}>
          <InfiniteScroll
            onScroll={() => console.log('jekhae')}
            renderData={renderData}
            data={posts}
            loadMore={getAllPost}
          />
          {loadMore && (
            <View
              style={{
                position: 'absolute',
                zIndex: 2,
                bottom: 70,
                left: '40%',
                backgroundColor: '#00000071',
                alignItems: 'center',
                borderRadius: 10,
                padding: 5,
              }}>
              <Image
                source={imagePath.loadingGif}
                style={{ width: 30, height: 15 }}
              />
              <Text
                style={{
                  paddingHorizontal: 5,
                  paddingBottom: 3,
                  fontSize: 12,
                  color: '#ececec',
                }}>
                Loading . . .
              </Text>
            </View>
          )}

          {/* <View style={styles.CardRow}>
        <View style={styles.MainCard}>
          <TouchableOpacity style={styles.cardImg}>
            <Image
              style={styles.starCardImg}
              source={imagePath.cardProfileIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Navigation.navigate(navigationStrings.STARPROFILE)}>
            <Text style={styles.cardText}>Shakib Al Hasan</Text>
            <Text style={styles.time}>5.31pm 2nd july</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CardContent}>
          <Text style={styles.cardContentText}>
            bowling practice with Shakib Al Hasan.
          </Text>

          <View style={{ position: 'relative' }}>
            <Image
              style={styles.cardCoverImg}
              source={imagePath.LearningBanner}
            />
            <View style={styles.mainMeetUpView}>
              <View style={{ paddingVertical: 2 }}>
                <Text style={{ color: '#FFAD00', fontSize: 15 }}>
                  Bowling Practice with
                </Text>
                <Text
                  style={{ color: '#FFAD00', fontWeight: 'bold', fontSize: 18 }}>
                  Shakib Al Hasan
                </Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={() =>
                    Navigation.navigate(navigationStrings.LEARNINGSESSION)
                  }
                  style={styles.meetupBtn}>
                  <Text style={styles.meetupTxt}>Register Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.cardInfo}>
            <View>
              <Text style={styles.infoText}>
                <FontAwesome5 name={'heart'} />
                240
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={styles.infoText}>16 Comments</Text>
              </View>
              <View>
                <Text style={styles.infoText}>106 Share</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.7,
              margin: 10,
            }}
          />
          <View style={styles.cardButtons}>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <Icon name="heart" color={'red'} />
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <FontAwesome5 name={'comment'} />
                Comment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <FontAwesome5 name={'share'} />
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}

          {/* .............Learning Session for offline end................... */}

          {/* {DATA.map(item => {
        return (
          <View key={item.key} style={styles.CardRow}>
            <View style={styles.MainCard}>
              <TouchableOpacity style={styles.cardImg}>
                <Image style={styles.starCardImg} source={item.imgCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text style={styles.time}>5.31pm 2nd july</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.CardContent}>
              <Text style={styles.cardContentText}>{item.content}</Text>

              <View>
                <Image
                  style={styles.cardCoverImg}
                  source={item.imgCardContent}
                />
              </View>

              <View style={styles.cardInfo}>
                <View>
                  <Text style={styles.infoText}>
                    <FontAwesome5 name={'heart'} />
                    240
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.infoText}>16 Comments</Text>
                  </View>
                  <View>
                    <Text style={styles.infoText}>106 Share</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.7,
                  margin: 10,
                }}
              />
              <View style={styles.cardButtons}>
                <TouchableOpacity style={styles.likeBtn}>
                  <Text style={styles.btnText}>
                    {' '}
                    <Icon name="heart" color={'red'} />
                    Like
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeBtn}>
                  <Text style={styles.btnText}>
                    {' '}
                    <FontAwesome5 name={'comment'} />
                    Comment
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeBtn}>
                  <Text style={styles.btnText}>
                    {' '}
                    <FontAwesome5 name={'share'} />
                    Share
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })} */}

          {/* .............MeetUp card for offline start................... */}

          {/* 
      <View style={styles.CardRow}>
        <View style={styles.MainCard}>
          <TouchableOpacity style={styles.cardImg}>
            <Image style={styles.starCardImg} source={imagePath.star8} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Navigation.navigate(navigationStrings.STARPROFILE)}>
            <Text style={styles.cardText}>Mizanur Rahman Azhari</Text>
            <Text style={styles.time}>5.31pm 2nd july</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CardContent}>
          <Text style={styles.cardContentText}>
            As-salamu alaykum Brothers. Take greetings!
          </Text>

          <View style={{ position: 'relative' }}>
            <Image
              style={styles.cardCoverImg}
              source={imagePath.meetUpBanner2}
            />
            <View style={styles.mainMeetUpView}>
              <View style={{ paddingVertical: 2 }}>
                <Text style={{ color: '#FFAD00', fontSize: 15 }}>
                  Meet Mizanur Rahman
                </Text>
                <Text
                  style={{ color: '#FFAD00', fontWeight: 'bold', fontSize: 18 }}>
                  At Friday night online
                </Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={() =>
                    Navigation.navigate(navigationStrings.MEETUP, {
                      type: 'online',
                    })
                  }
                  style={styles.meetupBtn}>
                  <Text style={styles.meetupTxt}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.cardInfo}>
            <View>
              <Text style={styles.infoText}>
                <FontAwesome5 name={'heart'} />
                240
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={styles.infoText}>16 Comments</Text>
              </View>
              <View>
                <Text style={styles.infoText}>106 Share</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.7,
              margin: 10,
            }}
          />
          <View style={styles.cardButtons}>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <Icon name="heart" color={'red'} />
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <FontAwesome5 name={'comment'} />
                Comment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <FontAwesome5 name={'share'} />
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}

          {/* .............MeetUp card for offline end................... */}

          {/* <FlatList data={DATA} renderItem={({item})=> {
      return (
      <View style={styles.CardRow}>
        <View style={styles.MainCard}>
          <TouchableOpacity style={styles.cardImg}>
            <Image style={styles.starCardImg} source={item.imgCardIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.time}>5.31pm 2nd july</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CardContent}>
          <Text style={styles.cardContentText}>{item.content}</Text>

          <View>
            <Image style={styles.cardCoverImg} source={item.imgCardContent} />
          </View>

          <View style={styles.cardInfo}>
            <View>
              <Text style={styles.infoText}>
                <FontAwesome5 name={'heart'} />
                240
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.infoText}>16 Comments</Text>
              </View>
              <View>
                <Text style={styles.infoText}>106 Share</Text>
              </View>
            </View>
          </View>
          <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.7,
                    margin: 10,
                  }} />
          <View style={styles.cardButtons}>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <Icon name="heart" color={'red'} />
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <FontAwesome5 name={'comment'} />
                Comment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <FontAwesome5 name={'share'} />
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      );
      }}
      /> */}
        </View>
      )}
    </>
  );
};
export default PostContainer;
