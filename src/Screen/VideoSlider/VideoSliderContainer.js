import React, { useState } from 'react';
import { Dimensions, View,Text, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import VideoSlider from '../../Components/HOME/VideoSlider/VideoSlider';
import Icon from 'react-native-vector-icons/MaterialIcons';
const VideoSliderContainer = ({navigation}) => {
  const [videoData, setVideoData] = useState([
    {
      key: 1,
      title: 'Shirley Setia',
      illustration:
        'https://upload.wikimedia.org/wikipedia/commons/3/38/Tahsan_Rahman_Khan_%2801%29.jpg',
      proImage:
        'https://i0.wp.com/wikibioinfos.com/wp-content/uploads/2021/03/Shirley-Setia-1.jpeg?fit=720%2C487&ssl=1',
      videoURl:
        'https://backend.hellosuperstars.com/uploads/demoVideos/16586608133869.ShirleySetia_1.mp4',
    },

    {
      key: 2,
      title: 'Thasan',

      illustration:
        'https://i.scdn.co/image/ab6761610000e5ebf0a1d189da0f9be0977123fe',
      proImage:
        'https://yt3.ggpht.com/ytc/AKedOLRuUSHA2qxFia3XBHRuPxVCxXPxfOEeMMojVqPG=s900-c-k-c0x00ffffff-no-rj',
      videoURl: 'https://backend.hellosuperstars.com/uploads/demoVideos/16586616259843.thasan.mp4',
    },
    {
      key: 3,
      title: 'Keya Payel',

      illustration:
        'https://i.scdn.co/image/ab6761610000e5ebf0a1d189da0f9be0977123fe',
      proImage:
        'https://www.thedailybiography.com/wp-content/uploads/2020/09/Screenshot_21-min.jpg',
      videoURl:
        'https://backend.hellosuperstars.com/uploads/demoVideos/1658661264957.Keya%20Payel.mp4',
    },
    {
      key: 4,
      title: 'tanjil tish',

      illustration:
        'https://i.scdn.co/image/ab6761610000e5ebf0a1d189da0f9be0977123fe',
      proImage:
        'https://i.pinimg.com/originals/0a/d5/f0/0ad5f03bc326106499a4a014e8734e7d.jpg',
      videoURl:
        'https://backend.hellosuperstars.com/uploads/demoVideos/16586614306975.tanjitish.mp4',
    },

  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const windowHight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <>

    <View
      style={{
        height: windowHight,
      }}>
      <SwiperFlatList
        vertical={true}
        onChangeIndex={handleChangeIndexValue}
        // index={4}
        data={videoData}
        renderItem={({ item, index }) => (
          <VideoSlider item={item} index={index} currentIndex={currentIndex} />
        )}
        keyExtractor={(item, index) => index}
      />

      <TouchableOpacity style={{position:'absolute', left:10,top:10}} onPress={()=>navigation.goBack()}>
        <Text>
          <Icon name='arrow-back' size={25} color='#fff'/>
        </Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default VideoSliderContainer;
