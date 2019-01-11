// 自定义模拟数字键盘组件
import numInput from './numInput.vue'

const numinput={
    install:function(Vue){
        Vue.component('numinput',numInput)
    }
}

export default numinput