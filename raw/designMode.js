javascript:(
  function(){
    function designModeOn() {
      // 触れなくさせるスタイルを適用させる
      const styleEl = document.createElement('style')
      styleEl.setAttribute("id", `${location.pathname}__style`)
      document.head.prepend(styleEl)
      styleEl.textContent = `
        html *:not(div#${location.pathname}__alert) {
          pointer-events: none !important;
        }
        div#${CSS.escape(location.pathname)}__alert {
          position: fixed;
          top: 0;
          right: 0;
          background-color: white;
          border: solid black thin;
          z-index: 99999;
          cursor: pointer;
        }
      `
      
      // 編集解除要素
      const alertEl = document.createElement('div')
      alertEl.setAttribute("id", `${location.pathname}__alert`)
      document.body.prepend(alertEl)
      alertEl.textContent = '編集解除'

      // 『編集解除』をクリックしたら編集解除する
      alertEl.addEventListener('click', designModeOff)

      // デザインモードをONにする
      document.designMode = "on"
    }

    function designModeOff() {
      const styleEl = document.querySelector(`style#${CSS.escape(location.pathname)}__style`)
      const alertEl = document.querySelector(`div#${CSS.escape(location.pathname)}__alert`)
      styleEl.remove()
      alertEl.remove()
      document.designMode = "off"
    }

    const styleEl = document.querySelector(`style#${CSS.escape(location.pathname)}__style`)
    if (styleEl === null) {
      designModeOn()
    } else {
      designModeOff()
    }
  }
)()