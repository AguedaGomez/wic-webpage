
//alert ("The language is: " + userLang);


// Translations
var language = {
    en: {
        home_subtitle: "Copernicus Women will identify, inventory, understand and gather the stories of Copernicus Women in European Regions.",
        home_button: "More About Us",
        video_presentation: "Watch Project Presentation",
        action_pretitle: "Our Action",
        action_title: "Why Women in <span>Copernicus?</span> <br> This is our mission",
        action_p:"",
        positions_title:"",
        positions_p:"",
        opportunities_title:"",
        opportunities_p:"",
        inspiration_title: "",
        inspitarion_p: "",
        survey_title:"",
        survey_p:"",
        survey_button:"",
        funding_pretitle:"",
        funding_title:"",
        funding_p:"",

    },
    es: {
        home_subtitle: "Mujeres en Copernicus (Women in Copernicus) identificará, recopilará, entenderá y le abrirá las puertas a las historias de mujeres en Copernicus en las regiones de Europa",
        home_button: "Más sobre nosotras",
        video_presentation: "Vídeo de presentación",
        action_pretitle: "",
        action_title: "Why Women in <span>Copernicus?</span> <br> This is our mission",
        action_p:"",
        positions_title:"",
        positions_p:"",
        opportunities_title:"",
        opportunities_p:"",
        inspiration_title: "",
        inspitarion_p: "",
        survey_title:"",
        survey_p:"",
        survey_button:"",
        funding_pretitle:"",
        funding_title:"",
        funding_p:"",
    },
    fr: {
        home_subtitle: "Mujeres en Copernicus (Women in Copernicus) identificará, recopilará y entenderá...",
        video_presentation: "",
        action_pretitle: "",
        action_title: "",
        action_p:"",
        positions_title:"",
        positions_p:"",
        opportunities_title:"",
        opportunities_p:"",
        inspiration_title: "",
        inspitarion_p: "",
        survey_title:"",
        survey_p:"",
        survey_button:"",
        funding_pretitle:"",
        funding_title:"",
        funding_p:"",

    },
    it: {
        home_subtitle: "Mujeres en Copernicus (Women in Copernicus) identificará, recopilará y entenderá...",
        video_presentation: "",
        action_pretitle: "",
        action_title: "",
        action_p:"",
        positions_title:"",
        positions_p:"",
        opportunities_title:"",
        opportunities_p:"",
        inspiration_title: "",
        inspitarion_p: "",
        survey_title:"",
        survey_p:"",
        survey_button:"",
        funding_pretitle:"",
        funding_title:"",
        funding_p:"",

    },
    el: {
        home_subtitle: "Mujeres en Copernicus (Women in Copernicus) identificará, recopilará y entenderá...",
        video_presentation: "",
        action_pretitle: "",
        action_title: "",
        action_p:"",
        positions_title:"",
        positions_p:"",
        opportunities_title:"",
        opportunities_p:"",
        inspiration_title: "",
        inspitarion_p: "",
        survey_title:"",
        survey_p:"",
        survey_button:"",
        funding_pretitle:"",
        funding_title:"",
        funding_p:"",

    }
}

var subtitle = document.getElementById("home_subtitle");
var home_button = document.getElementById("home_button");
var video_presentation = document.getElementById("video_presentation");
var action_pretitle = document.getElementById("action_pretitle");
var action_title = document.getElementById("action_title");
var action_p = document.getElementById("action_p");
var positions_title = document.getElementById("positions_title");
var positions_p = document.getElementById("positions_p");
var opportunities_title = document.getElementById("opportunities_title");
var opportunities_p = document.getElementById("opportunities_p");
var inspiration_title = document.getElementById("inspiration_title");
var inspitarion_p = document.getElementById("inspiration_p");
var survey_title = document.getElementById("survey_title");
var survey_p = document.getElementById("survey_p");
var survey_button = document.getElementById("survey_button");
var funding_pretitle = document.getElementById("funding_pretitle");
var funding_title = document.getElementById("funding_title");
var funding_p = document.getElementById("funding_p");
let texts = [subtitle, home_button, video_presentation, action_pretitle, action_title, action_p, positions_title, positions_p, opportunities_title, opportunities_p, inspiration_title, inspitarion_p,
survey_title, survey_p, survey_button, funding_pretitle, funding_title, funding_p];

changeLanguague();
chooseLanguage();

function chooseLanguage() {
    if (location.hash) {
        console.log(location.hash);
        texts.forEach(element => {
            var language_text = "language." + location.hash.slice(1) + "." + element.id;
            console.log(language_text);
            element.innerHTML= eval(language_text);
        });
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    console.log("chooselanguage");
}

function changeLanguague() {
    var lang = window.location.pathname.split("#")[1];
    if (lang=="") {
        var userLang = navigator.language || navigator.userLanguage;
        location.hash = "#" + userLang.slice(0,2);
    }
}