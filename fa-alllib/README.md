> index.js (包的入口文件)
> package.json (包的配置文件)


## 安装方式
```
  npm install a-tools
```


## 导入方式
```js
  const aTools = require('a-tools');
```

## 使用说明
```js
  // 格式化时间
  const dtStr = aTools.dataFormat(new Date());
  conslog.log(dtStr) // 2023-04-04 16:40:35

  // html转义
  const ohtmlStr = '<h1>html字符串转义</h1>'
  const nhtmlStr = aTools.htmlEscaped(ohtmlStr);
  conslog.log(nhtmlStr) // &lt;h1&gt;html字符串转义&lt;/h1&gt;

  // html反转义
  ohtmlStr = aTools.htmlUnEscaped(nhtmlStr);
  conslog.log(ohtmlStr) // <h1>html字符串转义</h1>

```

## 开源协议
ISC
