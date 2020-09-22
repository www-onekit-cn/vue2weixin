import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
   
  options: {
    virtualHost: true
  },
  properties: {
      autoplay:{type: Boolean,value: false,},
      muted:{type: Boolean,value: false,},
      preload:{type: Boolean,value: false,},
      src:{type: String,value: "",},
      controls:{type: Boolean,value: true,},
      loop:{type: Boolean, value: false, },
      crossorigin:{type: Boolean,value: false,},
      currentTime:{type: Number, },
      duration:{type: Boolean,value: true,},
      
  },
   methods: {
        audio_play(e){
          console.log("xxxxxxx",e)
          this.triggerEvent('play',{a:123})
        },
        audio_pause(e){
          this.triggerEvent('pause',e)
        },
        audio_ended(e){
          this.triggerEvent('ended',e)
        },
        audio_timeupdate(e){
          this.triggerEvent('timeupdate',e.detail)
        },
}
});
