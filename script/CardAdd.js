let rectangles=document.querySelectorAll(".rectangle");
let deck=document.querySelector(".deck");
let cardlist=document.querySelector(".cardlist");//全部可選的卡的展示列表
let deckNumPatten=document.querySelector(".deckNum");
let DeckCardNum=0;//你卡堆目前的卡數
let CraftCardList;//職業篩選用;
let CardElements=[];//要掛在list上的卡片們;
for(let i=0;i<rectangles.length;i++){//每個長條上的數字用一個數字來記
    rectangles[i].CostUseCount=0;
}
function listcard(){
    for(let i=0;i<CraftCardList.length;i++){
        CardElements[i]=document.createElement("img");
        CardElements[i].src="image/card/"+CraftCardList[i].image;
        CardElements[i].cardname=CraftCardList[i].cardname;
        CardElements[i].type=CraftCardList[i].type;
        CardElements[i].cost=CraftCardList[i].cost;
        CardElements[i].code=CraftCardList[i].code;
        CardElements[i].Num=0;//本卡目前已放置數量
        cardlist.append(CardElements[i]);
        CardElements[i].onclick=function(){//點集圖片 新增上頭按鈕的功能
            let rectangle;//長條的變數,來帶該卡對應費數的長條
            DeckCardNum++;
            if(DeckCardNum>40){
                alert("牌組已超過40張");
                DeckCardNum--;
                return;
            }
            else {
                if(CardElements[i].Num==0){
                    CardElements[i].Num++;
                    CreatButtom(CardElements[i]);
                    rectangle=BarGraphLineSlector(CardElements[i].cost);
                    BarGraphLineAdd(rectangle); 
                    deckNumPatten.textContent="目前牌數 : "+DeckCardNum;
                }
                else if(CardElements[i].Num<3 & CardElements[i].Num>0){
                    CardElements[i].Num++;
                    let bottum=document.querySelector("."+CardElements[i].cardname);//找到那張牌的cuttum
                    bottum.textContent=CardElements[i].cost+" "+CardElements[i].cardname+"x"+CardElements[i].Num;
                    rectangle=BarGraphLineSlector(CardElements[i].cost);
                    BarGraphLineAdd(rectangle);
                    deckNumPatten.textContent="目前牌數 : "+DeckCardNum;
                }
                else{
                    alert("此牌可放數量已超過上限");
                    DeckCardNum--;
                    return;
                }
            }
        }
    }
}
function CreatButtom(card){//架上一個buttom
   let bottum=document.createElement("button");
   let renctangle;
   bottum.textContent=card.cost+" "+card.cardname+"x"+card.Num;
   bottum.className=card.cardname;
   bottum.onclick=function(){
       if(card.Num==1){
            DeckCardNum--;
            card.Num--;
            deck.removeChild(bottum);
            deckNumPatten.textContent="目前牌數 : "+DeckCardNum;
       }
       else{
            deckNumPatten.textContent="目前牌數 : "+DeckCardNum;
            DeckCardNum--;
            card.Num--;
            bottum.textContent=card.cost+" "+card.cardname+"x"+card.Num;
       }
       renctangle=BarGraphLineSlector(card.cost);
       BarGraphLineSub(renctangle);
   }
   deck.append(bottum);
}//貼到deck去
function BarGraphLineSlector(cost){//按照卡片費用選相對應的長條
    if(cost<2){
        return rectangles[0];
    }
    else if(cost>8){
        return rectangles[7];
    }
    else{
        return rectangles[cost-1];
    }
}
function BarGraphLineAdd(rectangle){//加長指定長條
    if(rectangle.CostUseCount<10){
        let height;
        height=rectangle.offsetHeight;
        rectangle.CostUseCount++;
        height=height+15;
        rectangle.style.height=height+"px";
        rectangle.textContent=rectangle.CostUseCount;
    }
    else{
        rectangle.CostUseCount++;
        rectangle.textContent=rectangle.CostUseCount;
    }
}
function BarGraphLineSub(rectangle){//減短指定長條
    if(rectangle.CostUseCount>0){
        let height;
        height=rectangle.offsetHeight;
        rectangle.CostUseCount--;
        height=height-15;
        rectangle.style.height=height+"px";
        rectangle.textContent=rectangle.CostUseCount;
    }
}