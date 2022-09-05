import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { AuthContext } from '../../Constants/context';
// import AppUrl from '../../RestApi/AppUrl';
import styles from './ActivitiesCardStyle';

import imagePath from '../../../Constants/imagePath';
import navigationStrings from '../../../Constants/navigationStrings';
import AppUrl from '../../../RestApi/AppUrl';


const ActivitiesCard = ({ childActivityEventList, childActivityEventType }) => {
  const navigation = useNavigation()



  let title = "";
  switch (childActivityEventType) {
    case 'learningSession':
      title = "Learning Session";
      break;
    case 'general':
      title = "General";
      break;
    case 'souviner':
      title = "Souviner";
      break;
    case 'auction':
      title = "Auction";
      break;
    case 'marketplace':
      title = "Marketplace";
      break;
    case 'meetup':
      title = "Meetup";
      break;
    case 'liveChat':
      title = "Live Chat";
      break;
    case 'qna':
      title = "Question & Answer";
      break;
  }
  // const width = Dimensions.get('window').width;
  const renderEventItem = ({ item }) => {
    let event = {};
    let eventRegistration = {};


    switch (childActivityEventType) {
      case 'learningSession':
        event = item.learning_session;
        break;
      case 'general':
        event = item.general;
        break;
      case 'meetup':
        event = item.meetup;
        break;
      case 'liveChat':
        event = item.livechat;
        eventRegistration = item.livechat_registration;
        break;
      case 'qna':
        event = item.qna;
        eventRegistration = item.qna_registration;
        break;
    }

    console.log('event data', event)
    let ActualEventDate = moment(event?.date ? event?.date : event?.event_date).format("YYYY-MM-DD");

    // console.log('ActualEventDate------------', ActualEventDate);
    let EndTime = "";
    let StartTime = "";
    if (childActivityEventType == 'liveChat') {
      EndTime = moment('2022-01-20 ' + eventRegistration?.live_chat_end_time).format("HH:mm:ss");
      StartTime = moment('2022-01-20 ' + eventRegistration?.live_chat_start_time).format("HH:mm:ss");
    } else if (childActivityEventType == 'qna') {
      EndTime = moment('2022-01-20 ' + eventRegistration?.qna_end_time).format("HH:mm:ss");
      StartTime = moment('2022-01-20 ' + eventRegistration?.qna_start_time).format("HH:mm:ss");
    } else {
      EndTime = moment('2022-01-20 ' + event?.end_time).format("HH:mm:ss");
      StartTime = moment('2022-01-20 ' + event?.start_time).format("HH:mm:ss");
    }

    let EventDateWithEndTime = new Date(moment(ActualEventDate + " " + EndTime));
    let EventDateWithStartTime = new Date(moment(ActualEventDate + " " + StartTime));
    let CurrentDateWithTime = new Date();

    let days = parseInt((EventDateWithStartTime - CurrentDateWithTime) / (1000 * 60 * 60 * 24));
    let hours = parseInt((EventDateWithStartTime - CurrentDateWithTime) / (1000 * 60 * 60) % 24);
    let minutes = parseInt(Math.abs(EventDateWithStartTime.getTime() - CurrentDateWithTime.getTime()) / (1000 * 60) % 60);

    const handleJoinNow = () => {

      console.log('jdshfgjs', event)

      if (childActivityEventType == 'liveChat') {

        navigation.navigate('VideoSdk', {
          meetingId: `a3en-kih1-ls2r`,
          type: 'videoChat'
        })

      } else if (childActivityEventType == 'qna') {
        alert('under devolpment')
      } else if (childActivityEventType == 'meetup') {

        navigation.navigate('VideoSdk', {
          meetingId: event.room_id,
          type: 'meetup'
        })

      } else if (childActivityEventType == 'learningSession') {

        navigation.navigate('VideoSdk', {
          meetingId: event.room_id,
          type: 'learningSession'
        })

      } else {

      }
    }

    //video upload 
    const videoUpload = () => {
      return (
        navigation.navigate(navigationStrings.LEARNINGSESSIONNAV, {
          event: event
        })
      )
    }

    return (

      <View style={{ flexDirection: 'row' }}>

        <View style={styles.Container}>

          {event?.banner == null
            ? <Image source={imagePath.AuditionTitle} style={styles.ImgBanner} />
            : <Image source={{
              uri: `${AppUrl.MediaBaseUrl + event?.banner}`,
            }} style={styles.ImgBanner}
            />
          }
          {/* <Image source={imagePath.BgLane1} style={styles.ImgBanner} /> */}
          <Text style={styles.Title}>{event?.title}</Text>

          <View style={styles.DateBox}>
            {EventDateWithEndTime.getTime() < CurrentDateWithTime.getTime() ? (
              <>
                {/* completed  */}
              </>
            ) : (
              <>
                {EventDateWithStartTime.getTime() > CurrentDateWithTime.getTime() ? (
                  <>
                    <View style={styles.DateColor} >
                      <Text style={styles.textDay}>{days}</Text>
                      <Text style={styles.textSec}>DAYS</Text>
                    </View>

                    <View style={styles.DateColor} >
                      <Text style={styles.textDay}>{hours}</Text>
                      <Text style={styles.textSec}>HOURS</Text>
                    </View>

                    <View style={styles.DateColor} >
                      <Text style={styles.textDay}>{minutes}</Text>
                      <Text style={styles.textSec}>MIN</Text>
                    </View>
                  </>
                ) : (
                  <>
                    {EventDateWithStartTime.getTime() < CurrentDateWithTime.getTime() || EventDateWithEndTime.getTime() > CurrentDateWithTime.getTime() ? (
                      <>
                        <TouchableOpacity onPress={handleJoinNow}>
                          <Text style={styles.JoinNowColor}>Join Now</Text>
                        </TouchableOpacity>
                      </>
                    ) : (
                      <>
                      </>
                    )}
                  </>
                )}
              </>
            )}

            {EventDateWithEndTime.getTime() < CurrentDateWithTime.getTime() ? (
              <View style={styles.Join}>
                <TouchableOpacity onPress={videoUpload}>
                  <Text style={styles.JoinText}>Completed</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                {EventDateWithStartTime.getTime() > CurrentDateWithTime.getTime() ? (
                  <View style={styles.Join}>
                    <TouchableOpacity>
                      <Text style={styles.JoinText}>Upcomming</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <>
                    {EventDateWithStartTime.getTime() < CurrentDateWithTime.getTime() || EventDateWithEndTime.getTime() > CurrentDateWithTime.getTime() ? (
                      <View style={styles.Join}>
                        <TouchableOpacity onPress={handleJoinNow}>
                          <Text style={styles.JoinText}>Running</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <>
                      </>
                    )}
                  </>
                )}
              </>
            )}


            {/* {EventDateWithEndTime.getTime() < CurrentDateWithTime.getTime() ? (
              <View style={styles.Join}>
                <TouchableOpacity>
                  <Text style={styles.JoinText}>Completed</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                {EventDateWithStartTime.getTime() > CurrentDateWithTime.getTime() ? (
                  <></>
                ) : (
                  <>
                    {EventDateWithStartTime.getTime() < CurrentDateWithTime.getTime() || EventDateWithEndTime.getTime() > CurrentDateWithTime.getTime() ? (
                      <View style={styles.Join}>
                        <TouchableOpacity>
                          <Text style={styles.JoinText}>Running</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <>
                      </>
                    )}
                  </>
                )}
              </>
            )} */}
          </View>





          {/* {EventDateWithEndTime.getTime() < CurrentDateWithTime.getTime() ? (
            <View style={styles.BannerCsText1}>
              <TouchableOpacity
                style={styles.STextA}>
                <Text style={styles.ext}>Completed </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              {EventDateWithStartTime.getTime() > CurrentDateWithTime.getTime() ? (
                <View style={styles.BannerCsText}>
                  <View style={styles.SText}>
                    <Text style={styles.ext}>{days}</Text>
                    <Text style={styles.ext}>Days</Text>
                  </View>
                  <View style={styles.SText}>
                    <Text style={styles.ext}>{hours}</Text>
                    <Text style={styles.ext}>Hours</Text>
                  </View>
                  <View style={styles.SText}>
                    <Text style={styles.ext}>{minutes}</Text>
                    <Text style={styles.ext}>Min</Text>
                  </View>
                </View>
              ) : (
                <>
                  {EventDateWithStartTime.getTime() < CurrentDateWithTime.getTime() || EventDateWithEndTime.getTime() > CurrentDateWithTime.getTime() ? (
                    <View style={styles.BannerCsText1}>
                      <TouchableOpacity
                        style={styles.STextA}>
                        <Text style={styles.ext}>Running </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <>
                    </>
                  )}
                </>
              )}
            </>
          )} */}

          <View style={styles.bannerTag}>
            <Image source={imagePath.BgTag} />
          </View>

          {item.days === '00' && item.hours === '00' ?
            <View style={styles.Join}>
              <TouchableOpacity>
                <Text style={styles.JoinText}>Join Now</Text>
              </TouchableOpacity>
            </View>
            :
            null
          }

        </View>
      </View>
    )
  }

  return (
    <>

      <View style={styles.Header}>
        <Image source={imagePath.BgLane} style={styles.HeaderImg} />
        <Text style={styles.HeaderText}>{title}</Text>
      </View>

      <FlatGrid
        itemDimension={150}
        data={childActivityEventList}
        renderItem={renderEventItem}
      />



    </>
  )
}

export default ActivitiesCard