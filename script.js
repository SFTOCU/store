var app1 = new Vue({
    el : "#app-1",
    data : {
        books : [
            {
                title : "book1",
                class : "class1",
                author : "author1",
                price : 1400,
                isbn : "0001",
                lectures:[
                    {
                        title : "lecture1-1",
                        youbi : "月",
                        jigen : "1"
                    },
                    {
                        title : "lecture1-2",
                        youbi : "火",
                        jigen : "1"
                    },
                    {
                        title : "lecture1-3",
                        youbi : "水",
                        jigen : "1"
                    },
                ],
                isDetail : false
                
            },
            {
                title : "book2",
                class : "class2",
                author : "author2",
                price : 1500,
                isbn : "0002",
                isDetail : false
            },
            {
                title : "book3",
                class : "class3",
                author : "author3",
                price : 1600,
                isbn : "0003",
                isDetail : false
            }
        ]
    }
});