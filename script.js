const openLink = () => {
    let link = document.querySelector (".claimOfferBut");
    link.setAttribute('href')
}

// DOM Manipulation type - classlist.toggle//
const imgToFoodItems = () => {
    //1.target img (image) i.e the 1st class
    let picture = document.querySelector('.img')
    //2. target food i.e. the 2nd class
    picture.classList.toggle('food')
}