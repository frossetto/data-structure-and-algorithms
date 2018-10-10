var  dominoes  = require('./dominoes')
describe('Dominoes Longest Subsequent Sequence Challenge', ()  => {
  it("should return 0 when the array has 0 elements", () => {
    expect(dominoes.findLongestSequence([])).toBe(0)
  })
  it("should return 0 when the array has 1 elements", () => {
    expect(dominoes.findLongestSequence(['1-1'])).toBe(0)
  })

  it("should return the longest subsequent sequence possible of a given array", () => {
    let test1 = ['4-3', '5-1', '2-2', '1-3', '4-4']
    let test2 = ['1-1', '3-5', '5-2', '2-3', '2-4']
    expect(dominoes.findLongestSequence(test1)).toBe(2);
    expect(dominoes.findLongestSequence(test2)).toBe(3);
  })
  
})

