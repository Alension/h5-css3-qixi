class Boy {
    contentWidth;
    contentHeight;
    boy = $('#boy');
    constructor() {
        const content = $('#content')
        this.contentWidth = content.width()
        this.contentHeight = content.height()

        //设置boy的其实位置
        const a_background_middle = $('.a_background_middle');
        const middleY = a_background_middle.position().top + a_background_middle.height() / 2
        const boyTop = middleY - this.boy.height() + 25

        console.log(boyTop)
        this.boy.css({
            top: boyTop + 'px'
        })
    }
    run = (option, time) => {
        const dfdPlay = $.Deferred();  //promise对象
        this.boy.transition(option, time, function () {
            dfdPlay.resolve()
        });
        return dfdPlay
    }

    start = (x, y, time) => {
        time = time || 3000
        const dfdPlay = this.run({
            left: x * this.contentWidth + 'px',
            top: y * this.contentHeight + 'px'
        }, time)
        return dfdPlay
    }

    walk2door=()=>{
        var defer = $.Deferred();

        // 开始走路
        var walkPlay = this.run({
            transform: 'translateX(' + 5 + 'px),scale(0.8,0.8)',
            opacity: 0.1
        }, 2000);
        // 走路完毕
        walkPlay.done(()=> {
            this.boy.css({
                opacity: 0
            })
            defer.resolve();
        })
        return defer;
    }

    outDoor=()=>{
        var defer = $.Deferred();
        this.boy.removeClass('person-slow').addClass('withFlower')
        // 开始走路
        var walkPlay = this.run({
            transform: 'translateX(' + 5 + 'px),scale(1,1)',
            opacity: 1
        }, 2000);
        // 走路完毕
        walkPlay.done(()=> {
            defer.resolve();
        })
        return defer;
    }
}
