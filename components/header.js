import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = () => (
    <View style={{ alignItems: 'center', padding: 20, flexDirection: 'row' }}>

        <Image source={require('./left-arrow.png')} style={{ width: 25, height: 30, resizeMode: 'contain', marginRight: 50 }} />
        <Image source={require('./zimo.png')} style={{ width: 150, height: 30, resizeMode: 'contain', marginRight: 30  }} />
        <Image source={require('./sharee.jpg')} style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 10  }} />
        <Image source={require('./fav.jpg')} style={{ width: 30, height: 30, resizeMode: 'contain', }} />
    </View>
)

export default Header;