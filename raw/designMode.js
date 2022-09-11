javascript:(
  function(){
    function designModeOn() {
      const styleEl = document.createElement('style')
      styleEl.setAttribute("id", `${location.pathname}`)
      document.head.appendChild(styleEl)
      styleEl.textContent = 'html * {pointer-events: none !important;}'
      document.designMode = "on"
    }
    const styleEl = document.querySelector(`div#${CSS.escape(location.pathname)}`)
    if (styleEl === null) {
      designModeOn()
    } else {
      styleEl.remove()
    }
  }
)()