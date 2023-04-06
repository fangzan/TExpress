// 网页相关

// html转义
function htmlEscaped (htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, (match)=>{
    switch(match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}

// html反转义
function htmlUnEscaped (htmlStr) {
  return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (match)=>{
    switch(match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}

module.exports = { htmlEscaped,htmlUnEscaped }