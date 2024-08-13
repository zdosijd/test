const express = require('express')
const app = express()//建立应用对象

app.get('/ie',(request,a)=>{
    a.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
    a.send('hello，我是响应')
    }, 2000);
})
app.listen('8000',()=>{
    console.log('8000端口启动');
})
console.log('我是branch1修改的内容')
