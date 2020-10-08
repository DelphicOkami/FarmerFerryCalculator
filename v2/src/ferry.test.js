import {getCost, getTrips} from './ferry'

describe("Given n bags, what is the cost? (assuming each ferry ride costs £0.25 and knowing the farmer does not want to return unnecessarily)",
() => {
  it("will return 0 for -1 bags", () => {
    expect(getCost(-1)).toEqual(0)
  })
  it("will return 0.00 for 0 bags", () => {
    expect(getCost(0)).toEqual(0)
  })
  it("will return 0.25 for 1 bag", () => {
    expect(getCost(1)).toEqual(0.25)
  })
  it("will return 0.75 for 2 bags", () => {
    expect(getCost(2)).toEqual(0.75)
  })
  it("will return 1.25 for 3 bags", () => {
    expect(getCost(3)).toEqual(1.25)
  })
  it("will return 'must be a positive whole number' for 2.5 bags", () => {
    expect(getCost(2.5)).toEqual('must be a positive whole number') 
  })
  it("will return 'must be a positive whole number' for 'Dave'", () => {
    expect(getCost('Dave')).toEqual('must be a positive whole number') 
  })
})

describe("Given n geese and n corn, what trips can I take?",
() => {
  it("Minus one goose and zero corn", () => {
    expect(getTrips(-1, 0).tripList).toEqual('Values cannot be less than zero')
  })
  it("Zero geese and minus one corn", () => {
    expect(getTrips(0, -1).tripList).toEqual('Values cannot be less than zero')
  })
  it("Zero geese and zero corn", () => {
    expect(getTrips(0, 0).tripList).toEqual('No trips required')
  })
  it("Zero geese and one corn", () => {
    expect(getTrips(0, 1).tripList).toEqual('corn')
  })
  it("Zero geese and two corn", () => {
    expect(getTrips(0, 2).tripList).toEqual('corn, nothing, corn')
  })
  it("Zero geese and four corn", () => {
    expect(getTrips(0, 4).tripList).toEqual('corn, nothing, corn, nothing, corn, nothing, corn')
  })
  it("One goose and zero corn", () => {
    expect(getTrips(1, 0).tripList).toEqual('goose')
  })
  it("One goose and one corn", () => {
    expect(getTrips(1, 1).tripList).toEqual('goose, nothing, corn')
  })
  it("One goose and two corn", () => {
    expect(getTrips(1, 2).tripList).toEqual('goose, nothing, corn, goose, corn, nothing, goose')
  })
  it("One goose and three corn", () => {
    expect(getTrips(1, 3).tripList).toEqual('Cannot complete without loosing corn')
  })
  it("two goose and one corn", () => {
    expect(getTrips(2, 1).tripList).toEqual('corn, nothing, goose, corn, goose, nothing, corn')
  })
  it("two goose and one corn", () => {
    expect(getTrips(2, 2).tripList).toEqual('Cannot complete without loosing corn')
  })
  it("Four goose and zero corn", () => {
    expect(getTrips(4, 0).tripList).toEqual('goose, nothing, goose, nothing, goose, nothing, goose')
  })
})
