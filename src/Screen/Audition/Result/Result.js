import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HeaderComp from '../../../Components/HeaderComp';
import AppealRequestModal from '../../../Components/MODAL/AppealRequestModal';
import UnderlineImage from '../../../Components/GLOBAL/Reuseable/UnderlineImage';
import imagePath from '../../../Constants/imagePath';
import RoundTopBanner from '../Round1/RoundTopBanner';
import AfterRound5 from './AfterRound5';
import styles from './styles';
import RequestPending from '../../../Components/AUDITION/UpcomingAudition/RequestPending'
import CustomModal from '../../../Components/MODAL/CustomModal';
import VideoPlayer from 'react-native-video-player';

const Result = ({route}) => {
  const {roundName}=route.params;
  const Navigation = useNavigation();
  const [show, setShow] = useState(false);


  const [customShow,setCustomShow]=useState(false)

  const [appeal, setAppeal] = useState(false);
  const [apply, setApply] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>

  
    {/* Home Page 39 */}

    <HeaderComp />

    <ScrollView>
    <RoundTopBanner title={`Round ${roundName} started`} RoundName={roundName}/>
{/* ====================here i props round names and give conditions======================== */}
{roundName===5||roundName===6||roundName===7||roundName===8?<AfterRound5 RoundName={roundName}/>

:
<View style={styles.topCard}>
      <Text style={styles.fonts}>Your Uploaded Round 1 videos</Text>
      <UnderlineImage />
 
      <View style={styles.VideoT}>
        <View style={{width:"40%"}}>
        <VideoPlayer video={{ uri: 'http:///backend.hellosuperstars.com/assets/video/demoVedio1.mp4' }}
                    videoWidth={100} videoHeight={100} autoplay={false} pauseOnPress hideControlsOnStart
                    resizeMode='stretch' /> 
          <View style={styles.VideoTax}>
            <View styles={styles.ImgVideo}>
              <Image source={imagePath.Rectangle2} style={styles.AudiImg2} />
              <Text style={styles.TextW}>20</Text>
            </View>
            <View styles={styles.ImgVideo}>
              <Image source={imagePath.Rectangle3} style={styles.AudiImg2} />
              <Text style={styles.TextW}>20</Text>
            </View>
            <View styles={styles.ImgVideo}>
              <Image source={imagePath.Rectangle1} style={styles.AudiImg2} />
              <Text style={styles.TextW}>20</Text>
            </View>
          </View>
        </View>
        <View style={{width:"40%"}}>
        <VideoPlayer video={{ uri: 'http:///backend.hellosuperstars.com/assets/video/demoVedio1.mp4' }}
                    videoWidth={100} videoHeight={100} autoplay={false} pauseOnPress hideControlsOnStart
                    resizeMode='stretch' />
          <View style={styles.VideoTax}>
            <View styles={styles.ImgVideo}>
              <Image source={imagePath.Rectangle2} style={styles.AudiImg2} />
              <Text style={styles.TextW}>20</Text>
            </View>
            <View styles={styles.ImgVideo}>
              <Image source={imagePath.Rectangle3} style={styles.AudiImg2} />
              <Text style={styles.TextW}>20</Text>
            </View>
            <View styles={styles.ImgVideo}>
              <Image source={imagePath.Rectangle1} style={styles.AudiImg2} />
              <Text style={styles.TextW}>20</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
}

 

    {/* Not Qualified */}
    {!appeal ? (
      <>
        <View style={styles.Card}>
          <View>
            <Image source={imagePath.Rectangle4} style={styles.AudiImgCard} />
          </View>
          <View>
            <Text style={styles.Input}>Your total marks</Text>
          </View>
          <View>
            <TextInput
              type=""
              name=""
              style={styles.Input1}
              placeholder="80"
              placeholderTextColor={'white'}
            />
          </View>

          <View style={{}}>
          {roundName===8?
            <View style={{backgroundColor:'#000000',
            
            justifyContent:'center',alignItems:'center',
          
       
        fontWeight: 'bold',
        textAlign: 'center',
        width: 110,
        paddingHorizontal: 5,
        paddingVertical: 6,
        fontSize: 13,
        height: 40,
            }}>
      <Text style={{ color: '#E19A04',}}>3rd Position</Text>
            </View>:
            <Text style={styles.Input2}>
              You are not Qualified {'\n'}for the next Round
            </Text>
          
          }
            
          </View>
        </View>
{roundName===8?null: <TouchableOpacity style={{backgroundColor: '#000000'}} onPress={roundName===5||roundName===6||roundName===7?() => setCustomShow(true):() => setShow(true)}>
          <LinearGradient
            colors={['#FFAD00', '#E19A04', '#FACF75']}
            style={styles.CardA}>
            <Text style={styles.CardTex}>{roundName===5||roundName===6||roundName===7?"Apply for Cirtificate":"Appeal Request"}</Text>
          </LinearGradient>
        </TouchableOpacity>}
       
      </>
    ) : (
        <>
                <View style={styles.Card}>
      <View>
        <Image source={imagePath.Rectangle4} style={styles.AudiImgCard} />
      </View>
      <View>
        <Text style={styles.Input}>Your total marks</Text>
      </View>
      <View>
        <TextInput
          type=""
          name=""
          style={styles.Input1}
          placeholder="80"
          placeholderTextColor={'white'}
        />
      </View>

      <View>
        <Text style={styles.Input3}>
          You are Qualified {'\n'}for the next Round
        </Text>
      </View>
    </View>

    {apply ? (
      <>
        {/* Home Page 41 */}
        <TouchableOpacity>
          <LinearGradient
            colors={['#79EC66', '#79EC66', '#79EC66']}
            style={styles.CardA}>
            <Text style={styles.CardTex}>Certificate Request Pending</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* Home Page 41 End */}

        {/* Home Page 40 End*/}

        {/* Home Page 42 */}
        <View style={styles.LastZ}>
          <Text style={styles.TextG}>Download Your Certificate </Text>
          <Text>
            <TouchableOpacity>
              <LinearGradient
                colors={['#79EC66', '#79EC66', '#79EC66']}
                style={styles.CardA}>
                <Text style={styles.CardTexG}>Download</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Text>
        </View>
        {/* Home Page 42 */}
      </>
    ) : (
      <RequestPending apply={apply} setApply={setApply} />
    )}
        </>
    )}




    <AppealRequestModal
      appeal={appeal}
      setAppeal={setAppeal}
      show={show}
      setShow={setShow}
    />


{/*========= this modal for after round 5=========  */}
    <CustomModal
     setAppeal={setAppeal}
     customShow={customShow}
      setCustomShow={setCustomShow}
      RoundName={roundName}
    
    
     />

    {/* <Button title='yo button' onPress={()=>Navigation.navigate(navigationStrings.VOTING)} /> */}

    {/* Home Page 39  end*/}

    {/* Home Page 40 */}
</ScrollView>
  </View>
  )
}

export default Result

