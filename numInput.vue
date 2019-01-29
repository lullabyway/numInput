<template>
    <div id="numInput">
        <div class="keyboardMask">
            <button id='numOne' @click="btnClickNum('one')" v-bind:class="{isNumClick: isNumOne }">{{numOne}}</button>
            <button id='numTwo' @click="btnClickNum('two')" v-bind:class="{isNumClick: isNumTwo }">{{numTwo}}</button>
            <button id='numThree' @click="btnClickNum('three')" v-bind:class="{isNumClick: isNumThree }">{{numThree}}</button>
            <button id='numFour' @click="btnClickNum('four')" v-bind:class="{isNumClick: isNumFour }">{{numFour}}</button>
            <button id='numFive' @click="btnClickNum('five')" v-bind:class="{isNumClick: isNumFive }">{{numFive}}</button>
            <button id='numSix' @click="btnClickNum('six')" v-bind:class="{isNumClick: isNumSix }">{{numSix}}</button>
        </div>
        <div class="keyboard" v-if="keyboardShow">
            <div>
                <div class="keyboard-row" v-for="(item,rows) in carNum" :key="item.id">
                    <button class="keyboard-row-item" v-for="(i) in item.name" :key="i.id" @click="btnWordClick(rows,i)">{{i}}
                    </button>
                </div>
                <div class="keyboard-row">
                    <button class="keyboard-row-item" @click="completeClick">完成</button>
                    <button  class="keyboard-row-item" @click="btnWordClick(4,0)">0</button>
                    <div class="keyboard-row-item clear" @click="clearClick">
                        删除
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () { 
    　　return {
    　　　　key: '1',
           numPlate:0,
           keyboardShow: false,
    　　　　numOne: '',
    　　　　numTwo: '',
    　　　　numThree: '',
    　　　　numFour: '',
    　　　　numFive: '',
    　　　　numSix: '',
    　　　　isNumOne: false,
    　　　　isNumTwo: false,
    　　　　isNumThree: false,
    　　　　isNumFour: false,
    　　　　isNumFive: false,
    　　　　isNumSix: false,
    　　　　carNum: [
    　　　　　　{ name: ['1', '2', '3'] },
    　　　　　　{ name: ['4', '5', '6'] },
               { name: ['7', '8', '9'] }
    　　　　]
    　　}
    },
    methods: {
        // 内容填入
    　　btnWordClick (rows, i) {
    　　　　this.selected = i
    　　　　if (this.key === 1) {
    　　　　　　this.numOne = i
    　　　　　　document.getElementById('numTwo').click()
    　　　　} else if (this.key === 2) {
    　　　　　　this.numTwo = i
    　　　　　　document.getElementById('numThree').click()
    　　　　} else if (this.key === 3) {
    　　　　　　this.numThree = i
    　　　　　　document.getElementById('numFour').click()
    　　　　} else if (this.key === 4) {
    　　　　　　this.numFour = i
    　　　　　　document.getElementById('numFive').click()
    　　　　} else if (this.key === 5) {
    　　　　　　this.numFive = i
    　　　　　　document.getElementById('numSix').click()
    　　　　} else if (this.key === 6) {
    　　　　　　this.numSix = i
               this.completeClick ()
    　　　　}　
    　　},
    　　// 输入框选择
    　　btnClickNum (name) {
    　　　　this.keyboardShow = true
    　　　　this.isNumOne = false
    　　　　this.isNumTwo = false
    　　　　this.isNumThree = false
    　　　　this.isNumFour = false
    　　　　this.isNumFive = false
    　　　　this.isNumSix = false
    　　　　if (name === 'one') {
    　　　　　　this.isNumOne = true
    　　　　　　this.key = 1
    　　　　} else if (name === 'two') {
    　　　　　　this.isNumTwo = true
    　　　　　　this.key = 2
    　　　　} else if (name === 'three') {
    　　　　　　this.isNumThree = true
    　　　　　　this.key = 3
    　　　　} else if (name === 'four') {
    　　　　　　this.isNumFour = true
    　　　　　　this.key = 4
    　　　　} else if (name === 'five') {
    　　　　　　this.isNumFive = true
    　　　　　　this.key = 5
    　　　　} else if (name === 'six') {
    　　　　　　this.isNumSix = true
    　　　　　　this.key = 6
    　　　　}
    　　　　
    　　},
    　　// 键盘点击'完成
    　　completeClick () {
    　　　　this.isNumOne = false
    　　　　this.isNumTwo = false
    　　　　this.isNumThree = false
    　　　　this.isNumFour = false
    　　　　this.isNumFive = false
    　　　　this.isNumSix = false
    　　　　this.keyboardShow = false;
            this.numPlate=this.numOne+this.numTwo+this.numThree+this.numFour+this.numFive+this.numSix;
            this.$emit('putNum',this.numPlate)
    　　},
    　　// 键盘点击'删除'
    　　clearClick () {
    　　　　if (this.key === 1) {
    　　　　　　this.numOne = ''
    　　　　} else if (this.key === 2) {
    　　　　　　document.getElementById('numOne').click()
    　　　　　　this.numTwo = ''
    　　　　} else if (this.key === 3) {
    　　　　　　document.getElementById('numTwo').click()
    　　　　　　this.numThree = ''
    　　　　} else if (this.key === 4) {
    　　　　　　document.getElementById('numThree').click()
    　　　　　　this.numFour = ''
    　　　　} else if (this.key === 5) {
    　　　　　　document.getElementById('numFour').click()
    　　　　　　this.numFive = ''
    　　　　} else if (this.key === 6) {
    　　　　　　document.getElementById('numFive').click()
    　　　　　　this.numSix = ''
    　　　　}　
        }
    }　
}
</script>
<style>
#numInput,
#numInput .keyboardMask {
    width: 100%;
}
#numInput .keyboardMask,
#numInput .keyboard-row
 {
    display: flex;
    justify-content: space-around;  
}
#numInput .keyboardMask {
    padding: 0 10px
}
#numInput .keyboardMask>button {
    width: 44px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #409eff;
    font-size: 14px;
    border-radius: 3px
}
#numInput .keyboard-row-item {
    margin-bottom: 8px;
    background-color: #fff;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    height: 50px;
    flex: 1
}
#numInput .keyboard {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 999;
    background-color: #eeeeee;
    padding: 10px 5px 0 5px;
    left: 0
}
#numInput .clear {
    text-align: center;
    line-height: 50px;
}

#numInput .ze-checkbox {
    position: relative;
    display: block;
    height: 40px;
    line-height: 40px;
}
#numInput .ze-checkbox>input {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 60px
}
#numInput .ze-checkbox>span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
}

</style>
