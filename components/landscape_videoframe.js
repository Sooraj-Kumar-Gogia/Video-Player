import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import styles from '../styles/ExternalStyles';

const Landscape_VideoFrame = () => (
    
        <Video source={require('./sample.mp4')}  // Can be a URL or a local file.
        style={styles.landscape_video}
        resizeMode="contain"
        controls={true} 
        
        />

)

export default Landscape_VideoFrame;

// 