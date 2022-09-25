import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import VideoPlayer from 'react-native-video-player';
// import Video from '../Video/Video';
import InstructionComp from '../../GLOBAL/InstructionComp/InstructionComp';
// import CostComp from '../../GLOBAL/CostComp/CostComp';
// import RegistrationComp from '../../QnA/RegistrationComp/Registration';
import PaymentComp from '../../GLOBAL/PaymentComp/PaymentComp';
import RegistrationComp from '../../QnA/RegistrationComp/Registration';

import {ScrollView} from 'react-native-gesture-handler';
import AppUrl from '../../../RestApi/AppUrl';
import CostComp from '../../GLOBAL/CostComp/CostComp';
// import CostComp from '../../GLOBAL/CostComp/CostComp';
const RegisterUpCoAudition = ({route}) => {
  const [isShowPaymentComp, setIsShowPaymentComp] = useState(false);
  const [parentData, setParentData] = useState({});
  const {data} = route.params;
  const postContent = data?.audition;
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [postRegistration, setPostRegistration] = useState({});

  console.log('--------------------________________----------------');
  console.log(data);
  return (
    <ScrollView style={{backgroundColor: '#282828'}}>
      <View style={styles.topCard}></View>
      <View style={styles.topCard}>
        <VideoPlayer
          style={styles.BannerCardImg}
          video={{
            uri: `${AppUrl.MediaBaseUrl}${postContent?.video}`,
          }}
          videoWidth={120}
          videoHeight={70}
          thumbnail={{
            uri: `${AppUrl.MediaBaseUrl}${postContent?.banner}`,
          }}
          blurRadius={10}
        />
      </View>
      <InstructionComp
        title={'Audition Instructions'}
        instruction={`${postContent?.instruction}`}
      />
      <CostComp title={'Cost for the greeting:'} amount={postContent?.fees} />
      {isAlreadyRegistered ? (
        <View>
          <Text style={{color: 'white'}}>Already Register</Text>
        </View>
      ) : (
        <>
          {/* <RegistrationComp
            post={postContent}
            event_type="audition"
            postRegistration={postRegistration}
            eventId={post?.id}
            modelName="GreetingsRegistration"
            passChildData={setIsShowPaymentComp}
            setParentData={setParentData}
          />
          <RegisPaymentModal
            eventType="greeting"
            eventId={post?.id}
            modelName="greeting"
            isShowPaymentComp={isShowPaymentComp}
            setIsShowPaymentComp={setIsShowPaymentComp}
            parentData={parentData}
            event_registration_id={postRegistration && postRegistration?.id}
            notification_id={notificationId}
          /> */}
          <RegistrationComp
            post={postContent}
            fee={postContent?.fees}
            event_type="audition"
            event_id={data.event_id}
            modelName="GreetingsRegistration"
            isShowPaymentComp={isShowPaymentComp}
            parentData={parentData}
            passChildData={setIsShowPaymentComp}
            setParentData={setParentData}
          />
        </>
      )}

      {/* <PaymentComp /> */}
    </ScrollView>
  );
};

export default RegisterUpCoAudition;

const styles = StyleSheet.create({
  topCard: {
    backgroundColor: '#282828',
    margin: 8,
    borderRadius: 5,
  },
  fonts: {
    color: '#FFAD00',
    textAlign: 'center',
    marginTop: 10,
  },
});
