function checkspeed(speed){
    const speedlimit = 70
    const points = 5
    const pointsthreshhold =12
    if (speed <= speedlimit){
        return "ok"

    }else {
        const excessspeed =speed - speedlimit
        const pointss = Math. floor(speed / points)
        if (pointss > pointsthreshhold){
return "LICENCE CANCELED"

        }else {
            return "points" + points
        }

        }
}
const speed=parseInt ("100")//ENTER CARSPEED
checkspeed(speed)
console. log(checkspeed(speed)) 