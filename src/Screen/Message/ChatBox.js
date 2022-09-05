import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { Component } from 'react'
import imagePath from '../../Constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import AppUrl from '../../RestApi/AppUrl';

function ChatBox({ data }) {

    const navigation = useNavigation()
    let chatData
    if (data.type === 'fan-group') {
        chatData = data.fangroup
    } else {
        chatData = data.qna
    }

    const handelInsertChat = () => {
        navigation.navigate('MessageStar', {
            room_id: chatData.room_id,
            group_id: chatData.id
        })
    }


    console.log(AppUrl.MediaBaseUrl + chatData.banner)
    return (
        <TouchableOpacity
            style={styles.row}
            onPress={handelInsertChat}>
            <View style={styles.content}>
                <View style={styles.ContentItems}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: 'gold',
                            borderRadius: 100,
                            padding: 3,
                        }}>
                        <Image style={styles.starCardImg} source={{ uri: AppUrl.MediaBaseUrl + chatData.banner }} />
                    </View>

                    <View style={styles.ContentItems2}>
                        <View>
                            <Text style={styles.contentText}>{data?.title}</Text>
                        </View>
                        <Text style={styles.contentText2}>hi</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.contentText2}>Yesterday</Text>
                    <Text style={styles.contentText2}>10 minute</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    starCardImg: {
        padding: 3,
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    SearchBar: {
        borderColor: '#FFAD00',
        borderWidth: 1,

        height: 28,
        padding: 3,
        borderRadius: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    row: {
        marginVertical: 1,
        backgroundColor: 'black',

        marginVertical: 3,
        marginHorizontal: 3,
        borderWidth: 1,
        borderBottomColor: 'gray',
    },
    content: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ContentItems: {
        flexDirection: 'row',
    },
    ContentItems2: {
        marginLeft: 5,
        justifyContent: 'center',
    },
    contentText: {
        fontSize: 18,
        color: 'white',
    },
    contentText2: {
        fontSize: 12,
        color: 'gray',
    },
});

export default ChatBox