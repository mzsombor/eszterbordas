<!--
$(document).ready(function() {

    //DEFAULT VARIABLES
    var redirect = "Sweden"
    var gallery = {
        "Sweden": {
            "title": "Sweden",
            "length": "11",
            "content": ["eszter bordas", "photography", "sweden", "fika", "malmo"]
        },
        "Nomad": {
            "title": "Nomad",
            "length": "8",
            "content": ["eszter bordas", "photography", "uad", "cluj napoca", "fashion"]
        },
        "Nora_uad": {
            "title": "Nora",
            "length": "10",
            "content": ["eszter bordas", "photography", "uad", "cluj napoca", "fashion"]
        },
        "Szovi": {
            "title": "Szovi",
            "length": "1",
            "content": ["eszter bordas", "photography"]
        },
        "Niki": {
            "title": "Niki",
            "length": "17",
            "content": ["eszter bordas", "photography"]
        },
        "Dieppe": {
            "title": "Dieppe",
            "length": "33",
            "content": ["Dieppe", "eszter bordas", "Normandy", "photography"]
        },
        "Etretat": {
            "title": "Etretat",
            "length": "24",
            "content": ["Etretat", "eszter bordas", "Normandy", "photography"]
        },
        "Trouville_Deauville": {
            "title": "Trouville Deauville",
            "length": "19",
            "content": ["Trouville_Deauville", "eszter bordas", "Normandy", "photography", "Trouville", "Deauville"]
        },
        "Fecamp": {
            "title": "Fecamp",
            "length": "31",
            "content": ["Fecamp", "eszter bordas", "Normandy", "photography"]
        },
        "Overjoyed": {
            "title": "Overjoyed",
            "length": "12",
            "content": ["overjoyed", "eszter bordas", "nora frigy", "photography"]
        },
        "Nora": {
            "title": "Nora",
            "length": "15",
            "content": ["Nora","nora frigy, eszter bordas, photography, portrait, cluj, girl"]
        },
        "Chasing_utopia": {
            "title": "Chasing Utopia",
            "length": "35",
            "content": ["Chasing utopia","utopia, paris, france, noisy-le-grand, eszterbordas, eszter, bordas, architecture, hunger games"]
        },
        "Clean": {
            "title": "Clean",
            "length": "16", 
            "content": ["Clean","clean, andrea, jablanoczki, rain, minimal, lines, eszterbordas"]
        },
        "BCN": {
            "title": "BCN",
            "length": "26",
            "content": ["BCN","BCN"]
        },
        "Anett": {
            "title": "Anett",
            "length": "28",
            "content": ["Anett","Anett"]
        },
        "Iulius_Commission": {
            "title": "Iulius Commission",
            "length": "6",
            "content": ["Iulius Commission","Iulius Commission"]
        },
        "January": {
            "title": "January",
            "length": "12",
            "content": ["January","January"]
        },
        "Bajko_Renata2": {
            "title": "Bajko Renata",
            "length": "9",
            "content": ["Bajko Renata 2","Bajko Renata 2"]
        },
        "Sea": {
            "title": "Sea",
            "length": "17",
            "content": ["Sea","Sea"]
        }
    }
    var pad = "0000"

    if (window.location.pathname.indexOf("gallery") == -1) { //if index page redirect
        window.location.replace("gallery/" + redirect);
    }

    //POPULATE head AND body
    var head = `
        <meta name="google-site-verification" content="aG-QXIUFSS-_5JlS0_wZiC5mMCGqFnH2xwLPIYTdA9A"/>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="../../src/img/logoEB.ico">
        <link rel="stylesheet" href="../../src/css/template.css">
    `
    document.head.innerHTML = head;

    var album = window.location.pathname.split("/").slice(-2,-1)[0] //album is parsed from path
    document.title = gallery[album]["title"];
    $('meta[name="description"]').attr("content", gallery[album]["content"]);
    var body = `
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-72804516-1', 'auto');
          ga('send', 'pageview');
        </script>
        <img id="img_logo" src="../../src/img/logoEB.png" alt="">
        <div id="div_side"></div>
        <div id="div_about">
            <p>Eszter is a still life & fashion photographer who currently resides in Cluj Napoca, Romania.</p>
            <img src="../../src/img/about.jpg">
            <p>She grew up in Baia Mare, Romania where she discovered her interest in photography at a very early age due to photography & other artistic backgrounds in her family. She later moved to Cluj and began studying Economics and Finance next to her ever growing passion for photography, thus being able to move to Ljubljana, Slovenia and later on to Nürtingen, Germany. Still pursuing photography, she joined the ErKE Lightpainters, this way being able to learn and shoot with professional photographers in fully equipped studios.</p>
	<p>On-off influenced by fashion, color and elegance, Eszter enjoys working with natural lights, one-on-one with designers, models and make-up artists who share the same views. Through projects with many different professional and semi-professional models over the years, she was able to gain experience on working with an unusual scene/environment. She is mostly inspired by movements, glitches and minimalistic scenery.
            </p>
            <p>email: eszterbordas@yahoo.com</p>
        </div>
        <div id="div_container">
            <div id="div_links">
                <a href="https://eszterbordas.wordpress.com" target="_blank"><img src="../../src/img/wordpress.png" alt=""></a>
                <a href="https://www.behance.net/eszterbordas" target="_blank"><img src="../../src/img/behance.png" alt=""></a>
                <a href="http://www.facebook.com/dontcrybaby" target="_blank"><img src="../../src/img/fb.png" alt=""></a>
                <a href="http://instagram.com/eszterbordas/" target="_blank"><img src="../../src/img/instagram.png" alt=""></a>
                <a href="https://twitter.com/eszterb" target="_blank"><img src="../../src/img/twitter.png" alt=""></a>
                <img id="img_about" src="../../src/img/info.png" alt="">
            </div>
        </div>
    `
    document.body.innerHTML = body;

    //DEFAULT ACTIONS
    $("#div_side").hide();
    $("#div_links").hide();
    $("#div_about").hide();

    //ELEMENT - div_container
        //populate
    for (var i = 0; i <= gallery[album]["length"]; i++) {
        var str = "" + i
        $("<img class='img_container' alt='' src='img_" + pad.substring(0, pad.length - str.length) + str + ".jpg' />").appendTo("#div_container").hide(0).delay(500).fadeIn(3000); //hide and fade in
    }
        //animate on click
    $("#div_container img").click(function(){
        if($("#div_side").is(":hidden")) { //only scroll if no menu is present
            var x = $(window).width()/2-$(this).width()/2-$(this).offset().left;
            $("#div_container").animate({scrollLeft: $("#div_container").scrollLeft()-x}, 500 );
        }
    });

    //ELEMENT - div_side
        //populate
    for (var key in gallery) {
        $("#div_side").append("<a href='../../gallery/"+ key +"/'><img src='../" + key + "/cover.jpg' alt=''></a>");
    }

    //ACTIONS
    $("#img_logo").click(function(){
        if($("#div_side").is(":visible"))
        {
            $("#div_side").hide();
            $("#div_links").hide();
            $("#div_about").hide();
            $("#div_container").css("overflowX","visible");
            $("#div_container").bind('mousewheel DOMMouseScroll', function(event){handler(event);});
        }
        else
        {
            $("#div_side").fadeIn();
            $("#div_links").fadeIn();
            $("#div_container").css("overflowX","hidden");
            $("#div_container").unbind('mousewheel DOMMouseScroll');
        }
    });
    console.log("ZM")
    $("#img_about").click(function(){
        if($("#div_about").is(":visible"))
        {
            $("#div_about").hide();
        }
        else
        {
            $("#div_about").fadeIn();
            console.log("ZM")
        }
    });
});
-->
