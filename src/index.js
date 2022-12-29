if ('serviceWorker' in navigator) {
    // register the service worker
    navigator.serviceWorker.register('sw.js')
        .then(registration => {
            console.log(registration);
        }).catch(error => {
            console.log("error: ", err)
        });
}