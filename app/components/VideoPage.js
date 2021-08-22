import React from 'react';
import {View, Text, StyleSheet,Image,Button} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

function VideoPage({image,title,subTitle,bio,social}) {
        const video = React.useRef(null);
        const [status, setStatus] = React.useState({});
  return (
    <View>
      <Video
        ref={video}
        
        source={{
          uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      </View>
  )}

export default VideoPage;