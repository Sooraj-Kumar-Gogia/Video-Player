import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center',
  },

  landscape_header: {
    flex: 1,
    backgroundColor: "transparent", 
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: 700,
    height: 70,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,


  },


    video: {
        width: 360,
        height: 350,
        backgroundColor: 'black',
        alignSelf: 'center',
    },

    landscape_video: {
      width: 730,
      height: 400,
      backgroundColor: 'black',
      alignSelf: 'center',
  },

    controls: {
        backgroundColor: "transparent",
        borderRadius: 5,
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
    },    

  }

);

export default styles;