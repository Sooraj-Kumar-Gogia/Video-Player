import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ExternalStyles';

const Landscape_Header = () => (
    <View style={styles.landscape_header}>

        <Image source={require('../assets/left-arrow.png')} style={{ width: 25, height: 30, resizeMode: 'contain', marginRight: 200 }} />
        <Image source={require('../assets/circle.png')} style={{ width: 150, height: 30, resizeMode: 'contain', marginRight: 180  }} />
        <Image source={require('../assets/sharee.png')} style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 30  }} />
        <Image source={require('../assets/fav.png')} style={{ width: 30, height: 30, resizeMode: 'contain', }} />
    </View>
)

export default Landscape_Header;