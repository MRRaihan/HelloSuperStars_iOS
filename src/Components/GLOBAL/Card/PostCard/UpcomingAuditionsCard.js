import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import imagePath from '../../../../Constants/imagePath';
import VideoPlayer from 'react-native-video-player'
import {
View,
Text,
Image,
TouchableOpacity,
Button,
ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import navigationStrings from '../../../../Constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';

export default function UpcomingAuditionsCard(props) {
const Navigation = useNavigation();
return (
<View>

    <View style={styles.CardRow}>

        <View style={styles.CardContent}>

            <View style={{position: 'relative',}}>

                <ImageBackground source={imagePath.BannerAu} style={styles.BannerCardImg}>
                    <Text style={styles.TextBanner}>Audition Title</Text>
                </ImageBackground>

                <Image style={styles.cardCoverImg} source={imagePath.meetUpBanner2} />

                <View style={styles.BannerCs}>

                    <View>
                        <Text style={styles.BannerCsText}>With :</Text>
                    </View>

                    <View style={styles.SText}>
                        <Image style={styles.starCardImg} source={imagePath.cardProfileIcon} />
                    </View>

                    <View>
                        <Image style={styles.starCardImgA} source={imagePath.cardProfileIcon} />
                    </View>

                    <View style={styles.SText}>
                        <Image style={styles.starCardImg} source={imagePath.cardProfileIcon} />
                    </View>

                </View>

                <View style={styles.mainMeetUpView}>
                    <View style={{paddingVertical: 2}}>

                        <Text
                            style={{color: 'white', fontWeight: 'bold', fontSize: 18,paddingHorizontal:3,paddingTop:2}}>
                            FROM JUNE 25 - july 30
                        </Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=>Navigation.navigate(navigationStrings.MEETUP,{type:'online'})}
                            style={styles.meetupBtn}>
                            <Text style={styles.meetupTxt}>Registration</Text>
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

    <View style={styles.CardRow}>

        <View style={styles.CardContent}>

            <View style={{position: 'relative',}}>
                <ImageBackground source={imagePath.BannerAu} style={styles.BannerCardImg}>
                    <Text style={styles.TextBanner}>Audition Title</Text>
                </ImageBackground>
                <Image style={styles.cardCoverImg} source={imagePath.meetUpBanner2} />
                {/*
                <VideoPlayer video={{ uri: 'http:///backend.hellosuperstars.com/assets/video/demoVedio1.mp4' }}
                    videoWidth={100} videoHeight={80} autoplay={true} pauseOnPress hideControlsOnStart
                    resizeMode='contain' /> */}
                <View style={styles.BannerCse}>
                    <View style={{paddingVertical: 2}}>

                        <Text
                            style={{color: 'white', fontWeight: 'bold', fontSize: 18,paddingHorizontal:3,paddingTop:2}}>
                            FROM JUNE 25 - july 30
                        </Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=>Navigation.navigate(navigationStrings.MEETUP,{type:'online'})}
                            style={styles.meetupBtn}>
                            <Text style={styles.meetupTxt}>Registration</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <View style={styles.BannerCse}>

                <View>
                    <Text style={styles.BannerCseText}>With :</Text>
                </View>

                <View style={styles.SText}>
                    <Image style={styles.starCardImg} source={imagePath.cardProfileIcon} />
                </View>

                <View>
                    <Image style={styles.starCardImgA} source={imagePath.cardProfileIcon} />
                </View>

                <View style={styles.SText}>
                    <Image style={styles.starCardImg} source={imagePath.cardProfileIcon} />
                </View>

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

</View>
);
}