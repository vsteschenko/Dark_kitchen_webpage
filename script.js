let selectBody = document.querySelector('body');
selectBody.style.backgroundColor = 'black';
selectBody.style.fontFamily = 'Roboto, sans-serif'
let container = document.createElement('div');
selectBody.appendChild(container);
//container.style.backgroundColor = 'white';
container.style.width = '98vw';
// container.style.height = '100vh';
container.style.height = '100%';
container.style.borderRadius = '20px';
container.style.marginTop = '10px';
container.style.marginLeft = '1%';
container.style.marginRight = '1%';
//working with head-------------------------------------------------------------------------------------------------------------------------------->
let divForHeadAndImage = document.createElement('div')
container.appendChild(divForHeadAndImage);
let divHead = document.createElement('div');
divHead.style.height = '4em';
//divHead.style.zIndex = '9';
divForHeadAndImage.appendChild(divHead);
divForHeadAndImage.style.position = 'relative';
let circle = document.createElement('div');
divHead.appendChild(circle);
let circle1 = document.createElement('div');
divHead.appendChild(circle1);
let search = document.createElement('i');
search.classList.add("fa-solid", "fa-moon");
circle.appendChild(search);
let busket = document.createElement('i');
busket.classList.add("fa-solid", "fa-basket-shopping");
circle1.appendChild(busket);
// divHead.style.border = "1px solid red";
circle.style.display = 'flex';
circle.style.alignItems = 'center';
circle.style.justifyContent = 'center';
circle.style.borderRadius = '50%';
circle.style.backgroundColor = 'rgb(232 232 225 / 69%)';
// circle.style.border = "1px solid red";
circle.style.width = "40px";
circle.style.height = "40px";
circle.style.margin = '10px';
//another circle--------------------------------------------------------------------------------------------------------------------------------------->
circle1.style.display = 'flex';
circle1.style.alignItems = 'center';
circle1.style.justifyContent = 'center';
circle1.style.borderRadius = '50%';
circle1.style.backgroundColor = 'rgb(232 232 225 / 69%)';
circle1.addEventListener('click', function() {
    if (order.style.display === 'flex') {
        order.style.display = 'none';
    } else {
        order.style.display = 'flex';
    }
});

// circle1.style.border = "1px solid red";
circle1.style.width = "40px";
circle1.style.height = "40px";
circle1.style.margin = '10px';
divHead.style.display = 'flex';
divHead.style.flexDirection = 'row';
divHead.style.justifyContent = 'space-between';
//creating div for background image khinkali yolo------------------------------------------------------------------------------------------------------->
let absoluteDiv = document.createElement('div');
absoluteDiv.classList.add('absoluteDiv');
absoluteDiv.style.position = 'absolute';
absoluteDiv.style.width = '100%';
absoluteDiv.style.height = '250px';
absoluteDiv.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpodacha-blud.com%2Fuploads%2Fposts%2F2022-06%2F1654220973_4-podacha-blud-com-p-krasivoe-foto-khinkali-foto-4.jpg&f=1&nofb=1&ipt=366cc4292c85423febc1214c7f1006c36023de7bc07b742650e15256621b87bd&ipo=images')";
absoluteDiv.style.backgroundSize = 'cover';
divForHeadAndImage.appendChild(absoluteDiv);
absoluteDiv.style.top = "0px";
absoluteDiv.style.zIndex = '-1';
absoluteDiv.style.borderTopLeftRadius = '20px';
absoluteDiv.style.borderTopRightRadius = '20px';
let randElement = document.createElement('div');
randElement.classList.add('randElement')
container.appendChild(randElement);
randElement.style.width = '100%';
randElement.style.height = '100%';
randElement.style.backgroundColor = 'white';
randElement.style.marginTop = '165px';
randElement.style.borderTopLeftRadius = '20px';
randElement.style.borderTopRightRadius = '20px';
randElement.style.padding = '10px';
// randElement.style.display = 'flex';
// randElement.style.flexWrap = 'wrap';
let categories = document.createElement('div');
randElement.appendChild(categories);
categories.style.display = 'flex';
categories.style.justifyContent = 'space-between';
categories.style.alignItems = 'center';
categories.style.width = '100%';
categories.style.height = '50px';
// categories.style.border = '1px solid red';
categories.style.borderRadius = '20px';
// category one--------------------------------------------------------------------------------------------------------->
let categoryOne = document.createElement('div');
categories.appendChild(categoryOne);
let popularLink = document.createElement('a');
popularLink.setAttribute('href', '#popular')
popularLink.innerHTML = 'Popuar';
categoryOne.appendChild(popularLink);
popularLink.style.textDecoration = 'none';
popularLink.style.width = '100%';
popularLink.style.display = 'flex';
popularLink.style.justifyContent = 'center';
popularLink.style.color = 'black';
categoryOne.addEventListener('mouseover', function() {
    categoryOne.style.cursor = 'pointer';
})
// categoryOne.innerText = 'Popular';
categoryOne.style.display = 'flex';
categoryOne.style.justifyContent = 'center';
// categoryOne.style.border = '1px solid purple';
categoryOne.style.width = '25%';
categoryOne.style.padding = '5px';
categoryOne.style.borderRadius = '10px';
categoryOne.style.backgroundColor = 'rgb(232 232 225 / 69%)';
categoryOne.style.fontWeight = '300';
categoryOne.style.fontSize = '15px';
// category two----------------------------------------------------------------------------------------------------------->
let categoryTwo = document.createElement('div');
categories.appendChild(categoryTwo);
let cheeseLink = document.createElement('a');
cheeseLink.setAttribute('href', '#cheese')
cheeseLink.innerHTML = 'Cheese';
categoryTwo.appendChild(cheeseLink);
cheeseLink.style.textDecoration = 'none';
cheeseLink.style.width = '100%';
cheeseLink.style.display = 'flex';
cheeseLink.style.justifyContent = 'center';
cheeseLink.style.color = 'black';
categoryTwo.addEventListener('mouseover', function() {
    categoryTwo.style.cursor = 'pointer';
})

categoryTwo.style.display = 'flex';
categoryTwo.style.justifyContent = 'center';
categoryTwo.style.width = '25%';
categoryTwo.style.padding = '5px';
categoryTwo.style.borderRadius = '10px';
categoryTwo.style.backgroundColor = 'rgb(232 232 225 / 69%)';
categoryTwo.style.fontWeight = '300';
categoryTwo.style.fontSize = '15px';
// category three----------------------------------------------------------------------------------------------------------->
//creeating link
let categoryThree = document.createElement('div');
categories.appendChild(categoryThree);
let dessertLink = document.createElement('a');
dessertLink.setAttribute('href', '#desserts')
dessertLink.innerHTML = 'Desserts';
categoryThree.appendChild(dessertLink);
dessertLink.style.textDecoration = 'none';
dessertLink.style.width = '100%';
dessertLink.style.display = 'flex';
dessertLink.style.justifyContent = 'center';
dessertLink.style.color = 'black';
categoryThree.addEventListener('mouseover', function() {
    categoryThree.style.cursor = 'pointer';
})

categoryThree.style.display = 'flex';
categoryThree.style.justifyContent = 'center';
// categoryThree.style.border = '1px solid purple';
categoryThree.style.width = '25%';
categoryThree.style.padding = '5px';
categoryThree.style.borderRadius = '10px';
categoryThree.style.backgroundColor = 'rgb(232 232 225 / 69%)';
categoryThree.style.fontWeight = '300';
categoryThree.style.fontSize = '15px';

let delivery = document.createElement('div');
randElement.appendChild(delivery);
delivery.style.display = 'flex';
delivery.style.justifyContent = 'left';
delivery.style.alignItems = 'center';
delivery.style.width = '100%';
delivery.style.height = '50px';
delivery.style.marginTop = '10px';
delivery.style.backgroundColor = '#beedbe';
delivery.style.borderRadius = '20px';
let divForGift = document.createElement('div');
delivery.appendChild(divForGift);
let gift = document.createElement('i');
gift.classList.add("fa-solid", "fa-gift");
divForGift.appendChild(gift);
gift.style.color = 'green';
gift.style.marginLeft = '20px';
let divForTextInDelivery = document.createElement('div');
delivery.appendChild(divForTextInDelivery);
divForTextInDelivery.innerText = 'Free delivery - on orders of 25€ or more';
divForTextInDelivery.style.color = 'green';
divForTextInDelivery.style.fontSize = '14px';
divForTextInDelivery.style.marginLeft = '20px';
// Popular----------------------------------------------------------------------------------------------------------------------------------->
let categoryOnePopular = document.createElement('h2');
categoryOnePopular.setAttribute('id', 'Popular');
randElement.appendChild(categoryOnePopular);
categoryOnePopular.innerText = 'Popular';
categoryOnePopular.style.marginTop = '5vh';
categoryOnePopular.style.fontWeight = '500';

// Plates------------------------------------------------------------------------------------------------------------------------------------->
let choiceArray = [];
const kitchenArray = [
    {
        name: "Classic Beef Khinkali",
        price_euro: 3.50,
        ingredients: ["Ground beef", "Onion", "Salt", "Black pepper", "Cilantro", "Water", "Flour"],
        grams_per_portion: 150,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fgeorgian-khinkali-with-meat_127425-356.jpg&f=1&nofb=1&ipt=404698e4ace171069351787569397ac7e41a0896f427e60c403927b0718ec32f&ipo=images'
    },
    {
        name: "Vegetarian Khinkali",
        price_euro: 3.00,
        ingredients: ["Mushrooms", "Onion", "Garlic", "Salt", "Black pepper", "Cilantro", "Water", "Flour"],
        grams_per_portion: 130,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fgeorgian-khinkali-with-meat_127425-356.jpg&f=1&nofb=1&ipt=404698e4ace171069351787569397ac7e41a0896f427e60c403927b0718ec32f&ipo=images'
    },
    {
        name: "Spicy Lamb Khinkali",
        price_euro: 4.00,
        ingredients: ["Ground lamb", "Onion", "Garlic", "Red chili flakes", "Salt", "Black pepper", "Cilantro", "Water", "Flour"],
        grams_per_portion: 160,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fgeorgian-khinkali-with-meat_127425-356.jpg&f=1&nofb=1&ipt=404698e4ace171069351787569397ac7e41a0896f427e60c403927b0718ec32f&ipo=images'
    },
    {
        name: "Chicken Khinkali",
        price_euro: 3.20,
        ingredients: ["Ground chicken", "Onion", "Garlic", "Salt", "Black pepper", "Cilantro", "Water", "Flour"],
        grams_per_portion: 140,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fgeorgian-khinkali-with-meat_127425-356.jpg&f=1&nofb=1&ipt=404698e4ace171069351787569397ac7e41a0896f427e60c403927b0718ec32f&ipo=images'
    },
    {
        name: "Spinach Khinkali",
        price_euro: 3.50,
        ingredients: ["Spinach", "Feta cheese", "Onion", "Salt", "Black pepper", "Cilantro", "Water", "Flour"],
        grams_per_portion: 135,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fgeorgian-khinkali-with-meat_127425-356.jpg&f=1&nofb=1&ipt=404698e4ace171069351787569397ac7e41a0896f427e60c403927b0718ec32f&ipo=images'
    },
    {
        name: "Adjarian Khachapuri",
        price_euro: 5.00,
        ingredients: ["Dough", "Mozzarella cheese", "Feta cheese", "Butter", "Egg"],
        grams_per_portion: 300,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdelback.pinskiy.co%2Fstorage%2Fupload%2Fimages%2F7zGI5oscKpznjh8ZynEpVW8Fejv3kyT6YiHisj51.jpg&f=1&nofb=1&ipt=af51ae961918113c9aaff70d33c535293142fc84a34760202d5ac1cabef1a59f&ipo=images'
    },
    {
        name: "Mingrelian Khachapuri",
        price_euro: 4.50,
        ingredients: ["Dough", "Mingrelian cheese", "Butter"],
        grams_per_portion: 250,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eat-me.ru%2Fwp-content%2Fuploads%2F2019%2F02%2Fxachapuri-po-megrelski.jpg&f=1&nofb=1&ipt=739aa368b0e23500651c64a12e41525117ebf6fe0b43e9c6cf0d4c019582ff06&ipo=images'
    },
    {
        name: "Imeretian Khachapuri",
        price_euro: 4.00,
        ingredients: ["Dough", "Imeretian cheese"],
        grams_per_portion: 200,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.tildacdn.com%2Ftild3465-3034-4434-b336-636263613265%2FIMG_8789-38.jpg&f=1&nofb=1&ipt=7169ca4e3541293872f1e7f71d60861334a7394aed3d325a50806e7d3bd13f30&ipo=images'
    },
    {
        name: "Ossetian Khachapuri",
        price_euro: 5.50,
        ingredients: ["Dough", "Potatoes", "Cheese", "Butter"],
        grams_per_portion: 320,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlXyUtBqKjGI%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=0e9d68133867a38161006d6e8d8902ce3c0279670dd80e0c9efaa619366e1254&ipo=images'
    },
    {
        name: "Svanetian Khachapuri",
        price_euro: 5.20,
        ingredients: ["Dough", "Svanetian cheese", "Butter"],
        grams_per_portion: 310,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.tasteatlas.com%2Fimages%2Fdishes%2F3ec4ea5dcc8d4481b5221df11685fcfa.jpg&f=1&nofb=1&ipt=f9afb755808fe6ae8d9ee665ff882c352b63725db088013df506de404cb43a01&ipo=images'
    }
];
let containerForPlates = document.createElement('div');
containerForPlates.classList.add('containerForPlates')//working here
randElement.appendChild(containerForPlates);
containerForPlates.style.width = '100%';
containerForPlates.style.height = '100%';
containerForPlates.style.marginTop = '20px'; 
containerForPlates.style.display = 'flex';
containerForPlates.style.flexWrap = 'wrap';
//total amount--------------------------------------------------------------------------------------------------------------------->
let total = 0;
//MAIN------------------------------------------------------------------------------------------------------------------------------>
let divForDish;
kitchenArray.forEach((dish) => {
    //let divForDish = document.createElement('div');
    divForDish = document.createElement('div');
    divForDish.classList.add('divForDish');
    divForDish.style.display = 'flex';
    divForDish.style.flexDirection = 'column';
    divForDish.style.justifyContent = 'start';
    divForDish.style.padding = '0px 0px 0px 5px';
    containerForPlates.appendChild(divForDish);
    divForDish.style.height = '250px';
    divForDish.style.width = '150px';
    divForDish.style.backgroundColor = '#8080804a';
    divForDish.style.margin = '11px';
    divForDish.style.borderRadius = '20px';
    let dishImage = document.createElement('div');
    divForDish.appendChild(dishImage);
    dishImage.style.marginTop = '5px';
    dishImage.style.width = '140px';
    dishImage.style.borderRadius = '20px';
    dishImage.style.height = '130px';
    dishImage.style.backgroundImage = `url(${dish.image})`;
    dishImage.style.backgroundSize = 'cover';
    dishImage.style.backgroundPosition = 'center';
    let price = document.createElement('h4');
    divForDish.appendChild(price);
    price.innerText = `${dish.price_euro}€`
    price.style.margin = '10px 0px 5px 5px';
    let nameOfDish = document.createElement('p');
    divForDish.appendChild(nameOfDish);
    nameOfDish.innerText = `${dish.name}`;
    nameOfDish.style.fontSize = '14px';
    let weightOfDish = document.createElement('p');
    divForDish.appendChild(weightOfDish);
    weightOfDish.innerText = `${dish.grams_per_portion} g`;
    weightOfDish.style.color = 'grey';
    let buy = document.createElement('div');
    divForDish.appendChild(buy);
    buy.innerText = '+';
    buy.style.height = '2em';
    buy.style.margin = '8px 5px 0px 0px';
    buy.style.borderRadius = '20px';
    buy.style.display = 'flex';
    buy.style.justifyContent = 'center';
    buy.style.alignItems = 'center';
    buy.style.fontSize = '15px';
    buy.style.backgroundColor = 'white';
    buy.addEventListener('mouseover', function() {
        buy.style.cursor = 'pointer';
    })
    buy.addEventListener('click', function() {
        choiceArray.push(dish)
        total += dish.price_euro;
        totalP.innerHTML = `Total: ${total}€`;
        console.log(dish.price_euro);
        let newPlate = document.createElement('p');
        order.appendChild(newPlate);
        newPlate.innerHTML = `${dish.name} ${dish.price_euro}€`
    })
})
// Cheese category----------------------------------------------------------------------------------------------------------------------------------->
let categoryTwoCheese = document.createElement('h2');
categoryTwoCheese.setAttribute('id', 'cheese');
randElement.appendChild(categoryTwoCheese);
categoryTwoCheese.innerText = 'Cheese';
categoryTwoCheese.style.marginTop = '5vh';
categoryTwoCheese.style.fontWeight = '500';
//creating container for cheese---------------------------------------------------------------------------------------------------------------------->
let containerForCheese = document.createElement('div');
containerForCheese.classList.add('containerForCheese')//working here
randElement.appendChild(containerForCheese);
containerForCheese.style.width = '100%';
containerForCheese.style.height = '100%';
containerForCheese.style.marginTop = '20px'; 
containerForCheese.style.display = 'flex';
containerForCheese.style.flexWrap = 'wrap';
//CHEESE---------------------------------------------------------------------------------------------------------------------------------->
const georgianCheeseArray = [
    {
        name: "Sulguni",
        price_euro: 10.00,
        description: "A semi-soft cheese with a tangy flavor and a slightly salty taste.",
        grams_per_portion: 250,
        image: 'https://thumbs.dreamstime.com/b/caucasian-suluguni-round-cheese-piece-dairy-204655944.jpg'
    },
    {
        name: "Imeretian Cheese",
        price_euro: 8.50,
        description: "A soft, white cheese with a slightly sour taste.",
        grams_per_portion: 200,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fhomemade-georgian-imeretian-cheese-wooden-board-cherry-tomatoes-walnuts-grapes-spices-fresh-141482449.jpg&f=1&nofb=1&ipt=f6f7ef97205c318e196a4c9b50d2a6cbb12fad85f23113a54ac11dd0fd972aad&ipo=images'
    },
    {
        name: "Guda Cheese",
        price_euro: 12.00,
        description: "A hard cheese with a strong, savory flavor.",
        grams_per_portion: 300,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwalnutandspice.com%2Fwp-content%2Fuploads%2F2021%2F06%2FN0A1025.jpg&f=1&nofb=1&ipt=82413476ed8089eca88fb4f0498a7a78b2643484b731c353fe9ede0127f961bb&ipo=images'
    },
    {
        name: "Gudauli Cheese",
        price_euro: 11.50,
        description: "A smoked cheese with a rich, smoky flavor.",
        grams_per_portion: 280,
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fguda.ge%2Fres%2Fimages%2Fimages%2FIMG_8824.jpg&f=1&nofb=1&ipt=ad806639bde1d93815bd8aba10e3325d88fe20928ede28847924198e78a02340&ipo=images'
    },
    {
        name: "Tushuri Cheese",
        price_euro: 9.00,
        description: "A crumbly cheese with a slightly salty taste.",
        grams_per_portion: 220,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.heinzelcheese.de%2Fwp-content%2Fuploads%2F2017%2F10%2FTushuri-kalti.jpg&f=1&nofb=1&ipt=078c6b6f55b05917a2de1bed8843777636cb025bb05a9dadefc3bd2c1c6d867c&ipo=images'
    }
];

georgianCheeseArray.forEach((dish) => {
    // let divForDish = document.createElement('div');
    divForDish = document.createElement('div');
    divForDish.classList.add('divForDish');
    divForDish.style.display = 'flex';
    divForDish.style.flexDirection = 'column';
    divForDish.style.justifyContent = 'start';
    divForDish.style.padding = '0px 0px 0px 5px';
    containerForCheese.appendChild(divForDish);
    divForDish.style.height = '250px';
    divForDish.style.width = '150px';
    divForDish.style.backgroundColor = '#8080804a';
    // divForDish.style.border = '1px solid red';
    divForDish.style.margin = '11px';
    divForDish.style.borderRadius = '20px';
    let dishImage = document.createElement('div');
    divForDish.appendChild(dishImage);
    dishImage.style.marginTop = '5px';
    dishImage.style.width = '140px';
    dishImage.style.borderRadius = '20px';
    dishImage.style.height = '130px';
    //dishImage.style.backgroundColor = 'grey';
    dishImage.style.backgroundImage = `url(${dish.image})`;
    dishImage.style.backgroundSize = 'cover';
    dishImage.style.backgroundPosition = 'center';
    let price = document.createElement('h4');
    divForDish.appendChild(price);
    price.innerText = `${dish.price_euro}€`
    price.style.margin = '10px 0px 5px 5px';
    let nameOfDish = document.createElement('p');
    divForDish.appendChild(nameOfDish);
    nameOfDish.innerText = `${dish.name}`;
    nameOfDish.style.fontSize = '14px';
    let weightOfDish = document.createElement('p');
    divForDish.appendChild(weightOfDish);
    weightOfDish.innerText = `${dish.grams_per_portion} g`;
    weightOfDish.style.color = 'grey';
    let buy = document.createElement('div');
    divForDish.appendChild(buy);
    buy.innerText = '+';
    // buy.style.border = '1px solid red';
    buy.style.height = '2em';
    buy.style.margin = '8px 5px 0px 0px';
    buy.style.borderRadius = '20px';
    buy.style.display = 'flex';
    buy.style.justifyContent = 'center';
    buy.style.alignItems = 'center';
    buy.style.fontSize = '15px';
    buy.style.backgroundColor = 'white';
    buy.addEventListener('mouseover', function() {
        buy.style.cursor = 'pointer';
    })
    buy.addEventListener('click', function() {
        choiceArray.push(dish)
        total += dish.price_euro;
        totalP.innerHTML = `Total: ${total}€`;
        console.log(dish.price_euro);
        let newPlate = document.createElement('p');
        order.appendChild(newPlate);
        newPlate.innerHTML = `${dish.name} ${dish.price_euro}€`
    })
})
// Dessert category----------------------------------------------------------------------------------------------------------------------------------->
let categoryThreeDesserts = document.createElement('h2');
categoryThreeDesserts.setAttribute('id', 'desserts');
randElement.appendChild(categoryThreeDesserts);
categoryThreeDesserts.innerText = 'Desserts';
categoryThreeDesserts.style.marginTop = '5vh';
categoryThreeDesserts.style.fontWeight = '500';
//creating container for cheese---------------------------------------------------------------------------------------------------------------------->
let containerForDesserts = document.createElement('div');
containerForDesserts.classList.add('containerForDesserts')//working here
randElement.appendChild(containerForDesserts);
containerForDesserts.style.width = '100%';
containerForDesserts.style.height = '100%';
containerForDesserts.style.marginTop = '20px'; 
containerForDesserts.style.display = 'flex';
containerForDesserts.style.flexWrap = 'wrap';
//DESSERTS---------------------------------------------------------------------------------------------------------------------------------->
const georgianDessertsArray = [
    {
        name: "Churchkhela",
        price_euro: 2.50,
        description: "A traditional Georgian candy made by threading walnuts onto a string, dipping them in thickened grape juice or honey, and drying them.",
        grams_per_portion: 100,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgotovim-doma.ru%2Fimages%2Frecipe%2Fe%2Feb%2Feeb6fe8785fbb530b5ad2939d19fd741.jpg&f=1&nofb=1&ipt=a8857c3169c967da578430b2f6e6ec2c28488110e0c2744fdfdc8df74a97fcf8&ipo=images'
    },
    {
        name: "Pelamushi",
        price_euro: 3.00,
        description: "A traditional Georgian dessert made from grape juice, corn flour, and sometimes flavored with nuts or spices.",
        grams_per_portion: 150,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcookingcounty.com%2Fwp-content%2Fuploads%2F2022%2F10%2Fgeorgian-pelamushi-750x501.jpg&f=1&nofb=1&ipt=b7c8e30fbcaf99b24189c6c54cf18a2b8aa7542c1b74ddb2d98e5684323b9916&ipo=images'
    },
    {
        name: "Tklapi",
        price_euro: 2.00,
        description: "A fruit leather made from pureed fruit that is spread thinly and dried, often served as a sweet snack.",
        grams_per_portion: 80,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ckk6TnI2T7THhRY61hsY_QHaE8%26pid%3DApi&f=1&ipt=15b736e167f27728d86fce72b65ace6f836a0df6266da9e0a79f369b511a18db&ipo=images'
    },
    {
        name: "Gozinaki",
        price_euro: 3.50,
        description: "A traditional Georgian sweet made from caramelized nuts, usually walnuts or hazelnuts, bound together with honey.",
        grams_per_portion: 120,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kuechenmomente.de%2Fwp-content%2Fuploads%2F2020%2F08%2FGozinaki_1.png&f=1&nofb=1&ipt=91041ed3d824270d77d664fa15cee8ccb3e303da5e347c26372abab041990f5c&ipo=images'
    },
    {
        name: "Napoleon Cake",
        price_euro: 4.50,
        description: "A layered puff pastry cake filled with custard cream, popular in Georgia as well as many other countries.",
        grams_per_portion: 200,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alyonascooking.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fdefault-1.jpg&f=1&nofb=1&ipt=7bb9ea5485c752a110edd908d3b15bab02941dd75c8e52771dc8bd62ee4c3337&ipo=images'
    }
];

georgianDessertsArray.forEach((dish) => {
    // let divForDish = document.createElement('div');
    divForDish = document.createElement('div');
    divForDish.classList.add('divForDish');
    divForDish.style.display = 'flex';
    divForDish.style.flexDirection = 'column';
    divForDish.style.justifyContent = 'start';
    divForDish.style.padding = '0px 0px 0px 5px';
    containerForDesserts.appendChild(divForDish);
    divForDish.style.height = '250px';
    divForDish.style.width = '150px';
    divForDish.style.backgroundColor = '#8080804a';
    divForDish.style.margin = '11px';
    divForDish.style.borderRadius = '20px';
    let dishImage = document.createElement('div');
    divForDish.appendChild(dishImage);
    dishImage.style.marginTop = '5px';
    dishImage.style.width = '140px';
    dishImage.style.borderRadius = '20px';
    dishImage.style.height = '130px';
    dishImage.style.backgroundImage = `url(${dish.image})`;
    dishImage.style.backgroundSize = 'cover';
    dishImage.style.backgroundPosition = 'center';
    let price = document.createElement('h4');
    divForDish.appendChild(price);
    price.innerText = `${dish.price_euro}€`
    price.style.margin = '10px 0px 5px 5px';
    let nameOfDish = document.createElement('p');
    divForDish.appendChild(nameOfDish);
    nameOfDish.innerText = `${dish.name}`;
    nameOfDish.style.fontSize = '14px';
    let weightOfDish = document.createElement('p');
    divForDish.appendChild(weightOfDish);
    weightOfDish.innerText = `${dish.grams_per_portion} g`;
    weightOfDish.style.color = 'grey';
    let buy = document.createElement('div');
    divForDish.appendChild(buy);
    buy.innerText = '+';
    buy.style.height = '2em';
    buy.style.margin = '8px 5px 0px 0px';
    buy.style.borderRadius = '20px';
    buy.style.display = 'flex';
    buy.style.justifyContent = 'center';
    buy.style.alignItems = 'center';
    buy.style.fontSize = '15px';
    buy.style.backgroundColor = 'white';
    buy.addEventListener('mouseover', function() {
        buy.style.cursor = 'pointer';
    })
    buy.addEventListener('click', function() {
        choiceArray.push(dish)
        total += dish.price_euro;
        totalP.innerHTML = `Total: ${total}€`;
        console.log(dish.price_euro);
        let newPlate = document.createElement('p');
        order.appendChild(newPlate);
        newPlate.innerHTML = `${dish.name} ${dish.price_euro}€`
    })
})
let footer = document.createElement('footer');
selectBody.appendChild(footer);
footer.innerText = 'All rights  not reserved';
footer.style.backgroundColor = 'white';
footer.style.marginLeft = '1%';
footer.style.marginRight = '1%'
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.padding = '5px';
footer.style.borderBottomLeftRadius = '20px';
footer.style.borderBottomRightRadius = '20px';
// working with busket------------------------------------------------------------------------------------------------------------->
let order = document.createElement('div');
order.classList.add('order');
selectBody.appendChild(order);
order.style.display = 'flex';
order.style.flexDirection = 'column';
order.style.width = '200px';
order.style.height = '30%';
order.style.backgroundColor = 'white';
order.style.position = 'absolute';
order.style.top = '10px';
order.style.right = '1%';
order.style.display = 'none';
order.style.zIndex = '-1';
order.style.borderRadius = '20px';
order.style.padding = '5px';
let totalP = document.createElement('p');
order.appendChild(totalP);
totalP.innerHTML = `Total: ${total}€`;

//DARK MODE------------------------------------------------------------------------------------------------------------------------>
const toggleDarkMode = () => {
    const selectDivForDish = document.querySelectorAll('.divForDish');
    const isDarkMode = document.body.classList.toggle('dark-mode');

    if (isDarkMode) {
        // Dark mode is activated
        randElement.style.backgroundColor = 'grey';
        footer.style.backgroundColor = 'grey';
        selectDivForDish.forEach((element) => {
            element.style.backgroundColor = 'rgb(232 232 225 / 69%)';
        });

    } else {
        // Light mode is activated
        randElement.style.backgroundColor = 'white';
        footer.style.backgroundColor = 'white';
        selectDivForDish.forEach((element) => {
            element.style.backgroundColor = 'rgb(232 232 225 / 69%)'; 
        });
    }
};
search.addEventListener('click', toggleDarkMode);
