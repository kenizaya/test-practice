const urlSearch = require('./script.js')

dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com']

describe('urlSearch tests', () => {
  it('should test if url exists in db', () => {
    expect(urlSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
  })

  it('should work with undefined and null input', () => {
    expect(urlSearch(undefined, dbMock)).toEqual([])
    expect(urlSearch(null, dbMock)).toEqual([])
  })

  it('should not return more than 3 items', () => {
    expect(urlSearch('.com', dbMock).length).toEqual(3)
  })
})
