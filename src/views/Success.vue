<template lang="pug">
.pay-success
  .con
    span.alipay
    h3 支付成功
    span 5.00
    p 请于15分钟内离场，超时将加收停车费
</template>

<script>
export default {
  name: 'home',
  created (){
    document.title = '结果详情'

  },


}
</script>

<style lang="sass">

@import '../sass/base/_reset'
.pay-success
    background-color: #F5F5F5
    display: flex
    width: 7.5remrem
    .con
        background: #fff
        width: 7.5rem
        text-align: center
        padding-top: 1rem
        display: flex
        flex-direction: column
        align-items: center
        span.alipay
          width: 1.2rem
          height: 1.2rem
          background: url("../assets/alipay.png") no-repeat
          background-size: 1.2rem 1.2rem
        h3
          font: bold 0.3rem/0.8rem '微软雅黑'
          color: #0BA4EA
        span
          padding:  0.1rem 0.2rem
          font: bold 0.45rem/0.8rem '微软雅黑'
          color: #333
        p
          font: bold 0.25rem/0.8rem '微软雅黑'
          color: #999
</style>
