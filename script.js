const openLink = () => {
    let link = document.querySelector (".claimOfferBut");
    link.setAttribute('href')
}

// DOM Manipulation type - classlist.toggle//
const imgToFoodPrep = () => {
    //1.target img (image) i.e the 1st class
    let picture = document.querySelector('.roww')
    //2. target food i.e. the 2nd class
    picture.classList.toggle('foodPrep')
}

const imgToFoodReview = () => {
    //1.target img (image) i.e the 1st class
    let picture = document.querySelector('.roww')
    //2. target food i.e. the 2nd class
    picture.classList.toggle('foodReview')
}