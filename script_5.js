const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
answer=true
books.forEach(b => {
    if (b.rented<1) {answer=false}
});
console.log(answer)

// Quel est livre le plus emprunté ?
console.log("Quel est livre le plus emprunté ?")
max = books.sort(function(a,b){
    return a.rented-b.rented
})
console.log(max[max.length-1].title)

// Quel est le livre le moins emprunté ?
console.log("Quel est livre le plus emprunté ?")
console.log(max[0].title)

// Trouve le livre avec l'ID: 873495
let id873495 = books.find(item => item.id === 873495);
console.log(`Le livre avec l'ID: 873495 est ${id873495.title}`)

// Supprime le livre avec l'ID: 133712
books.splice(books.findIndex(item => item.id === 133712), 1);
console.log("Ci-dessous books sans le livre à l'id 133712");
console.log(books);

// Trie les livres par ordre alphabétique
books.sort((a,b)=> {
    if (a.title < b.title) {return -1;}
    if (a.title > b.title) {return 1;}
    return 0;
})
console.log("Ci-dessous books trié par ordre alphabetique");
console.log(books);