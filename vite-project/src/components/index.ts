import SvgIcon from './SvgIcon/index.vue'
import Paginition from './Paginition/index.vue'
//全局对象
const allGlobalComponent: any = { SvgIcon, Paginition }

//对外暴露插件对象
export default {
  install(app) {
    //注册项目全部都全局组建
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  },
}
