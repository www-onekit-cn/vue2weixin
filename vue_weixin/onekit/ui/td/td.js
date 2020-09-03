// onekit/ui/td/td.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    align:{type:String,value:""},
    charoff:{type:String,value:""},
    colspan:{type:Number,value:""},
    rowspan:{type:Number,value:""},
    valign:{type:String,value:""},
    scope:{type:String,value:""},
    bgcolor:{type:String,value:""}
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
