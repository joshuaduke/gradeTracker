if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((registration) => console.log('SW Registered', registration))
        .catch((err)=> console.log('err', err))
}