import moment from 'moment';
import React, {useContext} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ApprovedImg from '../../Assets/Images/approved.png';
import HeaderComp from '../../Components/HeaderComp';
import {AuthContext} from '../../Constants/context';
import imagePath from '../../Constants/imagePath';
import navigationStrings from '../../Constants/navigationStrings';
import styles from './styles';
const Notification = ({navigation}) => {
  const {notification} = useContext(AuthContext);
  const starNotify = [
    {
      key: 1,
      img: imagePath.notify1,
      name: 'Mizanur Rahman Azhari',
      title: 'Created new audiition on reaction',
      time: '2 min ago',
    },
    {
      key: 2,
      img: imagePath.notify2,
      name: 'Ayman Siddique',
      title: 'Updated new Video',
      time: '4 min ago',
    },
    {
      key: 3,
      img: imagePath.notify3,
      name: 'Zafar Iqbal',
      title: 'Created new audiition on reaction',
      time: '12 min ago',
    },
    {
      key: 4,
      img: imagePath.notify4,
      name: 'Salman Taj',
      title: 'Uploaded new post',
      time: '7 min ago',
    },
    {
      key: 5,
      img: imagePath.notify5,
      name: 'Tamim Iqbal',
      title: 'Coming to live at 8.00 pm tonight',
      time: '15 min ago',
    },
  ];

  const greetingsDetailsForm = (
    notification_id,
    view_status,
    event_type = null,
    event_id = null,
  ) => {
    // console.log('notification_id----------', notification_id)
    // console.log('view_status----------', view_status)
    // console.log('event_type----------', event_type)
    // console.log('event_id----------', event_id)
    if (Number(view_status) === 0) {
      if (event_type === 'Greetings' && event_id != null) {
        navigation.navigate(navigationStrings.GREETINGREGISTRATION, {
          notification_id: notification_id,
          greeting_id: event_id,
        });
      } else {
      }
    } else {
      navigation.navigate('MenuStackScreen');
    }
  };
  //console.log('notification------------', notification)
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/*.............. custom header start .............. */}
        {/* <HeaderComp text="Home" /> */}
        <HeaderComp text="Notification" />
        {/* ..........custom header end....................  */}

        {starNotify &&
          starNotify?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ChatWithStar')}>
              <Animatable.View animation={'slideInUp'} style={styles.row}>
                <View style={styles.content}>
                  <View style={styles.ContentItems}>
                    <View style={styles.ContentItemBar}></View>
                    <View style={styles.imgBorder}>
                      <Image style={styles.starCardImg} source={item.img} />
                    </View>

                    <View style={styles.ContentItems2}>
                      <Text style={styles.contentText}>{item.name}</Text>

                      <Text style={styles.contentText2}>{item.title}</Text>
                    </View>
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={styles.contentText2}>{item.time}</Text>
                  </View>
                </View>
              </Animatable.View>
            </TouchableOpacity>
          ))}
        {notification?.map((data, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              greetingsDetailsForm(
                data.id,
                Number(data.view_status),
                data.notification_text.type,
                data.event_id,
              )
            }>
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={styles.ContentItems}>
                  <View style={styles.ContentItemBar}></View>
                  <View style={{}}>
                    {/* <Image style={{ height: 50, width: 50 }} source={ApprovedImg} /> */}

                    <View style={styles.imgBorder}>
                      <Image
                        style={{height: 40, width: 40, borderRadius: 100}}
                        source={ApprovedImg}
                      />
                    </View>
                  </View>
                  <View style={styles.ContentItems2}>
                    <Text style={styles.contentText}>
                      {data?.notification_text?.type}
                    </Text>

                    <Text style={styles.contentText2}>
                      {data?.notification_text?.text}
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.contentText2}>
                    {moment(data.created_at).format('LL')}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </View>
  );
};

export default Notification;
