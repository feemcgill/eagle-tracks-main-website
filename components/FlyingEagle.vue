<template>
  <div>
    <img src="/eag.gif" ref="eagle" class="eagle" v-on:click="screetch" data-not-lazy />
  </div>
</template>

<script>
import gsap from 'gsap'
const sound_1 = '/mp3/hawk.mp3';
const sound_2 = '/mp3/eagle.mp3';
const sound_3 = '/mp3/crows.mp3';

export default {
  name: 'FlyingEagle',
  props: {
    msg: String
  },
  data () {
    return {
      sound: null,
      timer: null,
      soundIndex: 0,
      sounds: [
        sound_1,
        sound_2,
        sound_3,
        // sound_4
      ]
    }
  },
  methods: {
    set () {
      gsap.set(this.$refs.eagle, {
        x: -260,
        y: Math.floor(Math.random() * Math.floor(window.innerHeight)),
        alpha: 1
      })
    },
    fly () {
      gsap.to(this.$refs.eagle, 10 , {
        x: window.innerWidth,
        y: Math.floor(Math.random() * Math.floor(window.innerHeight)),
        ease: "power1.in",
        onComplete: () => {
          this.set()
        }
      })
    },
    screetch() {
      if (this.sound) {
        this.sound.play()
      }
    },
    nextTrack() {
      this.soundIndex = (this.soundIndex + 1) % this.sounds.length
      this.sound.src = this.sounds[this.soundIndex]
    }
  },
  mounted () {
    this.soundIndex = Math.floor(Math.random() * this.sounds.length)
    this.sound = new Audio(this.sounds[this.soundIndex])
    this.sound.onended = () => {
      this.nextTrack()
    }
    this.set()
    this.fly()
    this.timer = setInterval(() => {
      this.fly()
    }, 12000);
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}

</script>

<style scoped>
.eagle {
  display: block;
  position: fixed;
  width: 260px;
  height: 275px;
  object-fit: cover;
  opacity: 0;
  cursor: not-allowed;
  z-index: 100000000;
  top: 0;
  left: 0;
}
</style>