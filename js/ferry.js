function getCost(numOfBags) {
  if(!Number.isInteger(numOfBags)){
  return 'must be a positive whole number'
  }
  if(numOfBags < 1) return 0.00
  else {
    return 0.25 * ((2 * numOfBags) - 1)
  }
}


  module.exports = {getCost}