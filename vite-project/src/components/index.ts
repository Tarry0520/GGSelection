import SvgIcon from './SvgIcon/index.vue'
import Paginition from './Paginition/index.vue'
//引入element-plus提供的全部都图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局对象
const allGlobalComponent: any = { SvgIcon, Paginition }

//对外暴露插件对象
export default {
  install(app) {
    //注册项目全部都全局组建
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
    //将elementplus提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
