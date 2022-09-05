import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {LinearTextGradient} from 'react-native-text-gradient';
import VideoPlayer from 'react-native-video-player';

function Video({ title, image }) {
  return (
    <View style={styles.topCard}>
      {/* <LinearTextGradient
        style={styles.fonts}
        locations={[0, 1]}
        colors={['#ffaa00', '#fcfab6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}> */}
      <Text style={styles.fonts}>{title}</Text>
      {/* </LinearTextGradient> */}
      {/* <UnderlineImage /> */}
      <View
        style={{ borderWidth: 0.3, borderColor: 'black', marginVertical: 10 }}
      />
      {/* <View style={styles.bannerRow}>
        <Image
          style={styles.imgRow}
          source={{
            uri: image,
          }}
        />
        <Image style={styles.imgRow2} source={imagePath.meetupvideoIcon} />
      </View> */}

      <View
        style={{ height: 180, backgroundColor: 'lightblue', marginBottom: 18 }}>
        <VideoPlayer
          video={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          resizeMode={'cover'}
          videoWidth={1200}
          videoHeight={600}
          thumbnail={{
            uri: 'https://www.newagebd.com/files/records/news/202103/132871_199.jpg',
          }}
        />
      </View>
    </View>
  );
}

export default Video;

const styles = StyleSheet.create({
  topCard: {
    backgroundColor: '#282828',
    margin: 8,
    borderRadius: 5,
  },
  fonts: {
    // color: '#ffaa00',
    textAlign: 'center',
    marginTop: 10,
    // fontSize: 18,
  },
  bannerRow: {
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 15,
  },
  imgRow: {
    marginVertical: 2,
    width: '90%',
    height: 180,
  },
  imgRow2: {
    marginVertical: 2,
    position: 'absolute',
    top: '45%',
    left: '50%',
  },
});
