import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  Image,
  StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../Constants/context';
import imagePath from '../Constants/imagePath';

const HeaderComp = ({ action, text, status, FanGroup,msgNotificaiton=null }) => {
  const [showBar, setSHowBar] = React.useState(false);

  const navigation = useNavigation();

  const { authContext } = useContext(AuthContext);
  return (
    <View style={styles.container}>

      {!!status ? (

        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => authContext.signOut()}>
          <MaterialCommunityIcons
            name="logout"
            color={'#F7F7F7'}
            size={20}
          />
          <Text style={{ color: 'white' }}>LOGOUT</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        {msgNotificaiton?     <MaterialCommunityIcons
            name="arrow-left"
            color={'#F7F7F7'}
            size={20}
          />:   <Image
            source={imagePath.logo}
            style={{ height: 30, width: 30, borderRadius: 50 }}
          />}
   
       
        </TouchableOpacity>
      )}


      <View style={styles.row}>
{msgNotificaiton?<></>:    <View style={styles.Search}>
          {showBar ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ marginRight: 3 }}
                onPress={() => setSHowBar(false)}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  color={'#F7F7F7'}
                  size={20}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.SearchBar}
                placeholder="Search Superstar"></TextInput>
            </View>
          ) : null}
          {showBar ? null : (
            <TouchableOpacity
              onPress={() => setSHowBar(!showBar)}
              style={styles.text}>
              <AntDesign name="search1" size={18} color="#494949" />
            </TouchableOpacity>
          )}
        </View>



}

    



        {FanGroup === 'fangroup' ? <TouchableOpacity style={styles.Message} onPress={() => navigation.navigate('Messenger')}>
          <Text style={styles.text}>
            <AntDesign
              name="message1"
              color={'#494949'}
              size={18}
            />
          </Text>
        </TouchableOpacity> : <TouchableOpacity style={styles.Message} onPress={
          msgNotificaiton?()=>{}:
          () => navigation.navigate('Message')}>
          <Text style={msgNotificaiton?'': styles.text}>
            <AntDesign
              name="message1"
              color={msgNotificaiton?'#ffaa00':'#494949'}
              size={msgNotificaiton?25:18}
            />
          </Text>
        </TouchableOpacity>}

      </View>

      {/* {!!status ? (
       
        <TouchableOpacity onPress={() => signOut()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )} */}

      {/* <Text style={{color: 'white', fontSize: 20}}>{text}</Text> */}
      {/* <TouchableOpacity>
        <Image
          source={imagePath.defultImage}
          style={{height: 30, width: 30, borderRadius: 50}}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343434',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    borderColor: '#000000',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 4,
    backgroundColor: '#b3b3b3',
    padding: 3,
    borderRadius: 50,
    padding: 7
  },
  SearchBar: {
    borderColor: '#FFAD00',
    borderWidth: 1,
    width: 280,
    height: 28,
    padding: 3,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  row: {
    justifyContent: 'center',

    flexDirection: 'row',
  },
  row2: {
    justifyContent: 'center',
  },
});
