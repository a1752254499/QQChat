export default{
    user:function(){
        let users=[
            {
                id:1,
                chat_id:77523152,
                personality:'简简单单的午饭',
                avatar:'/static/images/9.jpg',
                register_at:new Date(),
                username:'卢本伟',
                password:'123123a',
                sex:3,
                birthday:new Date(),
                phone:18372733102,
                email:'1752254499@qq.com'
            },
            {
                id:2,
                chat_id:8645623,
                personality:'一二三四',
                avatar:'/static/images/4.jpg',
                register_at:new Date(),
                username:'马飞飞',
                password:'123123a',
                sex:3,
                birthday:new Date(),
                phone:15623512631,
                email:'23515235@163.com'
            }
        ]
        return users
    },
    news:function(){
        let newsArr=[
            {
                id:0,
                icon:'/static/images/1.jpg',
                name:'铜锣湾',
                chat:'755956895',
                email:"758213@qq.com",
                LatestNews:'玩狗:直播吃💩了,带伙们',
                time:new Date(),
                unread:10,
            },
            {
                id:1,
                icon:'/static/images/1.jpg',
                name:'玩狗',
                chat:'862551',
                email:"758213@qq.com",
                LatestNews:'🐛了',
                time:new Date(),
                unread:38,
            },
            {
                id:2,
                icon:'/static/images/2.jpg',
                name:'岛市老八',
                chat:'623154',
                email:"758213@qq.com",
                LatestNews:'一日三餐没烦恼,今天就吃老八秘制小汉堡🍔,既实惠,还管饱,臭豆腐,腐乳,加柠檬,你看这🍔做的行不行',
                time:new Date(),
                unread:1,
            },
            {
                id:3,
                icon:'/static/images/3.jpg',
                name:'带带大师兄',
                chat:'923165412',
                email:"1752254499@qq.com",
                LatestNews:'你是不是脑淤血啊,那你去找物管啊',
                time:new Date(),
                unread:1,
            },
            {
                id:4,
                icon:'/static/images/4.jpg',
                name:'金牌厨师',
                chat:'356873226',
                email:"1752254499@qq.com",
                LatestNews:'这波啊,这波是🥩🥚🌿🐥',
                time:new Date(),
                unread:3,
            },
            {
                id:5,
                icon:'/static/images/5.jpg',
                name:'抽象带篮子',
                chat:'92316452',
                email:"1752254499@qq.com",
                LatestNews:'大专人大专魂,大专都是人上人',
                time:new Date(),
                unread:0,
            },
            {
                id:6,
                icon:'/static/images/6.jpg',
                name:'RNG污渍',
                chat:'9634843',
                email:"1752254499@qq.com",
                LatestNews:'👴去洗澡了',
                time:new Date(),
                unread:2,
            },
            {
                id:7,
                icon:'/static/images/7.jpg',
                name:'退役辅助山泥若',
                chat:'662355',
                email:"1752254499@qq.com",
                LatestNews:'污渍,永远滴神~',
                time:new Date(),
                unread:0,
            },
            {
                id:8,
                icon:'/static/images/8.jpg',
                name:'斗鱼张顺飞',
                chat:'93264122',
                email:"1752254499@qq.com",
                LatestNews:'蒸馏啊,我的法克',
                time:new Date(),
                unread:0,
            },
            {
                id:9,
                icon:'/static/images/9.jpg',
                name:'QQ机器狗',
                chat:'5649756',
                email:"1752254499@qq.com",
                LatestNews:'没事吧病友',
                time:new Date(),
                unread:0,
            },
            {
                id:10,
                icon:'/static/images/10.jpg',
                name:'QQ小冰',
                chat:'6235412',
                email:"1752254499@qq.com",
                LatestNews:'没事吧病友',
                time:new Date(),
                unread:0,
            }
        ]
        return newsArr
    },
    isFriend:function(){
        let isfriend=[
            {
                userid:1,
                firend:2
            },
            {
                userid:1,
                firend:5
            },
            {
                userid:1,
                firend:6
            },
            {
                userid:1,
                firend:8
            },
        ]
        return isfriend
    },
    group:function(){
        let grouparr=[
            {
                groupId:1,
            }
        ]
    }
}