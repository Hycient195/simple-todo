// dummy update comment am here and go i will all
const cacheName = 'todo-cache'
const assets = [
    '/',
    '/Todo.html',
    '/Todo.js',
    '/manifest.json',
    '/bkg.png',
    '/app.js',
    '/Materialize/css/materialize.min.css',
    '/Materialize/js/materialize.min.js',
    '/Materialize/fonts/material-icons.css',
    '/Materialize/fonts/MaterialIcons-Regular.woff',
    '/Materialize/fonts/MaterialIcons-Regular.ttf'
]

/********* The install event listener *************/
self.addEventListener('install', (evt)=>{

    evt.waitUntil(
        caches.open(cacheName)
        .then( data =>{
            data.addAll(assets)
            console.log('assets have been cached')
        })
    )

})

/**************  The fetch event listener *********/
self.addEventListener('fetch', evt=>{

    evt.respondWith(
        caches.match(evt.request)
        .then( cacheRes =>{
            return cacheRes || fetch(evt.request)
            console.log('asset has been retrieves', cacheRes)
        })
        .catch(err =>{
            console.log('error encountered', err)
        })
    )

})