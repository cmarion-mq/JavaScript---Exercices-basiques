const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70"
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
entrepreneurs.forEach(e =>
{
    if (e.year>=1970 && e.year<=1979)
    {
        console.log(`${e.first} ${e.last}`)
    }
})

// Sors une array qui contient le prénom et le nom des entrepreneurs
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
entrepreneursB=[]
entrepreneurs.forEach(e =>
{
    entrepreneursB.push({first: e.first, last: e.last})
})

console.log(entrepreneursB)

// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.forEach(e =>
{
    console.log(`${e.first} ${e.last} devrait avoir ${2021 - e.year} ans aujourd'hui`)
})

// Trie les entrepreneurs par ordre alphabétique du nom de famille
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille")

// Méthode 1
entrepreneurs.sort((a, b) => a.last.localeCompare(b.last))

console.log("Méthode 1")
console.log(entrepreneurs)

// Méthode 2
entrepreneurs.sort(function (a,b) {
    if (a.last < b.last) {return -1;}
    if (a.last > b.last) {return 1;}
    return 0;
});
console.log("Méthode 2")
console.log(entrepreneurs)