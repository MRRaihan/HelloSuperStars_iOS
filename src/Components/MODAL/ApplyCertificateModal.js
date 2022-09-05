//import liraries
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
  ScrollView,
} from 'react-native';

import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import imagePath from '../../Constants/imagePath';

const ApplyCertificateModal = ({show, setShow, apply, setApply}) => {

  const handleApply = () => {
    setShow(false);
    setApply(true)
  }

  return (
    <Modal
      visible={show}
      transparent
      animation="slide"
      hardwareAccelerated
      onRequestClose={() => {
        setShow(false);
      }}>
      <View style={styles.centered_view}>
        <View>
          <ImageBackground
            style={styles.LearnMo}
            source={imagePath.DeleteMZ}
            resizeMode="cover">
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => setShow(false)}
                style={{color: '#FFAD00', marginRight: 10, padding: 10}}>
                <Icon name="close" size={15} color="#FFAD00" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.AuInput}>
              <Text style={styles.AuIA}>Audition Title</Text>
            <TextInput type="" name="" style={styles.AuInputA}  placeholderTextColor={'white'} />
            <Text style={styles.AuIA}>Audition Title</Text>
            <TextInput type="" name="" style={styles.AuInputA}  placeholderTextColor={'white'} />
            <View style={styles.AuInputFlex}>

            <View style={styles.AuIAWX}>
              <Text style={styles.AuIAW}>Audition Title</Text>
              <TextInput type="" name="" style={styles.AuInputAX}  placeholderTextColor={'white'} />
            </View>
            <View style={styles.AuIAWX}>
              <Text style={styles.AuIAW}>Audition Title</Text>
              <TextInput type="" name="" style={styles.AuInputAX}  placeholderTextColor={'white'} />
            </View>
            </View>
            <TouchableOpacity onPress={() => handleApply()}>
            <Text style={styles.DoneZS}>
              Apply
            </Text>
            </TouchableOpacity>
          
  
            </View>
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
};

export default ApplyCertificateModal;
