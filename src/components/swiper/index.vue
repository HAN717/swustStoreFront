<template>
    <div class="swiperBox">
        <div id="swiper">
            <div class="imgBox">
                <div class="imgDiv" v-for="(item,index) of imgList" :key="index">
                    <img :src="item" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./index.css"
export default {
    name: 'BaseSwiper',
    props: {
        speed: Number,
        direction: String,
    },
    data() {
        return {
            imgList: [
                require('../../assets/pic/home/scenery/fj1.jpg'),
                require('../../assets/pic/home/scenery/fj2.png'),
                require('../../assets/pic/home/scenery/fj3.jpg'),
                require('../../assets/pic/home/scenery/fj5.jpg'),
                require('../../assets/pic/home/scenery/fj4.jpg'),
            ],
            timer: null,
            theSpeed: this.speed,
            imgWidth: 500,
            theDirection: this.direction,
        }
    },
    methods: {
    },
    mounted() {
        let imgBox = document.getElementsByClassName('imgBox')[0];
        //将imgBox下的图片进行拼接 循环展示图片
        imgBox.innerHTML += imgBox.innerHTML;
        let imgDiv = document.getElementsByClassName('imgDiv');
        imgBox.style.width = imgDiv.length * this.imgWidth + 'px';//设置div的宽度使图片可以放下
        let self = this;
        function autoScroll() {
            if (imgBox.offsetLeft < -(imgBox.offsetWidth / 2)) {//提前更新left值，实现循环展示
                imgBox.style.left = 0;
            }
            if (imgBox.offsetLeft > 0) {//向右滚动 提前更新left值，实现循环展示
                imgBox.style.left = -(imgBox.offsetWidth / 2) + 'px';
            }
            if (self.theDirection == 'left') { //向左滚动,值为负
                self.theSpeed = -Math.abs(self.theSpeed)
            } else { //向右滚动
                self.theSpeed = Math.abs(self.theSpeed)
            }
            // 求出总的left值，等于left值加上移动的速度（px值）
            imgBox.style.left = imgBox.offsetLeft + self.theSpeed + 'px';
        }
        this.timer = setInterval(autoScroll, 30);//全局变量 ，保存返回的定时器
    },
    beforeDestroy() {
        clearInterval(this.timer);
        this.timer = null;
    }
}
</script>
<style>
</style>
