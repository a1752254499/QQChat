export default{
    //聊天时间转换
    dateTime(e){
        let old = new Date(e);
        let now = new Date();
        //消息时间
        let oY = old.getFullYear()
        let oM = old.getMonth()+1
        let oD = old.getDate()
        let od = old.getTime()
        let oh = old.getHours()
        let om = old.getMinutes()
        if(om < 10){
            om = '0' + om
        }
        //当前时间
        let nY = now.getFullYear()
        let nM = now.getMonth()+1
        let nD = now.getDate()
        let nd = now.getTime()
        let nh = now.getHours()
        let nm = now.getMinutes()

        if(oD === nD && oM === nM && oY === nY){
            // return oh+':'+om
            if(oh < 12){
                return '上午'+oh+':'+om
            }
            if(oh > 12){
                return '下午'+(oh-12)+':'+om
            }
            if(oh = 12){
                return '中午'+oh+':'+om
            }
        }
        if(oD+1 === nD && oM === nM && oY === nY){
            return '昨天'
        }else{
            return oY+'-'+oM+'-'+oD
        }
    }
}