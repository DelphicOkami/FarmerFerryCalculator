import getCost from './ferry'

describe("Given n bags, what is the cost? (assuming each ferry ride costs £0.25 and knowing the farmer does not want to return unnecessarily)",
() => {
  it("will return 0 for -1 bags", () => {
    expect(getCost(-1)).toEqual(0)
  });
  it("will return 0.00 for 0 bags", () => {
    expect(getCost(0)).toEqual(0)
  });
  it("will return 0.25 for 1 bag", () => {
    expect(getCost(1)).toEqual(0.25)
  });
  it("will return 0.75 for 2 bags", () => {
    expect(getCost(2)).toEqual(0.75)
  });
  it("will return 1.25 for 3 bags", () => {
    expect(getCost(3)).toEqual(1.25)
  });
  it("will return 'must be a positive whole number' for 2.5 bags", () => {
    expect(getCost(2.5)).toEqual('must be a positive whole number') 
  });
  it("will return 'must be a positive whole number' for 'Dave'", () => {
    expect(getCost('Dave')).toEqual('must be a positive whole number') 
  });
});

describe("Given n bags and n geese, what trips can I take?",
() => {
  it("One goose and zero corn ", () => {
    expect(getTrips(1, 0)).toEqual('Goose')
  });
  it("one goose and one corn ", () => {
    expect(getTrips(1, 1)).toEqual('Goose, nothing, corn')
  });
});

function getTrips(geese, corn){
  if(geese == 1 && corn == 1) 
  return 'Goose'
}