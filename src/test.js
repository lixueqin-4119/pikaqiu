import string from'./css.js' //string代指导出的string，可随意起名

//声明5个变量  

//声明对象
const player={
    id:undefined,//4个属性
    time:100,
    ui:{
        demo:document.querySelector('#demo'),
        demo2:document.querySelector('#demo2') 

    },
    n:1,
    events:{//1个事件
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
     },
    init:()=>{//8个方法
        player.ui.demo.innerHTML=string.substr(0,player.n)
        player.ui.demo2.innerText=string.substr(0,player.n)  
        player.bindEvents()
        player.play();
    },
     bindEvents:()=>{
            for(let key in player.events){
                if(player.events.hasOwnProperty(key)){
                    const value=player.events[key]//pause/play/slow
                    document.querySelector(key).onclick=player[value]
                }
            }
        },
    run:()=>{
        player.n += 1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return //内容已展示完毕，下面不需要再执行了
        }
        //console.log(n+':'+string.substr(0,player.n))
        player.ui.demo.innerHTML=string.substr(0,player.n)
        player.ui.demo2.innerText=string.substr(0,player.n)
    //console.log(n)
    player.ui.demo.scrollTop=player.ui.demo.scrollHeight
    },
    play:()=>{//每次调用play时都会把play的返回值给id，无一例外，说明可以内置这个功能.将所有的id=删掉
        player.id=setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time=300
        player.play()//每次调用play时都会把play的返回值给id
    },
    normal:()=>{
        player.pause()
        player.time=100
        player.play()
    },
    fast:()=>{
        window.clearInterval(player.id)
        player.time=0
        player.play()
    }
}

//初始化
player.init()