import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Share, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { default as AntDesign, default as Icon } from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import imagePath from '../../../Constants/imagePath';
// import imagePath from '../../../Constants/imagePath';

import styles from './Styles';



const VideoSlider = ({ currentIndex, index, item }) => {
    const vedioRef = useRef(null)
    const [like, setLike] = useState(false)
    const [likeFlash, setLikeFlash] = useState(false)
    const windowHight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const [likeSpeed, setLikeSpeed] = useState(true);
    let halfWidth = (windowWidth / 2) - 20;


    const [Play, setPlay] = useState(false)
    const [videoLoad, setVideoLoad] = useState(false)

    useEffect(() => {
        // setPlay(false)
        PlayStatus()

    }, [])

    const PlayStatus = () => {
        if (currentIndex == index) {
            setPlay(false)
            // setVideoLoad(true)
        }
    }

    const [paidLike, setPaidLike] = useState(false);
    const [gifPath, setGifPath] = useState();

    const pressLike = (time, likeNumber = null) => {

        if (likeNumber !== null) {
            //paid like 
            if (likeNumber === 5) {
                setGifPath(imagePath.loveReact5)
                setPaidLike(true)
            }
            if (likeNumber === 10) {
                setGifPath(imagePath.loveReact10)
                setPaidLike(true)
            }
            if (likeNumber === 20) {
                setGifPath(imagePath.loveReact20)
                setPaidLike(true)
            }

            const gifInterval = setInterval(() => {
                setPaidLike(false)
                clearInterval(gifInterval);
            }, time);

        } else {
            //normal like 
            setLike(!like)
            setLikeFlash(true)
            const intervalId = setInterval(() => {
                setLikeFlash(false)
                clearInterval(intervalId);
            }, time);
        }

    }



    const onBuffer = buffer => {
        console.log('buffring', buffer);
    };
    const onError = error => {
        console.log('error', error);
    };
    const loadVideo = () => {
        setVideoLoad(true)

    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                title: 'Video Link',
                message: `${item.videoURl}`,
                url: `${item.videoURl}`
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };


    return (




        <View style={styles.VideoContainer}>


            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setPlay(!Play)}
                style={styles.TouchAbleViedo}>
                {Play ?
                    <></>
                    :
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: windowHight }}>

                        <Animatable.Image
                            animation="pulse"
                            iterationCount="infinite"
                            source={imagePath.logo}
                            style={{ height: 150, width: 150 }}
                        />
                    </View>

                }
                <Video source={{ uri: `${item.videoURl}` }}
                    ref={vedioRef}                                      // Store reference
                    onBuffer={onBuffer}
                    onError={onError}          // Callback when video cannot be loaded
                    resizeMode={windowWidth < 600 ? 'cover' : 'contain'}
                    onLoad={loadVideo}
                    onEnd={() => console.log('end')}
                    // controls
                    pictureInPicture
                    paused={currentIndex != index || Play ? true : false}
                    repeat={true}
                    style={{ height: windowHight, width: windowWidth, position: 'absolute' }}
                />
            </TouchableOpacity>

            {videoLoad ?
                <></>
                :
                <View style={{ alignItems: 'center', justifyContent: 'center', height: windowHight }}>

                    <Animatable.Image
                        animation="pulse"
                        iterationCount="infinite"
                        source={imagePath.logo}
                        style={{ height: 150, width: 150 }}
                    />
                </View>

            }
            {likeFlash ?
                <Animatable.View
                    animation="bounceIn"
                    iterationCount="infinite"
                    duration={1000}
                    // 
                    style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%' }} >

                    <Icon
                        name="heart"
                        size={200}
                        color='red'
                    />
                </Animatable.View>
                :
                <>
                </>
            }
            {paidLike &&

                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '100%' }} >

                    <Image source={gifPath} style={{ width: '100%', height: 400, position: 'absolute', bottom: 100 }} />
                </View>
            }

            {/* Play icon */}
            {Play ?
                <TouchableOpacity onPress={() => setPlay(!Play)} style={{ height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }} >

                    <Icon
                        name="caretright"
                        style={styles.PushImage}
                    />
                </TouchableOpacity>
                :
                <></>
            }


            <View style={styles.LeftSideBar}>
                {/* <Text style={{ color: '#FFFFFF' }}>Gift</Text> */}
                <TouchableOpacity style={{ height: 50, marginTop: 5 }} onPress={() => pressLike(2500, 5)}>
                    {/* <Image source={imagePath.GiftIcon1} height={50} width={50} /> */}
                    <Icon name='heart' size={30} color="red" />
                    <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>05</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50, marginTop: 15 }} onPress={() => pressLike(2500, 10)}>
                    {/* <Image source={imagePath.GiftIcon2} height={50} width={50} /> */}
                    <Icon name='heart' size={30} color="red" />
                    <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50, marginTop: 15 }} onPress={() => pressLike(2500, 20)}>
                    {/* <Image source={imagePath.GiftIcon3} height={50} width={50} /> */}
                    <Icon name='heart' size={30} color="red" />
                    <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>20</Text>
                </TouchableOpacity>




            </View>

            <View style={styles.RightSideBar}>
                <TouchableOpacity style={{ height: 50, marginTop: 10 }} onPress={() => pressLike(1000)}>
                    {like ?
                        <Icon name='heart' size={30} color="red" />
                        :
                        <AntDesign name='hearto' size={30} color="red" />
                    }
                    {/* <Text style={{ color: '#FFFFFF' }}>2.5 K</Text> */}
                </TouchableOpacity>
                <View style={{ height: 50, marginTop: 10 }}>
                    <AntDesign name='message1' size={30} color="#FFFFFF" />
                    {/* <Text style={{ color: '#FFFFFF' }}>2.5 K</Text> */}
                </View>
                <TouchableOpacity style={{ height: 50, marginTop: 10 }} onPress={onShare}>
                    <FontAwesome name='paper-plane' size={30} color="#1291f8" />
                    {/* <Text style={{ color: '#FFFFFF' }}>2.5 K</Text> */}
                </TouchableOpacity>




            </View>

            <View style={styles.CommentSection}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ borderColor: "#FFAD00", borderWidth: 2, borderRadius: 50, padding: 2 }}>

                        <Image
                            source={{ uri: `${item.proImage}` }}
                            style={{
                                height: 30,
                                width: 30,
                                borderRadius: 100
                            }}
                        />
                    </View>
                    <Text style={{ fontSize: 20, color: '#FFFFFF', marginTop: 5, marginLeft: 10 }}>{item.title}</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#FFFFFF' }}>ng established fact that a reader will be distracted by the readable content of a page when looking </Text>
            </View>

            <View
                style={styles.UserImage}
            >
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' }}
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 100
                    }}
                />
                <TextInput
                    placeholder='Write a message...'
                    placeholderTextColor="#9e9e9e"
                    style={styles.CommentInput}
                />
                <TouchableOpacity
                    style={styles.SentIcon}
                >
                    <Ionicons name='ios-send-sharp' size={25} color="#FFAD00" />
                </TouchableOpacity>


            </View>













        </View>


    )
}

export default VideoSlider

