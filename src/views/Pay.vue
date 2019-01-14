<template lang="pug">
.ap-payInfo
    .payInfo-top
      .pcon
        p 申鑫支付停车场
        p.money 0.01 元
        p 未付款
    .payInfo-con
      p 应付金额：
        span 0.01元
      p 已付金额：
        span 0.00元
      p 优惠金额：
        span 0.00元
      p 车牌号码：
        span 豫A**666
      p 入场时间：
        span 2018-12-29 16:17:01
      p 停车时长：
        span 0小时25分23秒
    .payInfo-bot
      p.tis 请于付款后15分钟内离场，超时将加收停车费
      p.btn
        a( href="javascript:;" @click="tradePay(tradeNO)") 立即付款
</template>

<script>
import axios from '../axios'
export default {
  name: 'home',
  data () {
    return {
      carInfo: {},
      result: '',
      tradeNO: '',
    }
  },
  created (){
    this.getTradeNO()
  },
  methods: {
    async getTradeNO () {
      let dateObject = {
        amount: 0.01,
        userId: '2088212964881283',
      }
      const resDataPost = await axios.post('queryCarId/tradeCreate',dateObject)
      if (resDataPost.request.response.code !== '10000'){
        alert(resDataPost.request.response.msg)
        return
      }
      this.tradeNO = resDataPost.request.response.tradeNo
      console.log(this.tradeNO)
    },

    tradePay (tradeNO) {
      window.ap.call('tradePay', {
        tradeNO: tradeNO,
      }, (res) => {
        if (res.resultCode === '9000') {
          alert("成功")
        } else {
          alert("失败")
        }
        this.$router.push({name: 'card'})
      })
    }
  }
}
</script>

<style lang="sass">
@import '../sass/base/_reset'
.ap-payInfo
    background-color: #F5F5F5
    .payInfo-top
        background-color: #fff
        text-align: center
        font-size: 0.25rem
        padding: 0.3rem 0.2rem
        .pcon
            border-bottom: 1px solid #E1E4E6
            padding-bottom: 0.2rem
            p
                padding:  0.1rem
            .money
                font: bold 0.5rem/0.5rem '微软雅黑'
    .payInfo-con
        border-bottom: 1px solid #E1E4E6
        padding-top: 0.3rem
        font-size: 0.25rem
        color: #999
        padding: 0.3rem 0.4rem
        background-color: #fff
        p
            display: flex
            padding-bottom: 0.25rem
            display: flex
            span
                flex: 1
                text-align: right
                color: #333
    .payInfo-bot
        p.tis
            padding: 0.3rem 0.4rem
            color: #666
            font-size: 0.2rem
            background: url('../assets/ap-tis.png') no-repeat left center
            background-size: 0.35rem
            margin-left: 0.35rem
        p.btn
            text-align: center
            padding: 0.3rem 0.4rem
            a
                display: inline-block
                color: #fff
                background-color: #0E8FE9
                width: 100%
                font-size: 0.3rem
                line-height: 0.8rem
                height: 0.8rem
                border: none
                border-radius: 5px
</style>
