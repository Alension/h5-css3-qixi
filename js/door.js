class Door{
    door_left=$('.door-left');
    door_right=$('.door-right');

    open=()=>{

        this.door_left.animate({
            left:'-50%'
        },1000)

        this.door_right.animate({
            left:'100%'
        },1000)
    }

    close=()=>{
        this.door_left.animate({
            left:0
        },1000)

        this.door_right.animate({
            left:'50%'
        },1000)
    }
}
