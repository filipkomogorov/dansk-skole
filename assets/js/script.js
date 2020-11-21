let wordsLink = document.getElementById('card');

wordsLink.onmouseover = function(){
    document.body.style.cursor = "pointer";
}

wordsLink.onmouseleave = function(){
    document.body.style.cursor = "default";
}

wordsLink.onclick = function(){
    location.href = "words.html";
}