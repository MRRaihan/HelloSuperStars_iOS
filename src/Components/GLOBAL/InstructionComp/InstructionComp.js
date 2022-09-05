import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import RenderHtml from 'react-native-render-html';
// import {LinearTextGradient} from 'react-native-text-gradient';

function InstructionComp({ title, instruction }) {
  const { width } = useWindowDimensions();
  const source = {
    html: `<div style='color:#e6e6e6'>${instruction ? instruction : ''}</div>`,
  };
  return (
    <>
      <View style={styles.topCard}>
        {/* <LinearTextGradient
          style={styles.fonts}
          locations={[0, 1]}
          colors={['#ffaa00', '#fcfab6']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}> */}
        <Text style={styles.fonts}>{title}</Text>
        {/* </LinearTextGradient> */}

        <View
          style={{ borderWidth: 0.2, borderColor: 'black', marginVertical: 10 }}
        />
        {/* <UnderlineImage /> */}
        <RenderHtml contentWidth={width} source={source} />
      </View>
    </>
  );
}

export default InstructionComp;

const styles = StyleSheet.create({
  topCard: {
    backgroundColor: '#282828',
    margin: 8,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  fonts: {
    color: '#FFAD00',
    textAlign: 'center',
    marginTop: 10,
  },
});
