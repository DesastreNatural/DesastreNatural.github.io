LESS_COMMON_WORDS_SOURCE = "https://raw.githubusercontent.com/napolux/paroleitaliane/master/paroleitaliane/660000_parole_italiane.txt";
COMMON_WORDS_SOURCE = "https://raw.githubusercontent.com/napolux/paroleitaliane/master/paroleitaliane/1000_parole_italiane_comuni.txt";

function getWords() {
    try {
        fetch(COMMON_WORDS_SOURCE).then(
            async response => {
                data = [];
                text = await response.text();
                items= text.split("\n");
                const element = document.getElementById("words");
                for(i=0;i<10;++i){
                    var item = items[Math.floor(Math.random()*items.length)];
                    const para = document.createElement("p");
                    const node = document.createTextNode(item);
                    para.appendChild(node);
                    data.push(item);
                    element.appendChild(para);
                }
                console.log(data);
            }
        )
    }
    catch(error){
        console.error(error);
    }
} ;