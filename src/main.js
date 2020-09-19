:root{
    --bg-switch: hsl(230, 17%, 14%);
    --bg-header: hsl(232, 19%, 15%);
    --bg-body: hsl(230, 17%, 14%);
    --bg-card: hsl(228, 28%, 20%);
    --bg-card-hover:#333a56;
    --border-facebook: hsl(208, 92%, 53%);
    --border-twitter: hsl(203, 89%, 53%);
    --border-instagram: linear-gradient(90deg, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%);
    --border-youtube: hsl(348, 97%, 39%);
    --color-activity: hsl(163, 72%, 41%);
    --title-color: hsl(0, 0%, 100%);
    --text-color: hsl(228, 34%, 66%);
    --icon-url: '';
    --width: 1140px;
    --color-green: hsl(163, 72%, 41%);
    --color-red: hsl(356, 69%, 56%);
    --facebook-icon:  url(../images/icon-facebook.svg);
    --twitter-icon: url(../images/icon-twitter.svg);
    --instagram-icon: url(../images/icon-instagram.svg);
    --youtube-icon: url(../images/icon-youtube.svg);
}

*, *::before, *::after{
    box-sizing: border-box;
}
html{
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
}
body{
    margin: 0;
    min-height: 100%;
    background-color: var(--bg-body);
    color: var(--text-color);
    transition: background-color 0.8s;
}
body::before{
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 240px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: var(--bg-header);
    transition: background-color 0.8s; 
}
.header{
    width: var(--width);
    margin: auto;
    position: relative;
}
.header__title, .title{
    color: var(--title-color);
    font-size: 28px;
    padding: 0;
    margin-top: 34px;
    font-weight: 700;
}
.header__subtitle{
    padding: 0;
    margin: 0;
    position: relative;
    top: -15px;
    font-size: 14px;
    font-weight: 700;
}
.header__theme{
    display: flex;
    position: absolute;
    top: 10px;
    right: 0;
}
.checkbox{
    display: none;
}
.theme__text{
    margin-top: 5px;
    font-weight: 700;
}
.theme__switch{
    position: relative;
    display: block;
    background: linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%);
    width: 48px;
    height: 24px;
    border-radius: 25px;
    cursor: pointer;
    margin-left: 10px;
    transition: background 0.5s; 
}
.theme__switch::before{
    content: '';
    display: block;
    background-color: var(--bg-switch);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 2px;
    transform: translateX(0);
    transition: transform 0.5s, background-color 1s; 
}
.theme__switch:focus, .theme__switch::before:focus{
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.theme__switch:hover.theme__switch::before{
    background-color: var(--bg-card-hover);
}
.checkbox:checked + .theme__switch::before{
    transform: translateX(24px);
    --bg-switch: hsl(0, 0%, 100%);
}
.checkbox:checked + .theme__switch{
    background: hsl(230, 22%, 74%);
}
.cards-container{
    width: var(--width);
    margin: auto;
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-wrap: wrap;
}
.card{
    width: 254px;
    height: 216px;
    background-color: var(--bg-card);
    overflow: hidden;
    border-radius: 5px;
    position: relative;
    margin-top: 30px;
    transition: background-color 0.5s; 
}
.card, .overview{
    cursor: pointer;
}
.card:hover, .overview:hover{
    background-color: var(--bg-card-hover);
}
.card--facebook::before, .card--twitter::before, 
.card--instagram::before, .card--youtube::before  {
    content: '';
    width: 340px;
    height: 4px;
    position: absolute;
    top:0;
    left:0;
}
.card--facebook::before{
    background-color: var(--border-facebook);
}
.card--twitter::before{
    background-color: var(--border-twitter);
}
.card--instagram::before{
    background: var(--border-instagram);
}
.card--youtube::before{
    background-color: var(--border-youtube);
}
.card__account{
    position: relative;
    display: inline-block;
    padding-left: 28px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 33px;
    height: 24px;
    letter-spacing: -1px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: top left;
    transition: color 0,8s; 
}   
.card__account--facebook, .overview__text--facebook{
    background-image: var(--facebook-icon);
} 
.card__account--twitter, .overview__text--twitter{
    background-image: var(--twitter-icon);
} 
.card__account--instagram, .overview__text--instagram{
    background-image: var(--instagram-icon);
}
.card__account--youtube, .overview__text--youtube{
    background-image: var(--youtube-icon);
}
 .card__numbers{
    display: block;
    width: 90%;
    text-align: center;
    color: var(--title-color);
    margin: auto;
    margin-top: 13px;
    font-weight: 700;
    font-size: 56px;
    letter-spacing: -3px;
    transition: color 0,8s; 
 }
 .card__type{
    display: block;
    text-transform: uppercase;
    width: 90%;
    text-align: center;
    margin: auto;
    font-size: 13px;
    margin-top: -2px;
    letter-spacing: 4px;
    transition: color 0,8s; 
 }
 .card__today{
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 25px;
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 10px;
    font-size: 12px;
    font-weight: 700;
 }
.green{
    color: var(--color-green);
    background-image: url(../images/icon-up.svg);
}
.red{
    color: var(--color-red);
    background-image: url(../images/icon-down.svg);
}
.title{
    width: var(--width);
    margin: auto;
    margin-top: 42px;
    font-size: 25px;
}
.overviews-container{
    width: var(--width);
    margin: auto;
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-wrap: wrap;
}
.overview{
    width: 256px;
    height: 125px;
    background-color: var(--bg-card);
    border-radius: 5px;
    position: relative;
    margin-top: 24px;
    transition: background-color 0.8s; 
}
.overview__text{
    display: block;
    width: 212px;
    margin-left: 9%;
    height: 20px;
    margin-top: 28px;
    font-weight: 700;
    background-repeat: no-repeat;
    background-position: right center;
    transition: color 0,8s; 
}
.overview__numbers{
    display: inline-block;
    position: absolute;
    left: 9%;
    bottom: 20px;
    color: var(--title-color);
    font-size: 32px;
    font-weight: 700;
    transition: color 0,8s; 
}
.overview__variation{
    display: inline-block;
    position: absolute;
    bottom: 26px;
    right: 0;
    text-align: left;
    margin-right: 8%;
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 10px;
    font-size: 12px;
    font-weight: 700;
}
.attribution{
    position: relative;
    width: 100%;
    left:0;
    bottom: 0;
    text-align: center;
    margin-top: 40px;
    font-size: 9px;
    padding: 10px;
    background-color: var(--bg-header);
}
.attribution a{
    text-decoration: none;
    color: var(--text-color);
    text-decoration: underline;
}
@media screen and (max-width: 1159px) {
    :root{
        --width: 570px;
    }
}
@media screen and (max-width: 680px) {
    :root{
        --width: 326px;
    }
    body::before{
        height: 235px;
    }
    .header{
        width: 326px;
        position: relative;
        margin-top: 20px;
    }
    .header__title, .title{
        font-size: 25px;
        margin-top: 33px;
    }
    .header__subtitle{
        padding: 0;
        margin: 0;
        position: relative;
        top: -11px;
        font-size: 14px;
        font-weight: 700;
    }
    .header__theme{
        width: 100%;
        display: flex;
        position: relative;
        margin-top: 2px;
        padding-top: 15px;
        border-top: 1px solid var(--text-color);
        justify-content: space-between;
    }
    .cards-container{
        margin-top: 27px;
    }
    .card{
        margin-top: 24px;
        width: 326px;
    }
    .title{
        margin-top: 46px;
    }
    .overviews-container{
        margin-top: 11px;
    }
    .overview{
        width: 326px;
        margin-top: 16px;
    }
}
@media screen and (min-width: 1160px) {
    :root{
        --width: 1140px;
    }
    .attribution{
        position: absolute;
    }
}
