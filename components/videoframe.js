import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import styles from '../styles/ExternalStyles';

const VideoFrame = () => (
    
        <Video source={require('./sample.mp4')} 
        style={styles.video}
        resizeMode="contain"
        controls={true} 
        
        />

)

export default VideoFrame;

// 