import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';

import Header from './components/header';
import VideoFrame from './components/videoframe.js';
import Landscape_Header from './components/landscape_header';
import styles from './styles/ExternalStyles';
import Landscape_VideoFrame from './components/landscape_videoframe';



function App(): JSX.Element {

  const [orientation, setOrientation] = useState(Dimensions.get('window').width > Dimensions.get('window').height ? 'LANDSCAPE' : 'PORTRAIT');
  // useEffect(() => {

  //   const updateOrientation = () => {
  //     setOrientation(Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'portrait');
  //   };
  //   Dimensions.addEventListener('change', updateOrientation);
  //   return () => { Dimensions.removeEventListener('change', updateOrientation); };
  // }, []);
  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
  }, []);

  return (

    <View>
      {orientation === 'PORTRAIT' ? (
        <View>
          <Header />
          <View style={{ paddingTop: 120 }}>
            <VideoFrame />
          </View>
        </View>
      ) : (
        <View>
        <Landscape_VideoFrame/>
        <Landscape_Header/>
        </View>
      )}
    </View>

  );
}


export default App;

