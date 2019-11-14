window.addEventListener("load", function (event) {
    removeTwitter();
});

function removeTwitter() {

    if (window.location.href.includes("twitter")) {
        window.location.replace("http://www.google.com");
    }

    let twitterWidgets = document.getElementsByTagName("twitter-widget");
    console.log("There is " + twitterWidgets.length + " twitter widgets");
    while (twitterWidgets.length !== 0) {
        for (const widget of twitterWidgets) {
            widget.parentNode.removeChild(widget);
            twitterWidgets = document.getElementsByTagName("twitter-widget");
            console.log("There is " + twitterWidgets.length + " twitter widgets");
        }
    }

    let twitterQuotes = document.getElementsByClassName("twitter-tweet");
    console.log("There is " + twitterQuotes.length + " twitter quotes");
    while (twitterQuotes.length !== 0) {
        for (const quote of twitterQuotes) {
            quote.parentNode.removeChild(quote);
            twitterQuotes = document.getElementsByClassName("twitter-tweet");
            console.log("There is " + twitterQuotes.length + " twitter quotes");
        }
    }

    let twitterLogos = document.querySelectorAll('[data-social="twitter"]');
    console.log("There is " + twitterLogos.length + " twitter logos");
    while (twitterLogos.length !== 0) {
        for (const logo of twitterLogos) {
            logo.parentNode.removeChild(logo);
            twitterLogos = document.querySelectorAll('[data-social="twitter"]');
            console.log("There is " + twitterLogos.length + " twitter logos");
        }
    }

    let twitterClasses = document.querySelectorAll('button[class*="twitter"], div[class*="twitter"], span[class*="twitter"]');
    console.log("There is " + twitterClasses.length + " twitter classes");
    while (twitterClasses.length !== 0) {
        for (const classe of twitterClasses) {
            classe.parentNode.removeChild(classe);
            twitterClasses = document.querySelectorAll('button[class*="twitter"], div[class*="twitter"], span[class*="twitter"]');
            console.log("There is " + twitterClasses.length + " twitter classes");
        }
    }

    let twitterUrls = document.querySelectorAll('a[href*="twitter"]');
    console.log("There is " + twitterUrls.length + " twitter urls");
    while (twitterUrls.length !== 0) {
        for (const url of twitterUrls) {
            url.parentNode.removeChild(url);
            twitterUrls = document.querySelectorAll('a[href*="twitter"]');
            console.log("There is " + twitterUrls.length + " twitter urls");
        }
    }

}