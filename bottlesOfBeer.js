var bottlesOfBeer

  function singAboutBeer (bottlesOfBeer) {


    console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer, take one down, pass it around, " + (bottlesOfBeer - 1) + " bottles of beer on the wall!");
  };



for (bottlesOfBeer = 99; bottlesOfBeer > 0; bottlesOfBeer--)
{
  singAboutBeer(bottlesOfBeer);

}
