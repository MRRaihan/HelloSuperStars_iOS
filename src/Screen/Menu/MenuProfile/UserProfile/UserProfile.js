import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text, ToastAndroid, TouchableOpacity,
  View
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MatarialIcon from 'react-native-vector-icons/MaterialIcons';
import HeaderComp from '../../../../Components/HeaderComp';
import CardSkeleton from '../../../../Components/Skeleton/CardSkeleton/CardSkeleton';
import { AuthContext } from '../../../../Constants/context.js';
import imagePath from '../../../../Constants/imagePath.js';
import AppUrl from '../../../../RestApi/AppUrl.js';
import EditProfileModal from './profileComp/EditProfileModal/EditProfileModal';
import ProfilePhotos from './profileComp/ProfilePhotos/ProfilePhotos.js';
import ProfilePost from './profileComp/ProfilePost/ProfilePost.js';
import ProfileVideos from './profileComp/ProfileVideos/ProfileVideos.js';
import styles from './Styles.js';


const windowWidth = Dimensions.get('window').width;

const UserProfile = () => {
  const Navigation = useNavigation();
  const [buffer, setBuffer] = useState(true);
  const { useInfo, authContext, axiosConfig } = useContext(AuthContext);
  const [data, setData] = React.useState('posts');

  const [userActivites, setUserActivites] = useState([]);

  const [editProfile, setEditProfile] = useState(false);
  const [imageBuffer, setImageBuffer] = useState(false);
  const [coverBuffer, setCoverBuffer] = useState(false);

  const [profileUpload, setProfileUpload] = useState({
    img: {
      uri: "",
      type: "",
      name: "",
      data: "",
      oldImage: "",
      for: ""
    }
  })
  const [coverUpload, setCoverUpload] = useState({
    img: {
      uri: "",
      type: "",
      name: "",
      data: "",
      oldImage: "",
      for: ""
    }
  })





  useEffect(() => {
    // getUserActivityData();

  }, []);

  let getUserActivityData = () => {
    setBuffer(true);
    axios
      .get(AppUrl.UserActivityData, axiosConfig)
      .then(res => {
        if (res.data.status === 200) {
          // console.log('activities data', res.data.userActivites);
          setUserActivites(res.data?.userActivites);
          setBuffer(false);
        }
      })
      .catch(err => {
        setBuffer(false);
        console.log(err);
      });
  };
  /**
   * state clear
   */
  const clearPhoto = () => {
    setProfileUpload({
      img: {
        uri: "",
        type: "",
        name: "",
        data: "",
        oldImage: "",
        for: ""
      }
    })
  }

  const clearCover = () => {
    setCoverUpload({
      img: {
        uri: "",
        type: "",
        name: "",
        data: "",
        oldImage: "",
        for: ""
      }
    })
  }


  /**
   * uplaod profile photo 
   */
  const uploadProfilePhoto = () => {

    let options = {
      storageOptions: {
        path: 'images',
        mediaType: "image",
      },
      includeBase64: true
    };
    launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {

        setProfileUpload({
          img: {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
            data: response.assets[0].base64,
            oldImage: useInfo.image,
            for: "profile"
          },
        })
      }
    });
  }




  /**
   * upload cover photo
   */
  const uploadCoverPhoto = () => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: "image",
      },
      includeBase64: true
    };
    launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {

        setCoverUpload({
          img: {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
            data: response.assets[0].base64,
            oldImage: useInfo.image,
            for: "cover"
          },
        })

      }
    });
  }

  /**
   * uplaod done 
   */
  const UploadDone = (type) => {
    console.log('upload start')
    let data
    if (type === "profile") {
      setImageBuffer(true)
      data = profileUpload
    } else {
      setCoverBuffer(true)
      data = coverUpload
    }
    axios
      .post(AppUrl.UserMediaUplad, data, axiosConfig)
      .then(res => {

        if (res.data.status == 200) {
          authContext.userInfoUpate(res.data.userInfo)
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          console.log('uplad status', res.data)
          if (type === "profile") {
            clearPhoto()
            setImageBuffer(false)
          } else {
            clearCover()
            setCoverBuffer(false)
          }

        }
      })
      .catch(err => {
        setImageBuffer(false)
        setCoverBuffer(false)
        console.log(err);
      });
  }


  return (
    <>
      <View style={styles.container}>
        <HeaderComp />
        <View style={styles.topView}>
          <TouchableOpacity
            onPress={() => Navigation.goBack()}
            style={styles.topArrow}>
            <Icon name="arrow-left" size={16} color="white" />
          </TouchableOpacity>

          <View style={styles.topName}>
            <Text style={styles.Text}>
              {' '}
              {useInfo?.first_name} {useInfo?.last_name}
            </Text>
          </View>
        </View>

        <ScrollView>
          {/* cover photo work start here */}
          <View style={styles.container2}>
            <Image style={styles.image}
              source={coverUpload.img.uri != "" ?
                { uri: coverUpload.img.uri } : useInfo.cover_photo == null
                  ? imagePath.coverNoImgae
                  : {
                    uri: `${AppUrl.MediaBaseUrl + useInfo.cover_photo}`,
                  }
              }
            />
            {coverBuffer &&
              <View style={{ position: 'absolute', right: 20, top: 10, backgroundColor: '#00000091', borderRadius: 50, padding: 5 }}>
                <Image source={imagePath.loadingBuffering} style={{ height: 30, width: 30 }} />
              </View>
            }
            <View style={styles.cameraIcon}>
              <TouchableOpacity onPress={uploadCoverPhoto}>
                <Icon name="camera" size={16} color="white" />
              </TouchableOpacity>
              {coverUpload.img.uri != "" &&
                <TouchableOpacity style={{ marginLeft: 25 }} onPress={coverBuffer ? () => { } : () => UploadDone("cover")}>
                  <Icon name="check" size={16} color="white" />
                </TouchableOpacity>
              }
            </View>


            {/* profile photo work start here */}
            <View
              style={
                windowWidth > 500
                  ? styles.profileViewTab
                  : styles.profileView
              }>
              <Image
                source={profileUpload.img.uri != "" ? { uri: profileUpload.img.uri } : { uri: `${AppUrl.MediaBaseUrl + useInfo?.image}` }}
                style={styles.ProfileImg}
              />
              {imageBuffer &&

                <View style={{ position: 'absolute', right: 40, backgroundColor: '#00000091', borderRadius: 50, padding: 5 }}>

                  <Image source={imagePath.loadingBuffering} style={{ height: 30, width: 30, }} />
                </View>

              }


              <View style={styles.cameraIcon2}>
                <TouchableOpacity onPress={uploadProfilePhoto}>
                  <Icon name="camera" size={18} color="white" />
                </TouchableOpacity>
                {profileUpload.img.uri != "" &&
                  <TouchableOpacity style={{ marginLeft: 25 }} onPress={imageBuffer ? () => { } : () => UploadDone("profile")}>
                    <Icon name="check" size={18} color="white" />
                  </TouchableOpacity>
                }
              </View>

            </View>

            {/* profile photo work start here */}
          </View>

          {/* cover photo work end here */}

          {/* ====name text section start ===  */}
          <View style={styles.nameView}>
            <View>
              <View style={styles.userContainer}>
                <Text style={styles.TextView1}>
                  {' '}
                  {useInfo?.first_name} {useInfo?.last_name}
                </Text>
                <TouchableOpacity onPress={() => setEditProfile(true)}>
                  <Text style={styles.editTxt}>Edit</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.TextView2}>
                @user73wjhhd
              </Text>
            </View>
          </View>
          {/* ====name text section end ===  */}

          {/* =======working information sections start  =========*/}

          <View
            style={{
              backgroundColor: '#343434',
              margin: 8,
              borderRadius: 8,
            }}>
            {/* <View style={styles.infoView}>
                  <View style={styles.infoChild}>
                    <View style={{ marginRight: 10 }}>
                      <MatarialIcon
                        name="work-outline"
                        size={20}
                        color="white"
                      />
                    </View>
                    <View style={styles.infoChild}>
                      <Text style={{ color: 'white' }}>
                        Chairman at
                      </Text>
                      <Text style={styles.infoTextmain}>Kamrul Group</Text>
                    </View>
                  </View>
                </View> */}

            {useInfo?.user_info?.occupation &&
              <View style={styles.infoView}>
                <View style={styles.infoChild}>
                  <>
                    <View style={{ marginRight: 10 }}>
                      <MatarialIcon
                        name="work-outline"
                        size={20}
                        color="white"
                      />
                    </View>
                    <View style={styles.infoChild}>
                      <Text style={{ color: 'white' }}>
                        Occupation
                      </Text>
                      <Text style={styles.infoTextmain}>{useInfo?.user_info?.occupation}</Text>
                    </View>
                  </>
                </View>
              </View>
            }

            {useInfo?.user_info?.edu_level &&
              <View style={styles.infoView}>
                <View style={styles.infoChild}>

                  <View style={{ marginRight: 10 }}>
                    <Icon name="graduation-cap" size={16} color="white" />
                  </View>

                  <View style={styles.infoChild}>
                    <Text style={{ color: 'white' }}>Education</Text>
                    <Text style={styles.infoTextmain}>
                      {useInfo?.user_info?.edu_level}
                    </Text>
                  </View>

                </View>
              </View>
            }
            {useInfo?.user_info?.gender &&
              <View style={styles.infoView}>
                <View style={styles.infoChild}>


                  <View style={{ marginRight: 10 }}>
                    <Icon2 name="group" size={16} color="white" />
                  </View>
                  <View style={styles.infoChild}>
                    <Text style={{ color: 'white' }}>Gender</Text>
                    <Text style={styles.infoTextmain}>{useInfo.user_info.gender}</Text>
                  </View>

                </View>
              </View>
            }

            {/* <View style={styles.infoView}>
                  <View style={styles.infoChild}>
                    <View style={{ marginRight: 10 }}>
                      <Icon2 name="heart" size={16} color="white" />
                    </View>
                    <View style={styles.infoChild}>
                      <Text style={{ color: 'white' }}>Matarial Status</Text>
                      <Text style={styles.infoTextmain}>Married</Text>
                    </View>
                  </View>
                </View> */}

            <View style={styles.infoView}>
              <View style={styles.infoChild}>
                <View style={{ marginRight: 10 }}>
                  <Icon name="city" size={16} color="white" />
                </View>
                <View style={styles.infoChild}>
                  <Text style={{ color: 'white' }}>Lives in</Text>
                  <Text style={styles.infoTextmain}>{useInfo?.user_info?.country}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* =======working information sections end  =========*/}

          {/*=========== nested route start========  */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 8,
              marginBottom: 30
            }}>
            <TouchableOpacity
              style={styles.bgNav}
              onPress={() => setData('posts')}>
              <Text
                style={
                  data === 'posts' ? { color: 'gold' } : { color: 'white' }
                }>
                All Post
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgNav}
              onPress={() => setData('photos')}>
              <Text
                style={
                  data === 'photos' ? { color: 'gold' } : { color: 'white' }
                }>
                Photos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bgNav}
              onPress={() => setData('videos')}>
              <Text
                style={
                  data === 'videos' ? { color: 'gold' } : { color: 'white' }
                }>
                Videos
              </Text>
            </TouchableOpacity>
          </View>
          {/*=========== nested route end========  */}

          {/* =========routed items start========  */}

          {buffer && <View>
            {[1, 2, 3, 4].map((index) => <CardSkeleton key={index} />)}
          </View>}
          {data === 'posts' ? (
            <>
              <ProfilePost userActivites={userActivites} />
            </>
          ) : data === 'photos' ? (
            <ProfilePhotos userActivites={userActivites} />
          ) : data === 'videos' ? (
            <ProfileVideos userActivites={userActivites} />
          ) : null}

          {/* =========routed items end========  */}
        </ScrollView>

      </View>



      {editProfile && (
        <EditProfileModal
          editProfile={editProfile}
          setEditProfile={setEditProfile}
        />
      )}
    </>
  );
};

export default UserProfile;
