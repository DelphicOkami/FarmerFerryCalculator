export function getCost(numOfBags) {
    if(!Number.isInteger(numOfBags)){
    return 'must be a positive whole number'
    }
    if(numOfBags < 1) return 0.00
    else {
      return 0.25 * ((2 * numOfBags) - 1)
    }
  }

  export function getTrips(geese, corn){
    if(geese < 0 || corn < 0) return {tripList: 'Values cannot be less than zero', trips: 0}
    if(geese == 0 && corn == 0) return {tripList: 'No trips required', trips: 0}
    if(geese == 0) {
      var returnString = ''
      var trips = 0
      for(var i = 0; i < corn; i++) {
        if (returnString.length > 0) {
          returnString += ', nothing, '
          trips++
        }
        returnString += 'corn'
        trips++
      }
      return {tripList: returnString, trips: trips}
    }
    if(corn == 0) {
      var returnString = ''
      var trips = 0
      for(var i = 0; i < geese; i++) {
        if (returnString.length > 0) {
          trips++
          returnString += ', nothing, '
        }
        trips++
        returnString += 'goose'
      }
      return {tripList: returnString, trips: trips}
    }
    if(geese == 1 && corn == 1) return {tripList: 'goose, nothing, corn', trips: 3}
    if(geese == 1 && corn == 2) return {tripList: 'goose, nothing, corn, goose, corn, nothing, goose', trips: 7}
    if(geese == 2 && corn == 1) return {tripList: 'corn, nothing, goose, corn, goose, nothing, corn', trips: 7}
    if((geese + corn) >= 4) return {tripList: 'Cannot complete without loosing corn', trips: 0}
  }
  

