const urlDatabase = [
  'facebook.com',
  'reddit.com',
  'google.com',
  'amazon.com',
  'youtube.com',
  'twitter.com',
  'instagram.com',
  'linkedin.com',
  'pinterest.com',
  'pets.com',
  'tumblr.com',
  'wikipedia.org',
  'myfavoritepets.com',
  'petpictures.com',
]

const urlSearch = (input, db) => {
  const results = db.filter((url) => {
    return url.includes(input)
  })
  return results.slice(0, 3)
}

console.log(urlSearch('pets', urlDatabase))

module.exports = urlSearch
