<template>
  <div class="custom menu-wrapper">
    <Bloom-menu
      :iconImgArr="iconImgArr"
      :startAngle="-90"
      :endAngle="0"
      :itemNum="4"
      class="menu-left-corner-wrapper"
    ></Bloom-menu>
  </div>
</template>

<style>
    @import './styles/menuConfig.scss';
    .menu-wrapper{
      position: relative;
      height: 300px;
    }
</style>

<script>
  import menu from './components/Menu/menu.vue'
  // 图片的icon
  import house from './icon/house.svg'
  import datas from './icon/data.svg'
  import info from './icon/info.svg'
  import money from './icon/money.svg'

  export default {
    name:'corner',
    data() {
      return {
      }
    },
    computed: {
      iconImgArr () {
        let tmp = []
        tmp.push(this.genarateIconObj(house, 'house', '50'))
        tmp.push(this.genarateIconObj(datas, 'datas', '50'))
        tmp.push(this.genarateIconObj(info, 'info', '50'))
        tmp.push(this.genarateIconObj(money, 'money', '50'))
        return tmp
      }
    },
    methods: {
      // 分别指定图标的url ,名称， 以及background-size属性
      genarateIconObj (url, name, size) {
        let tmp = {}
        tmp.iconUrl = url
        tmp.iconName = name
        tmp.iconSize = size
        return tmp
      }
    },
    components: {
      'Bloom-menu': menu
    }
  }
</script>
