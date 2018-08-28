const random = require('./public/randomFunc.js')


module.exports = function () {
    let tips = "hello,webpack" ,wrap = document.createElement('div');
    wrap.className="wrap";
    if(tips.length){
        for(let i = 0;i<tips.length;i++){
            let a = document.createElement("div") ;
            a.innerHTML = tips[i];
            setInterval(function(){
                a.style.transform = "translateY("+Math.floor(Math.random()*50) +"px)";
                a.style.transform = "translateX("+Math.floor(Math.random()*20) +"px)";
                a.style.color = random();
                $("#root").css({
                    'borderColor':random()
                }) ;
            },150)
            
            wrap.append(a);
        }
    }
    return wrap;
};
