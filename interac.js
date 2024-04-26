function onDisplay() {
    // Check if the screen width is at most 760px
    if (window.innerWidth <= 767) {
        let appCollection = document.getElementById('appsCollection');
        appCollection.classList.toggle('appsCollectionActive');
    }
}

function onDisplayHori(){
    let appCollection = document.getElementById('appsCollectionHori')
    appCollection.classList.toggle('appsCollectionHoriActive')

}