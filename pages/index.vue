<template>
  <div class="homepage">
    <div class="container">
      <img src="musicanddance1.gif" alt="">
      <img src="outlettscary9.gif" alt="">
      <div><img src="12.gif" alt="">to</div>
      <h1>Eaglel Tracks Homepage</h1>
      <div>This is our main home on the internet. </div>
      <ul>
        <li class="legend">Useful Links: </li>
        <li>Latest vibe!!!!! <img src="sirheistbullets2.gif" alt=""><a href="https://square-community.eagletracks.net/">Square Community</a></li>
        <li><img src="sirheistbullets2.gif" alt=""><a href="https://vol1.eagletracks.net/">Check out Vol 1!</a> </li>
      </ul>
      <flying-eagle />
      <div class="images">
        <div class="big-bottom"><img src="vibe1.jpg" alt=""></div>
        <img src="outlettdivider15.gif" alt="">
        <div class="big-bottom"><img src="vibe2.jpg" alt=""></div> 
        <img src="outlettdivider15.gif" alt="">
  
        <div class="big-bottom"><img src="JPEG/1.jpg" alt=""></div>
        <img src="outlettdivider15.gif" alt="">

        <div class="big-bottom"><img src="JPEG/2.jpg" alt=""></div>
        <img src="outlettdivider15.gif" alt="">

        <div class="big-bottom"><img src="JPEG/3.jpg" alt=""></div>
        <img src="outlettdivider15.gif" alt="">

        <div class="big-bottom"><img src="JPEG/4.jpg" alt=""></div>
        <img src="outlettdivider15.gif" alt="">

        <div class="big-bottom"><img src="JPEG/5.jpg" alt=""></div>
        <img src="outlettdivider15.gif" alt="">

        <div class="big-bottom"><img src="JPEG/6.jpg" alt=""></div>
        <img src="outlettdivider15.gif" alt="">
        <div></div>
      </div>
      <img src="dance_1.gif" alt="">
      <img src="outlettdrugs7.gif" alt="">
      <img src="outlettrated2.gif" alt="">
      <img src="213l.gif" alt=""><img src="213l.gif" alt="">
      <img src="outlettdivider15.gif" alt="">
      <img src="outlettdivider15.gif" alt="">
      <img src="outlettdivider15.gif" alt="">
    </div>
  </div>
</template>

<script>
import FlyingEagle from '~/components/FlyingEagle.vue'

export default {
  components: { FlyingEagle },

}
</script>

<style lang="scss" scoped>
.homepage {
 background-color: #f8ffc7;
 background-image: url("/27.gif");
 cursor: url("/icon.gif"), auto;
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