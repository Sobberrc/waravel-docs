import DefaultTheme from 'vitepress/theme'
import { watch, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()
    
    const updateGuideClass = () => {
      if (typeof document === 'undefined') return
      
      const el = document.documentElement
      el.classList.remove('is-user-guide', 'is-developer-guide')
      
      if (route.path.includes('/user-guide/')) {
        el.classList.add('is-user-guide')
      } else if (route.path.includes('/developer-guide/')) {
        el.classList.add('is-developer-guide')
      }
    }

    onMounted(updateGuideClass)
    watch(() => route.path, updateGuideClass)
  }
}
