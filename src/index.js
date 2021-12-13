import x from './x.js'
import png from './assets/meidusha.png'
// console.log(png)

const div = document.getElementById('233')
console.log(div)
div.innerHTML = `
<img src="${png}">
<img src="https://img.zcool.cn/community/0148f05c76bebaa801213f269036a4.jpg@2o.jpg">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy.js') // 异步任务，会得到一个延迟对象
    promise.then((module)=>{
        const fn = module.default
        fn()
    }, ()=>{})
}
div.appendChild(button)