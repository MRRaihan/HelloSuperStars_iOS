import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import EmojiSelector from 'react-native-emoji-selector';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../Constants/context';
import imagePath from '../../Constants/imagePath';
import AppUrl from '../../RestApi/AppUrl';
import moment from 'moment';
const data = [1, 2, 3, 4, 5, 6];
const MessageStar = ({ route }) => {

  const { room_id, group_id } = route.params;
  const { useInfo, socketData } = useContext(AuthContext);
  const navigation = useNavigation()
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [store, setStore] = React.useState(null);
  const [sendType, setSendType] = React.useState(false);
  const [pick, setPick] = React.useState();

  const scrollViewRef = useRef();

  const starNotify = [
    {
      key: 1,
      img: imagePath.StarZ,
      name: 'Mizanur Rahman Raihan',
      title: 'Hi man',
      time: '2 min ago',
    },
    {
      key: 2,
      img: imagePath.notify2,
      name: 'Ayman Siddique',
      title: 'Hlo',
      time: '4 min ago',
    },
  ];
  const options = {
    title: 'Pick an image',

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
        const source = { uri: response.uri };
        setPick(source);


        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };



  const [text, setText] = useState()
  const handelType = async (e) => {
    console.log(e)
    let eventdata = {
      'room_id': room_id,
      'status': true
    }
    await socketData.emit('type_event_send', eventdata)



    setText(e)
    if (e.length > 0) {
      setSendType(true);
    } else {
      setSendType(false);
    }

  }



  const [msgData, setMsgData] = useState([])
  const handelSendMessage = async () => {
    let time = new Date(Date.now()).getHours() +
      ":" +
      new Date(Date.now()).getMinutes()
    let messageData = {
      'sender_id': useInfo.id,
      'room_id': room_id,
      'sender_name': useInfo.first_name,
      'sender_image': useInfo.image,
      'group_id': group_id,
      'position': "",
      'text': text,
      'time': time
    }


    let eventdata = {
      'room_id': room_id,
      'status': false
    }
    await socketData.emit('type_event_send', eventdata)


    await socketData.emit('send_message', messageData)
    setMsgData((prv) => {
      return [...prv, messageData]
    })
    setText("")
  }



  const [onType, setOnType] = useState(false)
  useEffect(() => {
    socketData.on('recive_message', (data) => {
      setMsgData((prv) => {
        return [...prv, data]
      })

    })

    socketData.on('type_event_recive', (data) => {
      setOnType(data.status)
      console.log(data.status)
    })


  }, [socketData])


  useEffect(() => {
    socketData.emit('join_room', room_id)
  }, [])

  return (
    <>

      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View
          style={{
            backgroundColor: 'black',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={imagePath.logo} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 30,
              width: 30,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>
              <MaterialCommunityIcons
                name="android-messages"
                color={'#FFAD00'}
                size={20}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#343434', marginVertical: 3, padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '15%' }} onPress={() => navigation.goBack()}>
              <View>
                <Image
                  style={{ height: 40, width: 40, borderRadius: 50 }}
                  source={{ uri: AppUrl.MediaBaseUrl + useInfo.image }}
                />
              </View>
            </View>
            <TouchableOpacity style={{ width: '70%', justifyContent: 'center' }}>
              <Text style={styles.Name}>{useInfo.first_name + " " + useInfo.last_name}</Text>
              {/* <TextInput  */}
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }}>
              <Text style={styles.Name}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  color={'white'}
                  size={30}
                />
              </Text>
              {/* <TextInput  */}
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >


          <View style={{ flex: 1, paddingBottom: 60 }}>
            {showEmoji && <EmojiSelector onEmojiSelected={emoji => {
              setStore(emoji)
              setShowEmoji(false)
            }} />}

            {msgData && msgData.map((item, index) =>


              <View
                key={index}
                style={item.sender_id === useInfo.id ? styles.remoteChatStyle : styles.ownChatStyle
                }>
                <Image
                  source={{ uri: AppUrl.MediaBaseUrl + item?.sender_image }}
                  style={styles.UserImg}
                />
                <View
                  style={item.sender_id === useInfo.id ? styles.ownChatBody : styles.remoteChatBody
                  }>
                  <Text style={{ color: 'black', marginLeft: 5, padding: 5 }}>
                    {item.text}
                  </Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ color: 'gray' }}>{item?.time}</Text>
                </View>
              </View>


            )}





            {onType &&
              <View

                style={styles.ownChatStyle
                }>
                <View style={styles.UserImgTyping}>
                  <Image
                    source={imagePath.loadingGif}
                    style={{ height: 10, width: 20 }}
                  />
                </View>
                <View
                  style={[styles.remoteChatBody, { backgroundColor: '#ffff004b' }]
                  }>
                  <Text style={{ color: 'black', marginLeft: 5, padding: 5, color: 'white' }}>
                    Some one typing...
                  </Text>
                </View>

              </View>
            }


          </View>
        </ScrollView>

        <View style={styles.bottomContainer}>

          <View style={{ justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setShowEmoji(true)}>
                <Icon name="smile-o" color={'gray'} size={28} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: '75%',
              position: 'relative',
            }}>
            <TextInput

              onChangeText={e => handelType(e)}
              value={text}
              placeholder="Type your message here..."
              placeholderTextColor={'gray'}
              style={styles.inputTxt}
            />

          </View>

          <View style={{ justifyContent: 'center', position: 'absolute', right: '18%', top: '25%' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity >
                <Icon name="camera" color={'gray'} size={20} />
              </TouchableOpacity>
            </View>
          </View>


          {sendType ? (
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity style={styles.sendBtn} onPress={handelSendMessage}>
                <Icon name="send" color={'white'} size={15} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity style={styles.sendBtn}>
                <Icon name="microphone" color={'white'} size={15} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Name: {
    color: 'white',
    fontSize: 20,
  },

  BorderA: {
    flex: 2,
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',
  },
  UnderLine: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  starNameT: {
    fontSize: 15,
    color: 'gray',
    paddingHorizontal: 10,
  },
  starName: {
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 10,
  },

  starCardImgS: {
    borderRadius: 100,
  },

  StarPro: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    //    height:200,
  },

  UserImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gold',

  },
  UserImgTyping: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 0.3,
    borderColor: 'gold',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'

  },

  StarImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'gold',
  },

  inputTxt: {
    paddingLeft: 10,
    backgroundColor: '#2C323A',
    height: 39,
    borderRadius: 20,
    color: 'white',
  },
  sendBtn: {
    backgroundColor: '#1DAECA',
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    borderTopColor: 'gray',
    borderWidth: 1,
  },
  ownChatStyle: {
    flexDirection: 'row',
    marginVertical: 8,
    // justifyContent: 'flex-end',
    marginLeft: 10
  },
  remoteChatStyle: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  ownChatBody: {
    backgroundColor: '#E4E3E9',
    justifyContent: 'center',
    marginHorizontal: 8,
    width: '50%',
    borderRadius: 20,
  },
  remoteChatBody: {
    backgroundColor: '#0E82FD',
    justifyContent: 'center',
    marginHorizontal: 8,
    width: '50%',
    borderRadius: 20,
  }
});

export default MessageStar;
