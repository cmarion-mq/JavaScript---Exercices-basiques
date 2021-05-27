answer = prompt("De quel nombre veux-tu calculer la factorielle ?")

while ((answer <= 0) || ((typeof answer!=='number' && (answer%1)!==0)))
{
    answer = prompt("Nous ne calculons une factorielle que sur un entier positif! De quel nombre veux-tu calculer la factorielle ?");
}
      
let max=answer;
for(let count = 1; count <=answer-1; count++){
    max *= count}
console.log(`Le résultat est : ${max}`)