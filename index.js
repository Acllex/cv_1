let word = document.getElementById('word');

let n = 0;
let str = `/* 你好，我叫Acllex
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个阴阳鱼眼 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 最后，让八卦动起来 */
@keyframes bagua {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
}
#div1 {
    animation: bagua 12s linear -1s infinite normal;
}
`;

let ac_str = str.substring(0,n);

let fn = ()=>{
    setTimeout(()=>{
        word.innerHTML = ac_str;
        style.innerHTML = str.substring(0,n);
        if (str[n] === '\n') {
            ac_str += '<br/>'
        }else if (str[n] === ' ') {
            ac_str += '&nbsp;'
        }else{
            ac_str += str[n];
        }
        n++;
        word.scrollTop = word.scrollHeight
        window.scrollTo(0,document.body.scrollHeight)
        if (n-1 < str.length) {
            fn();
        }
    }, 10)
}
fn();