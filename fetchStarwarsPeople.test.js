const fetch = require('node-fetch')
const swapi = require('./fetchStarwarsPeople')

describe('fetchStarwarsPeople tests', () => {
  it('calls swapi to get people', () => {
    expect.assertions(2)
    return swapi.getPeopleAsync(fetch).then((data) => {
      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(5)
    })
  })
})
