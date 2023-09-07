
 export function types (){
    if (data["types"]["0"]["type"]["name"]=="grass") {
        console.log("entrou")
    
        pokemonType.innerHTML = `Type:<span style="color: green;"> ${data["types"]["0"]["type"]["name"]}</span>`;
            
        }
 }


