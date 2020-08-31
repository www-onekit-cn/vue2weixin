// onekit/ui/colgroup/colgroup.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    span:{type:Number,value:1},
    valign:{
      type:String,value:""
    },
    align:{type:String,value:""},
    width:{type:String,value:""},
  charoff:{type:Number,value:""}


  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
