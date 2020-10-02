// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function manyCards(headline, authorName, authorPhoto, id){

    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    authorImg.src = img 
    headLine.textContent = headline
    authorName.textContent = name

    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(authorImg)


    card.addEventListener('click', (event)=>{
        console.log( event.target.headLine)
    })


    return card

}

const cardCont = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')

.then((res) => {
   
    res.data.articles.bootstrap.forEach((data) => {
        cardCont.append(manyCards(data.authorName, data.authorPhoto, data.authorPhoto, data.id))
    });
    res.data.articles.javascript.forEach((data) => {
        cardCont.append(manyCards(data.authorName, data.authorPhoto, data.authorPhoto, data.id))
    });
    res.data.articles.jquery.forEach((data) => {
        cardCont.append(manyCards(data.authorName, data.authorPhoto, data.authorPhoto, data.id))
    });
    res.data.articles.node.forEach((data) => {
        cardCont.append(manyCards(data.authorName, data.authorPhoto, data.authorPhoto, data.id))
    });
    res.data.articles.technology.forEach((data) => {
        cardCont.append(manyCards(data.authorName, data.authorPhoto, data.authorPhoto, data.id))
    });
})

.catch(err => {
    console.log('error')
  })

