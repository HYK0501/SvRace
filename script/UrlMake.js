let UrlMaker=document.querySelector(".URLmaker");
UrlMaker.onclick=function(){
    if(DeckCardNum==40){
        let url=deckUrl.textContent;
        for(let i=0;i<CardElements.length;i++){
            for(let j=0;j<CardElements[i].Num;j++){
                url=url+CardElements[i].code;
            }
        }
        deckUrl.textContent=url+"?lang=zh-tw";
    }
}