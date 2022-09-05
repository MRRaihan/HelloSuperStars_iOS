import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import AppUrl from '../../RestApi/AppUrl';
import HomeOnlineStars from './HomeOnlineStars/HomeOnlineStars';
import PostContainer from './HomePostContainer/PostContainer';
import styles from './styles';

function Home() {
  const navigation = useNavigation();
  const [postPage, setPostPage] = useState(1);
  return (
    <View style={styles.container}>
      {/* <LearningSessionNav /> */}
      {/* <VideoUploadLearningSession /> */}
      {/* <ResultLearningSession /> */}
      <SafeAreaView>
        {/*.............. custom header start .............. */}
        <HeaderComp />

        
{/* <Button title='Avatar' onPress={()=>navigation.navigate('ImgCrop')} /> */}
        {/* ..........custom header end....................  */}

        {/* ...........online active stars................... */}

        <HomeOnlineStars />
        {/* ...........online active end................... */}

        {/* ...........Home Page card start................... */}
        <View style={{ paddingBottom: 120 }}>
          <PostContainer
            path={AppUrl.AllPostWithPagination + 5 + `?page=${postPage}`}
            postPage={postPage}
            setPostPage={setPostPage}
            type="liveChats"
          />
        </View>
        {/* ...........Home Page card end................... */}

        {/* <View>
            <Text style={styles.text}>Shohan Screen</Text>
            <Button onPress={HandelProfile} title="GO to Profile"></Button>
          </View> 
           */}
      </SafeAreaView>
    </View>
  );
}

export default Home;
