//adicionando evento do click no elemento de id video
document.getElementById('videos').addEventListener('click', function(){
    document.getElementById('vid').scrollIntoView({
        behavior:"smooth"
    })
})

//adicionando evento do click no elemento de id "youtube"
document.getElementById('youtube').addEventListener('click', function(){
    window.open("https://youtube.com/@olucaocarvalho?si=QmZYDwHK65o3VqgZ")
})