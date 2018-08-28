module.exports = function(){
    let random = function(){
       return Math.floor(Math.random()*255)
    },rgb=[];
   for(let i=0;i<3;i++){
        rgb.push(random())
   };
   rgb.join(',');
   return "rgb(" + rgb + ")"
}