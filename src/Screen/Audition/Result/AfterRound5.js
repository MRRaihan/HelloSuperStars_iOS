import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import Icon from 'react-native-vector-icons/FontAwesome';
import imagePath from '../../../Constants/imagePath';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const AfterRound5 = ({RoundName}) => {
  return (
    <>
    <View style={{backgroundColor: '#343434', borderRadius: 5}}>
      <Text style={{color: 'white', textAlign: 'center', padding: 10,fontSize:20}}>
        Result
      </Text>
      <View style={{borderWidth: 0.5, borderColor: 'black'}} />

      <View style={{marginVertical: 5, margin: 10, borderRadius: 10}}>
        <VideoPlayer
          video={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          videoWidth={120}
          videoHeight={50}
          autoplay={false}
          pauseOnPress
          hideControlsOnStart
          resizeMode="stretch"
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#161616',
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          marginVertical: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Icon name="heart" size={20} color="#900" />
          </TouchableOpacity>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'white'}}>124</Text>
          </View>
        </View>
        <View style={{marginRight: 10, flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon name="paper-plane" color={'#03a5fc'} size={20} />
          </TouchableOpacity>
          <View style={{marginHorizontal: 5}}>
            <Text style={{color: 'white'}}>20</Text>
          </View>
        </View>
      </View>
      {/*========== judges marks start here ============= */}

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#161616',
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          marginVertical: 5,
        }}>
        <View style={{width: '30%', justifyContent: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              borderColor: 'gold',
              borderWidth: 1,
              borderRadius: 100,
            }}>
            <Image
              source={imagePath.SakibBalHasan}
              style={{height: '100%', width: '100%', width: '100%'}}
            />
          </View>
        </View>
        <View style={{width: '50%', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>
            {' '}
            <Text>@Shakib</Text> {'\n'}ipsum dolor sit, amet consectetur
            adipisicing elit. Adipisci, voluptatibus atque. Perspiciatis
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            backgroundColor: '#252525',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: '#C47FE0', fontSize: 30}}>Mark</Text>

          <Text style={{color: '#C47FE0', fontSize: 20}}>21</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#161616',
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          marginVertical: 5,
        }}>
        <View style={{width: '30%', justifyContent: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              borderColor: 'gold',
              borderWidth: 1,
              borderRadius: 100,
            }}>
            <Image
              source={imagePath.Momotaz}
              style={{height: '100%', width: '100%', width: '100%'}}
            />
          </View>
        </View>
        <View style={{width: '50%', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>
            {' '}
            <Text>@Momotaz</Text> {'\n'}ipsum dolor sit, amet consectetur
            adipisicing elit. Adipisci, voluptatibus atque. Perspiciatis
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            backgroundColor: '#252525',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: '#E7A825', fontSize: 30}}>Mark</Text>

          <Text style={{color: '#E7A825', fontSize: 20}}>41</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#161616',
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          marginVertical: 5,
        }}>
        <View style={{width: '30%', justifyContent: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              borderColor: 'gold',
              borderWidth: 1,
              borderRadius: 100,
            }}>
            <Image
              source={imagePath.Azhari}
              style={{height: '100%', width: '100%', width: '100%'}}
            />
          </View>
        </View>
        <View style={{width: '50%', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>
            {' '}
            <Text>@Azhari</Text> {'\n'}ipsum dolor sit, amet consectetur
            adipisicing elit. Adipisci, voluptatibus atque. Perspiciatis
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            backgroundColor: '#252525',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: '#818181', fontSize: 30}}>Mark</Text>

          <Text style={{color: '#818181', fontSize: 20}}>41</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#161616',
          padding: 5,
          borderRadius: 5,
          marginHorizontal: 5,
          marginVertical: 5,
        }}>
        <View style={{width: '30%', justifyContent: 'center'}}>
          <View
            style={{
              height: 40,
              width: 40,
            }}>
            <Image
              source={imagePath.starImage}
              style={{
                height: '100%',
                width: '100%',
                width: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
        <View style={{width: '50%', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>Star average mark</Text>
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            backgroundColor: '#252525',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: '#E7A725', fontSize: 20}}>65</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#161616',
          padding: 5,
          borderRadius: 5,
          marginHorizontal: 5,
          marginVertical: 5,
        }}>
        <View style={{width: '30%', justifyContent: 'center'}}>
          <View
            style={{
              height: 40,
              width: 40,
            }}>
            <Image
              source={imagePath.user}
              style={{
                height: '100%',
                width: '100%',
                width: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
        <View style={{width: '50%', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>Star average mark</Text>
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            backgroundColor: '#252525',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: '#E7A725', fontSize: 20}}>07</Text>
        </View>
      </View>

    
    </View>

    {RoundName===7?<View style={{backgroundColor:'#343434',marginVertical:10,borderRadius:5}}>
  <Text style={{color:'white',textAlign:'center',fontSize:20,fontWeight:'bold'}}>Oxygen Comment</Text>
  <View style={{borderWidth:1,borderColor:'black',marginVertical:5}} />


<View style={{marginVertical:10}}>
  <SwiperFlatList autoplay layDelay={2} autoplayLoop>
  <View style={{height:150,width:200,borderRadius:10,position:'relative',marginHorizontal:10}}>
<Image source={imagePath.Imran} style={{resizeMode:'stretch',height:'100%',width:'100%'}} />
<View style={{height:40,width:40,borderWidth:2,borderColor:'gold',position:'absolute',left:10,top:10,borderRadius:100}}>
<Image source={imagePath.ImranCover} style={{height:'100%',width:'100%',borderRadius:100}} />
</View>
  </View>   
  <View style={{height:150,width:200,borderRadius:10,position:'relative',marginHorizontal:10}}>
<Image source={imagePath.LunaLaila} style={{resizeMode:'stretch',height:'100%',width:'100%'}} />
<View style={{height:40,width:40,borderWidth:2,borderColor:'gold',position:'absolute',left:10,top:10,borderRadius:100}}>
<Image source={imagePath.LunaCover} style={{height:'100%',width:'100%',borderRadius:100}} />
</View>
  </View>   

  <View style={{height:150,width:200,borderRadius:10,position:'relative',marginHorizontal:10}}>
<Image source={imagePath.Imran} style={{resizeMode:'stretch',height:'100%',width:'100%'}} />
<View style={{height:40,width:40,borderWidth:2,borderColor:'gold',position:'absolute',left:10,top:10,borderRadius:100}}>
<Image source={imagePath.ImranCover} style={{height:'100%',width:'100%',borderRadius:100}} />
</View>
  </View>  
    
                         </SwiperFlatList>

 
</View>

</View>:null}



</>
  );
};

export default AfterRound5;

const styles = StyleSheet.create({});
