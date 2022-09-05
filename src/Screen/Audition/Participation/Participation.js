import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComp from '../../../Components/HeaderComp';
import RoundTopBanner from '../../Audition/Round1/RoundTopBanner';
import imagePath from '../../../Constants/imagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import VideoUploadModal from '../../../Components/MODAL/VideoUploadModal';
import AuditionTimer from '../../../Components/AUDITION/AuditionTimer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Participation = ({route}) => {
  const {roundName} = route.params;
  const navigation = useNavigation();
  const [pick, setPick] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  const options = {
    title: 'Video Picker',
    // mediaType: 'video',
    mediaType: 'image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const openPicker = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        console.log(source);
        setPick(source);

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  return (
    <View style={styles.container}>
      <HeaderComp />
      <ScrollView>
        <RoundTopBanner
          title={`AUDITION ${roundName} ROUND ENDING SOON`}
          RoundName={roundName}
        />
        <View
          style={{
            backgroundColor: '#272727',
            borderRadius: 10,
            marginTop: 10,
            position: 'relative',
          }}>
          <View>
            <Text
              style={[
                styles.textColor,
                {textAlign: 'center', paddingVertical: 10, fontSize: 18},
              ]}>
              Video Uploaded Details
            </Text>
          </View>
          <View style={{borderWidth: 0.5, borderBottomColor: 'black'}} />
          <View style={styles.uploadStyle}>
            <View>
              {/*========== condition ========== */}
              {roundName === 6||roundName === 7||roundName === 8 ? (
                <Text style={styles.textColor}>Live Video Date</Text>
              ) : (
                <Text style={styles.textColor}>Video Submission Date</Text>
              )}
              {/*========== condition ========== */}
              {roundName === 6||roundName === 7||roundName === 8? (
                <Text style={styles.textColor}>Live Video Time</Text>
              ) : (
                <Text style={styles.textColor}>Video Submission Time</Text>
              )}
              {/*========== condition ========== */}
              {roundName === 6||roundName === 7||roundName === 8? null : (
                <Text style={styles.textColor}>Fee</Text>
              )}
            </View>
            <View>
              <Text style={{color: '#ddd'}}>15-062022</Text>
              <Text style={{color: '#ddd'}}>10:45 PM</Text>
              {/*========== condition ========== */}
              {roundName === 6||roundName === 7||roundName === 8 ? null : (
                <Text style={{color: '#ddd'}}>250 BDT</Text>
              )}
            </View>
          </View>

          {/*========== condition ========== */}
          {roundName === 6||roundName === 7||roundName === 8 ? (
            <>
              <AuditionTimer />

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 14,
                }}>
                <View
                  style={{
                    borderColor: '#FFAD00',
                    borderWidth: 1,
                    flexDirection: 'row',
                    paddingVertical: 5,
                    justifyContent: 'center',
                    width: '30%',
                    borderRadius: 5,
                  }}>
                  <MaterialCommunityIcons
                    name="video"
                    color={'#FFAD00'}
                    size={22}
                  />
                  <Text style={{color: '#FFAD00', marginHorizontal: 5}}>
                    Join Now
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          ) : null}
        </View>

        {/*============ round condition here =========== */}
        {roundName === 6||roundName === 7||roundName === 8 ? null : (



          <>
          <View
            style={{
              backgroundColor: '#272727',
              marginVertical: 10,
              borderRadius: 10,
            }}>
            <View style={styles.uploadVideoStyle}>
              <View style={styles.pickVideo}>
                <TouchableOpacity onPress={openPicker} style={styles.uploadBtn}>
                  <View style={styles.browse}>
                    <AntDesign name="upload" color="#FFAD00" size={20} />
                    <Text style={{color: '#FFAD00'}}>Browse</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.pickVideo}>
                <TouchableOpacity style={styles.uploadBtn}>
                  <View style={styles.browse}>
                    <AntDesign name="upload" color="#FFAD00" size={20} />
                    <Text style={{color: '#FFAD00'}}>Browse</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.pickVideo}>
                <TouchableOpacity style={styles.uploadBtn}>
                  <View style={styles.browse}>
                    <AntDesign name="upload" color="#FFAD00" size={20} />
                    <Text style={{color: '#FFAD00'}}>Browse</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {pick ? (
              <View style={styles.uploadVideoStyle}>
                <View style={styles.pickVideo}>
                  <Image style={{height: '100%'}} source={pick} />
                </View>
                <View style={styles.pickVideo}>
                  <Image style={{height: '100%'}} source={pick} />
                </View>
                <View style={styles.pickVideo}>
                  <Image style={{height: '100%'}} source={pick} />
                </View>
                <View style={styles.pickVideo}>
                  <Image style={{height: '100%'}} source={pick} />
                </View>
              </View>
            ) : null}

            <View>
              <TouchableOpacity style={styles.btnStyle}>
                <LinearGradient
                  colors={['#343434', '#343434']}
                  style={styles.uploadMainBtn}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 10,
                    }}>
                    <AntDesign name="cloudupload" size={25} color={'#FFAD00'} />
                  </View>
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.uploadTxt}>Upload Video</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </TouchableOpacity>




            </View>
          </View>

</>



        )}

        <VideoUploadModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </View>
  );
};

export default Participation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  btnStyle: {
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#FFAD00',
    borderRadius: 10,
  },
  uploadTxt: {
    fontSize: 13,
    fontWeight: 'bold',
    width: 80,
    color: '#FFAD00',
  },
  uploadMainBtn: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textColor: {
    color: '#E6E6E6',
  },
  browse: {
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadBtn: {
    height: 100,
    borderColor: '#FFAD00',
    borderWidth: 2,
    borderStyle: 'dotted',
    borderRadius: 10,
  },
  uploadVideoStyle: {
    flexDirection: 'row',
  },
  uploadStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingTop: 8,
    paddingBottom: 8,
  },
  pickVideo: {
    height: 100,
    flex: 1,
    margin: 5,
  },
});
