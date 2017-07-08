# angular2-otthon-app
Nyugdíjas otthon kezelő példa alkalmazás

## Hasznos linkek
* [Observables használata](https://angular-2-training-book.rangle.io/handout/observables/using_observables.html)

## NodeJS szerver két hónapig ingyen
> Ha ezen a linken regisztrálsz a DigitalOcean rendszerében, akkor kapsz $10 kreditet. A legolcsóbb NodeJS szerver $5 havonta, így két hónapig használhatod.  
https://m.do.co/c/68bcce6d6f8f

## NodeJS szerver használata
* `cd server`
* `node server`
* ha új modellt akarsz kiszolgálni, vegyék fel egy azonos nevű .json fájlt 
a server.js mappájába, ezzel a tartalommal: `[]`

## Alkalmazás publikálása
* `ng build --prod`
* másoljuk az dist mappa tartalmát a kívánt végleges helyre
* a kiszolgálást az index.html fájllal kezdjük
* módosítsjuk az index.html fájlban a base értékét, ha nem a gyökér url-en fut 
az alkalmazás
