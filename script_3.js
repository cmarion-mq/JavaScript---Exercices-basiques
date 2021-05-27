answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

while ((answer <= 0) || ((typeof answer!=='number' && (answer%1)!==0)))
{
    answer = prompt("Nous ne pouvons construire ta pyramide qu'a partir d'un entier strictement positif... Alors, combien d'étages veux-tu ? ");
}           
let etage="";
for(let count = 0; count <=answer-1; count++){
    etage = etage + "#";
    console.log(`${etage}`)
}
    
