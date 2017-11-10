var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.get('/scence', function (req, res) {
    res.set({
        'Access-Control-Allow-origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET'
    });
    res.json({
        purchase: '立即购买',
        cart: '加入购物车'
    });
    // res.json({
    //     s1: {
    //         title: '关于西安',
    //         src: 'https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/maps/services/thumbnails?width=525&height=295&quality=100&align=middle,middle&src=http://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/8694a4c27d1ed21b32308dcbac6eddc451da3f26.jpg',
    //         desc: '大家印象： 西安历史文化底蕴深厚，同时也是时尚的现代化大都市。兵马俑十分壮观，古城很雄伟，明城墙保存的非常好，钟鼓楼后面的回民小吃街有很多美食。但是节假日期间人很多。',
    //         location: '景点类型：海边',
    //         best: '最佳季节：3-5月，9-10月...',
    //         recommend: '建议游玩：3-5天'
    //     },
    //     s2: {
    //         title: '关于南京',
    //         src: 'https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/maps/services/thumbnails?width=525&height=295&quality=100&align=middle,middle&src=http://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/e824b899a9014c08b70c58040a7b02087bf4f458.jpg',
    //         desc: '大家印象： 是一个美丽的城市，历史底蕴深厚，自然景观和人文景观都很不赖，有很多很好看的地方能够领略到浓郁的文化气息。总统府印象深刻，夜游秦淮河也很不错。但是人太多，空气质量也不好。',
    //         location: '景点类型：南京',
    //         best: '最佳季节：3-5月，9-10月...',
    //         recommend: '建议游玩：3-5天'
    //     },
    //     s3: {
    //         title: '关于北京',
    //         src: 'https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/maps/services/thumbnails?width=525&height=295&quality=100&align=middle,middle&src=http://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/58ee3d6d55fbb2fb2927a1b34f4a20a44623dc07.jpg',
    //         desc: '大家印象： 北京文化底蕴深厚，是一个古典与现代结合的城市。旅游资源十分丰富，景色都很宏伟壮观。北京的交通和购物都很方便，也有很多美食，小吃和北京烤鸭好吃，雾霾比较严重，空气质量不行。',
    //         location: '景点类型：北京',
    //         best: '最佳季节：9月-10月',
    //         recommend: '建议游玩：5-7天'
    //     },
    //     s4: {
    //         title: '关于深圳',
    //         src: 'https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/maps/services/thumbnails?width=525&height=295&quality=100&align=middle,middle&src=http://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/908fa0ec08fa513dd0236dad3a6d55fbb2fbd93c.jpg',
    //         desc: '大家印象： 深圳人的生活节奏很快，非常美丽的城市。深圳的道路比较宽阔，交通方便，规划很好。这里可以感受大都市的繁华和繁忙。世界之窗是不错的地方，气候也很适合居住。经济高度发达。',
    //         location: '景点类型：深圳',
    //         best: '最佳季节：12-3月。游深圳四...',
    //         recommend: '建议游玩：4-5天'
    //     },
    //     s5: {
    //         title: '关于天津',
    //         src: 'https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/maps/services/thumbnails?width=525&height=295&quality=100&align=middle,middle&src=http://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/e824b899a9014c086b0804040a7b02087bf4f45b.jpg',
    //         desc: '大家印象： 天津有很多欧式建筑，能感受到浓郁的异域风情。风景不错，意大利风情区和五大道都值得走走看看。美食更是独树一帜，很有特色，推荐煎饼果子、狗不理包子和十八街麻花，还能吃到海鲜。',
    //         location: '景点类型：天津',
    //         best: '四季皆宜。春游盘山、...',
    //         recommend: '建议游玩：2-3天'
    //     }
    // });
});

var server = app.listen(3001, function () {
var host = server.address().address;
var port = server.address().port;
});
