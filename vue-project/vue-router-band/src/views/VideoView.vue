<template>
    <div class="video-view">
      <h1>비디오 재생 페이지</h1>
      <div v-for="video in videos" :key="video.id" class="video-item">
        <button @click="startVideo(video.id)">{{ video.title }}</button>
      </div>
      <div v-if="currentVideoId" class="video-player">
        <button @click="stopVideo">닫기</button>
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${currentVideoId}`"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoView',
    data() {
      return {
        videos: [
          { id: 'oYyWoovxq-8', title: '비디오 1' },
          { id: 'El0ZUBCStU4', title: '비디오 2' },
          { id: 'Ywlo8JozqKw', title: '비디오 3' }
        ],
        currentVideoId: null,
        currentIndex: 0
      };
    },
    methods: {
      startVideo(videoId) {
        this.currentVideoId = videoId;
        this.currentIndex = this.videos.findIndex(video => video.id === videoId);
      },
      stopVideo() {
        this.currentVideoId = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .video-view {
    text-align: center;
  }
  
  .video-item {
    margin: 10px 0;
  }
  
  .video-player {
    margin-top: 20px;
  }
  
  button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  