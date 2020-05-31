const theNetherlands = {
  name: 'the Netherlands 🇳🇱',
  favoriteFood: 'cheese',
  averageHeight: 1.82,
  population: 17180000,
}

function print(country){
    const { name,favoriteFood,averageHeight,population} = country;
    console.log(`name=>${name}\n fav-food=>${favoriteFood}\n avg-height=>${averageHeight}\npopulation=>${population}`);    
}

print(theNetherlands)