var stockList = new Vue({
    el : "#stocklist",
    data : {
        books : [
            {
                title : "book1",
                class : "class1",
                author : "author1",
                price : 1400,
                isbn : "0001",
                lectures : [{
                    name : "lecture1",
                    youbi : "月",
                    jigen : "１"
                }],
                isDetail : false
                
            },
            {
                title : "book2",
                class : "class2",
                author : "author2",
                price : 1500,
                isbn : "0002",
                lectures : [{
                    name : "lecture1",
                    youbi : "月",
                    jigen : "１"
                }],
                isDetail : false
            },
            {
                title : "book3",
                class : "class3",
                author : "author3",
                price : 1600,
                isbn : "0003",
                lectures : [{
                    name : "lecture1",
                    youbi : "月",
                    jigen : "１"
                }],
                isDetail : false
            }
        ]
    },
    methods : {
        addToCart : function(book){
            if(controler.cart.indexOf(book) != -1)return alert(book.title+"は既にカートに入っています。");
            if(controler.cart.length >= 5)return alert("一度に予約できるのは5冊までです。今の予約手続きを完了させてください。");
            if(confirm(book.title+"をカートに入れます。")){
                controler.cart.push(book);
                controler.totalprice += book.price;
            }
             
        }
    }
});

var controler = new Vue({
    el : "#controler",
    data : {
        filer : {
            
        },
        cart : [],
        totalprice : 0,
        whichshown : 0
    },
    methods : {
        deleteFromCart : function(book){
            if(!confirm(book.title + "をカートから削除します"))return
            this.totalprice -= book.price;
            var index = this.cart.indexOf(book);
            this.cart.splice(index,1);
        }
    }
})

for(var i = 0; i<10; i++){
    stockList.books.push({
                title : "book3",
                class : "class3",
                author : "author3",
                price : 1600,
                isbn : "0003",
                lectures : [{
                    name : "lecture1",
                    youbi : "月",
                    jigen : "１"
                }],
                isDetail : false
            });
}