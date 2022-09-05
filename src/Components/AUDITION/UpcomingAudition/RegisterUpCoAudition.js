import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InstructionComp from '../InstructionComp/InstructionComp'
import Registration from '../RegistrationComp/Registration'
import PaymentComp from '../PaymentComp/PaymentComp'
import CostComp from '../CostComp/CostComp'
import VideoPlayer from 'react-native-video-player'
import Video from '../Video/Video'

const RegisterUpCoAudition = () => {
return (
<>
  {/* <View style={styles.topCard}>
    <VideoPlayer video={{ uri: 'http:///backend.hellosuperstars.com/assets/video/demoVedio1.mp4' }} videoWidth={120}
      videoHeight={70} autoplay={true} pauseOnPress hideControlsOnStart resizeMode='contain' />
  </View> */}
  <Video/>
  <InstructionComp title={'Audition Instructions'} instruction={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis accumsan vel nulla at euismod. Sed ipsum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis accumsan vel nulla at euismod. Sed ipsum magna'} />
  <CostComp title={'Cost for the greeting:'} amount={720} />
  <Registration />
  <PaymentComp />
</>

)
}

export default RegisterUpCoAudition


const styles = StyleSheet.create({
  topCard: {
      backgroundColor: '#282828',
      margin: 8,
      borderRadius: 5,
  },
  fonts: {
      color: '#FFAD00',
      textAlign: 'center',
      marginTop: 10
  },
});
