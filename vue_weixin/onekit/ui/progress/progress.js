import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],

  properties: {
    value: {
      type: Number,
      Number: 0
    },
    max: {
      type: Number,
      Number: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
