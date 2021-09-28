<template>
  <div class="homepage" @click="popClick">
    <div class="container">
      <img src="musicanddance1.gif" alt="">
      <img src="outlettscary9.gif" alt="">
      <div class="info">
        <div><img src="12.gif" alt="">to</div>
        <h1>Eagle Tracks Homepage</h1>
        <div>This is our main home on the internet. </div>
        <ul>
          <li class="legend">Useful Links: </li>
          <!-- <li><img src="sirheistbullets2.gif" alt=""><a href="https://square-community.eagletracks.net/">Square Community</a> Latest vibe!!!!!</li> -->
          <li><img src="sirheistbullets2.gif" alt=""><a href="https://vol1.eagletracks.net/">Check out Vol 1!</a> </li>
          <li><img src="sirheistbullets2.gif" alt=""><a target="_blank" href="https://nopressurerecords.bandcamp.com/">No Pressure Records</a></li>
        </ul>
      </div>
      <div class="images">
        <img src="outlettdivider15.gif" alt="">
        <div class="big-bottom"><img src="vibe2.jpg" alt=""></div> 
       
        <div></div>
      </div>
      <a class="devgru-link" target="_blank" href="https://devgru.la">
        <img src="dance_1.gif" alt="">
     </a>        
      <img src="outlettdrugs7.gif" alt="">
      <img src="outlettrated2.gif" alt="">
      <img src="213l.gif" alt=""><img src="213l.gif" alt="">
      <img src="outlettdivider15.gif" alt="">
      <img src="outlettdivider15.gif" alt="">
      <img src="outlettdivider15.gif" alt="">
    </div>
    <div class="clickers">
      <div v-for="click, index in clickers" v-bind:key="index" :style="{top:click.y + 'px', left:click.x + 'px'}" class="clicker"><img src="213l.gif" alt=""></div>
    </div>
    <flying-eagle />

  </div>
</template>

<script>
import FlyingEagle from '~/components/FlyingEagle.vue'

export default {
  components: { FlyingEagle },
  data () {
    return {
      clickers: []
    }
  },
  methods: {
    popClick(event) {
      const obj =  {
        x: event.pageX,
        y: event.pageY
      }
      this.clickers.push(obj)
    }
  },
  head() {
    return {
      title: 'Welcome to Eagle Tracks',
      meta: [
        { hid: 'og:image', property: 'og:image', content: '/vibe2.jpg'},
        {
          hid: 'description',
          name: 'description',
          content: 'Eagle Tracks. Home of No Pressure Records, Square Community and Eagle Tracks Studios.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;
  overflow: hidden;
  background-color: #f8ffc7;
  background-image: url("/27.gif");
  cursor: url("/icon.gif"), auto;
  .info {
    position: relative;
    z-index: 1000;
  }
  .clicker {
    position: absolute;
  }
  h1 {
    font-size: 2em;
  }
  ul {
    margin: 1em;
    list-style: disc;
    li {
      margin-bottom: 0.5em;
    }
  }
}  

.devgru-link {
  background: transparent;
  text-decoration: none;
}
.big-bottom {
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 10px;
    @include breakpoint(small) {
      margin: 20px;
      max-width: 80%;
    }
  }     
}
</style>