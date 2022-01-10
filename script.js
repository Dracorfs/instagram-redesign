const BASE_API = 'https://graph.instagram.com/me'
const ACCESS_TOKEN = 'IGQVJWRzZAMTWRqRkxXcEpQMTJTaUxlN05TekFHRXJ2bU1XVEJXeTJ3cW41Yl81c2hubWNWdU9lcEJqR1VwRk9vamVIRTR4OHFrc09qblc4Q2pQZAzhVZAFE1NjREVTgyU2FpSU5mR2ZAweVAtQWF2c3RyTQZDZD'

const username = document.getElementById('username')
const posts = document.getElementById('posts')
const photos = document.getElementById('photos')

async function getUserInfo() {
    const response = await fetch(`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`)
    const userInfo = await response.json()
    username.innerHTML = userInfo.username
    posts.innerHTML = userInfo.media_count
    return userInfo
}
getUserInfo()


async function getUserMediaInfo() {
    const response = await fetch(`${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`)
    const userMediaInfo = await response.json()
    return userMediaInfo
}
getUserMediaInfo().then(media => {
    media.data.map((mediaInfo) => {
        const img = document.createElement('img')
        /* img.style.width = '100px' */
        img.src = mediaInfo.media_url
        photos.appendChild(img)
    })
})
  