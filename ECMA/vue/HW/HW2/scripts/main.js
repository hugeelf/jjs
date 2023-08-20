const vue = new Vue({
    el: '#app',
    data: {
        logoLink: './img/logo.svg',
        links:[
            {id: 1, name: 'Home', address: './index.html'},
            {id: 2, name: 'Projects', address: '#'},
            {id: 3, name: 'Blog', address: '#'},
        ],
        news:[
            {id: 1, img: './img/news_1.jpg', category:'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022 '},
            {id: 2, img: './img/news_2.jpg', category:'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas', date: '22 December,2022 '},
            {id: 3, img: './img/news_3.jpg', category:'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022 '},
            {id: 4, img: './img/news_4.jpg', category:'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022 '},
            {id: 5, img: './img/news_5.jpg', category:'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas', date: '22 December,2022 '},
            {id: 6, img: './img/news_6.jpg', category:'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022 '},
        ],
        post: {id:1, img:'./img/post_1.jpg', title: 'Low Cost Latest Invented Interior Designing Ideas', shortDescription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', mainThing: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.', date: '26 December,2022 '}
        
    },
})