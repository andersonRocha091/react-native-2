import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    PixelRatio
} from 'react-native'


const Header = ()=>{
    const logo = "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"
    return (
        <View style={styles.header}>
          <Image
            className="header-image"
            style={styles.headerImage}
            source={{ uri: logo}}
          />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#7800ff',
        borderBottomWidth: 2,
        padding: 16,
        paddingTop: 55
      },
      headerImage: {
        height: 45,
        width: 250
      }
});
export default Header;