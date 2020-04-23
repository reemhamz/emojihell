// Create app namespace to hold all methods
const app = {};

// Collect user input
app.collectInfo = function () {
    const hell = ["☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️", "💥", "🔥", "☄️",];
    
    const heaven = ["💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈","💫", "⭐", "☀️", "🌈",];

    

    

    const newPositions = () => {
        const h = $(window).height() - 50;
        const w = $(window).width() - 50;

        const nh = Math.floor(Math.random() * h);
        const nw = Math.floor(Math.random() * w);
        
        return [nh, nw];
    }

    
    const animateEmojis = (c) => {
        const moveAround = newPositions();
        $(c).animate({
            top: moveAround[0],
            left: moveAround[1],
        },1000, function () {
            animateEmojis(c);
        })
        
    }

    

    $('#heavenButton').click(function () {
        $('.hellEmoji').hide()
        $('body').css({
            "background-color": "#FAACA8",
            "background-image": "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)"
        });
        heaven.map((heavenEmoji,index) => {
        const heavenEmojiTag = `<span class="heavenEmoji">${heavenEmoji}</span>`;
        $('.heaven').append(heavenEmojiTag)
        console.log(heavenEmoji, index)
        $('.heavenEmoji').each(function (index) {
            $(this).addClass(`.uniqueEmoji${index}`)
        })
    })


        $('.heavenEmoji').each(function () {
        animateEmojis($(this))
    })
    
    const hoverEffect = (c) => {
        $('.heavenEmoji').hover(function () {
            $(c).animate({
                top: 0,
                left: 0
            }, function () {
                hoverEffect(c)
            })
        })
        
    }
    })

    $('#hellButton').click(function () {
        $('.heavenEmoji').hide();

        $('body').css({
            "background-image": "radial-gradient( circle farthest-corner at 0.2% 1.8%,  rgba(255,90,8,1) 0%, rgba(88,0,0,1) 100.2% )"
        })

        hell.map((hellEmoji,index) => {
        const hellEmojiTag = `<span class="hellEmoji">${hellEmoji}</span>`;
        $('.hell').append(hellEmojiTag)
        console.log(hellEmoji, index)
        $('.hellEmoji').each(function (index) {
            $(this).addClass(`.uniqueEmoji${index}`)
        })
        })
        
        $('.hellEmoji').each(function () {
        animateEmojis($(this))
    })
    
    const hoverEffect = (c) => {
        $('.hellEmoji').hover(function () {
            $(c).animate({
                top: 0,
                left: 0
            }, function () {
                hoverEffect(c)
            })
        })
        
    }
    })
};


// Start app
app.init = function () {
    app.collectInfo();
};

$(document).ready(function () {
    app.init();
});

