import { createApp } from 'vue'
import App from '@/App.vue'
//引入elementplus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入模板的全局样式
import '@/style/index.scss'
//配置elementplus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象:注册整个项目的全局组件
import globalComponent from '@/components'
//引入路由
import router from './router'
//引入仓库
import pinia from './store'
//获取应用实例对象

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn, //elementplus国际化
})

//安装自定义插件
app.use(globalComponent)
//安装pinia
app.use(pinia)
//引入模板路由
app.use(router)
//将应用挂载到挂载点上
app.mount('#app')
