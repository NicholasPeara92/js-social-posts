const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

// Creo il feed dove inserire i post
const feed = document.getElementById("container");


const likesArray = [];
// Creo ciclo per poter stampare nell'HTML i post presenti nell'array
for(i = 0; i < posts.length; i++){
    let singlePost = posts[i];
    const post = document.getElementById("template-post").content.cloneNode(true);
    post.querySelector(".post-meta__author").innerHTML = singlePost.author.name;
    post.querySelector(".post-meta__time").innerHTML = singlePost.created;
    post.querySelector(".post__text").innerHTML = singlePost.content;
    post.querySelector(".post__image").innerHTML = `<img src =${singlePost.media}>`
    post.querySelector(".js-likes-counter").innerHTML = singlePost.likes;
    post.querySelector(".profile-pic").src = singlePost.author.image;

    // Aggiungo evento click per il bottone like e incremento o decremento il counter dei likes ad ogni click
    const likeBtn = post.querySelector(".like-button.js-like-button");
    let likesCounter = post.querySelector(".likes__counter b");
    const postId = singlePost.id;
    likeBtn.setAttribute('data-postid', singlePost.id);
    
    likesCounter.innerHTML = singlePost.likes;
    likeBtn.addEventListener("click", function(){
        if ( likeBtn.classList.contains("like-button--liked") === false ) {
            likeBtn.classList.add("like-button--liked");
            likesCounter.innerHTML = singlePost.likes + 1;
            likesArray.push(postId);
        } else {
            likeBtn.classList.remove("like-button--liked");
            likesCounter.innerHTML = singlePost.likes;
            likesArray.splice(postId);
        }
        console.log(likesCounter)
    });

    feed.append(post);
}
console.log(likesArray);




