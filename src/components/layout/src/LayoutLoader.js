export default {
  load (srcPath = 'http://layout.jquery-dev.com/lib/js/jquery.layout-latest.js', callback) {
    if (window.$.layout) {
      callback()
      return
    }

    window.LOADER_CALLBACKS = window.LOADER_CALLBACKS || []
    window.LOADER_CALLBACKS.push(callback)
    if (window.LOADER_PENDING) {
      return
    } else {
      const $script = window.document.createElement('script')
      $script.type = 'text/javascript'
      $script.src = srcPath
      var index = 0
      $script.addEventListener('load', () => {
        index++
        if (index === 2) {
          window.LOADER_PENDING = false
          window.LOADER_CALLBACKS.forEach(callback => {
            callback()
          })
        }
      })

      const $style = window.document.createElement('link')
      $style.type = 'text/css'
      $style.rel = 'stylesheet'
      $style.href = 'http://layout.jquery-dev.com/lib/css/layout-default-latest.css'
      $style.addEventListener('load', () => {
        index++
        if (index === 2) {
          window.LOADER_PENDING = false
          window.LOADER_CALLBACKS.forEach(callback => {
            callback()
          })
        }
      })
      window.document.body.appendChild($script)
      window.document.body.appendChild($style)
      window.LOADER_PENDING = true
    }
  }
}