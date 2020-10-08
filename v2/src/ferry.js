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
    if(geese < 0 || corn < 0) return 'Values cannot be less than zero'
    if(geese == 0 && corn == 0) return 'No trips required'
    if(geese == 0) {
      var returnString = ''
      for(var i = 0; i < corn; i++) {
        if (returnString.length > 0) {
          returnString += ', nothing, '
        }
        returnString += 'corn'
      }
      return returnString
    }
    if(corn == 0) {
      var returnString = ''
      for(var i = 0; i < geese; i++) {
        if (returnString.length > 0) {
          returnString += ', nothing, '
        }
        returnString += 'goose'
      }
      return returnString
    }
    if(geese == 1 && corn == 1) return 'goose, nothing, corn'
    if(geese == 1 && corn == 2) return 'goose, nothing, corn, goose, corn, nothing, goose'
    if(geese == 2 && corn == 1) return 'corn, nothing, goose, corn, goose, nothing, corn'
    if((geese + corn) >= 4) return 'Cannot complete without loosing corn'
  }
  

