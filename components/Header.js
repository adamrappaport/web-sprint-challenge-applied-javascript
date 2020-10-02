// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')

function header(dates, title, temp) {

    const headerDiv = document.createElement('div')
    const date = document.createElement('span')
    const hheader = document.createElement('h1')
    const temp = document.createElement('span')

    headerDiv.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    headerContainer.appendChild(headerDiv)
    headerDiv.appendChild(span1)
    headerDiv.appendChild(hheader)
    headerDiv.appendChild(span2)

    date.textContent = dates
    hheader.textContent = title
    temp.textContent = temp


    return header

}

headerContainer.append(headerDiv('MARCH 28, 2020', 'Lambda Times', '98°'))