function Boy() {
    const content=$('#content')

    const contentWidth=content.width()
    const contentHeight=content.height()

   //设置boy的其实位置
    const a_background_middle=$('.a_background_middle');
    const middleY=a_background_middle.position().top+a_background_middle.height()/2
    const boy=$('#boy')
    const boyTop=middleY-boy.height()+25

    console.log(boyTop)
    boy.css({
        top:boyTop+'px'
    })

    const run=function (option,time) {
        const dfdPlay = $.Deferred();
        boy.animate(option, time, function() {
            dfdPlay.resolve()
        });
        return dfdPlay
    }

    const start=function (x,y,time) {
        time=time||3000
        const dfdPlay=run({
            left:x*contentWidth+'px',
            top:y*contentHeight+'px'
        },time)
        return dfdPlay
    }

    return {
        start:start
    }
}
