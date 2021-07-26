let CarftBottum=document.querySelectorAll(".craft");
let deckUrl=document.querySelector(".deckURL");
for(let i=0;i<CarftBottum.length;i++){
    CarftBottum[i].onclick=function(){
        let TypeCardNum=0;
        CraftCardList=[];
        for(let j=0;j<cards.length;j++){
            if(cards[j].type==(i+1)|cards[j].type==9){
                CraftCardList[TypeCardNum]=cards[j];
                TypeCardNum++;
            }
        }
        while(deck.firstChild){
            deck.removeChild(deck.firstChild);
        }
        deck.textContent="牌組";
        while(cardlist.firstChild){
            cardlist.removeChild(cardlist.firstChild);
        }
        DeckCardNum=0;
        deckNumPatten.textContent="目前牌數 : "+DeckCardNum;
        ResetBarGraph();
        listcard();
        deckUrl.textContent="https://shadowverse-portal.com/deck/3."+(i+1);
    }
}
function ResetBarGraph(){
    for(let i=0;i<rectangles.length;i++){
        rectangles[i].textContent=0;
        rectangles[i].style.height="0px";
    }
}