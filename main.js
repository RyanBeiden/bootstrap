const ducks = [
  {
    color: 'Red',
    name: 'Jenny',
    breed: 'American Pekin',
    size: 'medium',
    temperament: 'easy',
    imageUrl: 'https://bit.ly/2YnInQm',
    gender: 'female',
    age: 100,
    isRubber: true
  },
  {
    color: 'Orange',
    name: 'Sarah',
    breed: 'Indian Runner',
    size: 'medium',
    temperament: 'hot',
    imageUrl: 'https://bit.ly/35dufe9',
    gender: 'female',
    age: 12,
    isRubber: false
  },
  {
    color: 'Green',
    name: 'Wendy',
    breed: 'Khaki Campbell',
    size: 'small',
    temperament: 'normal',
    imageUrl: 'https://bit.ly/3eYqQV7',
    gender: 'female',
    age: 1023,
    isRubber: true
  },
  {
    color: 'Blue',
    name: 'Larry',
    breed: 'Rouen',
    size: 'large',
    temperament: 'slow',
    imageUrl: 'https://bit.ly/3cXX2Gk',
    gender: 'male',
    age: 78,
    isRubber: false
  },
  {
    color: 'Purple',
    name: 'Beyonce',
    breed: 'Saxony',
    size: 'medium',
    temperament: 'fabulous',
    imageUrl: 'https://bit.ly/2YfVenV',
    gender: 'female',
    age: 38,
    isRubber: true
  },
  {
    color: 'Brown',
    name: 'Joe',
    breed: 'Swedish',
    size: 'large',
    temperament: 'crazy',
    imageUrl: 'https://bit.ly/2ShfrWK',
    gender: 'male',
    age: 204,
    isRubber: false
  },
  {
    color: 'Pink',
    name: 'Bob',
    breed: 'Welsh Harlequin',
    size: 'small',
    temperament: 'insane',
    imageUrl: 'https://bit.ly/2Sik6rb',
    gender: 'male',
    age: 3,
    isRubber: true
  },
  {
    color: 'White',
    name: 'Alice',
    breed: 'Crested',
    size: 'small',
    temperament: 'weird',
    imageUrl: 'https://bit.ly/2W8wxqH',
    gender: 'female',
    age: 7,
    isRubber: true
  }
];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

const showDucks = (duckCollection) => {
  let domString = '<div class="row">';
  
  for (let i = 0; i < duckCollection.length; i++) {
    const duck = duckCollection[i];
    const isRubberText = (duckCollection[i].isRubber === true) ? 'I am rubber!' : 'I am not rubber :(';
    domString += `
    <div class="card col-3 duck-layout mx-auto">
      <img src="${duck.imageUrl}" class="card-img-top" alt="${duck.name}">
      <div class="card-body">
        <h5 class="card-title">${duck.name}</h5>
        <h6 class="card-title">${duck.color}</h6>
        <p class="card-text flat-left">Size: ${duck.size}</p>
        <p class="card-text flat-right">Temperament: ${duck.temperament}</p>
        <p class="card-text flat-left">Gender: ${duck.gender}</p>
        <p class="card-text flat-right">Age: ${duck.age}</p>
        <p class="card-text flat-left">${isRubberText}</p>
      </div>
    </div>
  `;
  }

  domString += `</div>`;

  printToDom('#allDucks', domString);
}

const filterDucksEvent = (event) => {
  const buttonId = event.target.id;
  const tempDuckCollection = [];
  if (buttonId === 'all') {
    showDucks(ducks);
    return;
  } else if (buttonId === 'rubber') {
    for (let i = 0; i < ducks.length; i++) {
      if (ducks[i].isRubber === true) {
        tempDuckCollection.push(ducks[i]);
      }
    showDucks(tempDuckCollection);
    }
  } 
  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i].size === buttonId) {
      tempDuckCollection.push(ducks[i]);
    } else if (ducks[i].gender === buttonId) {
      tempDuckCollection.push(ducks[i]);
    }
  showDucks(tempDuckCollection);
  }
}

const clickEvents = () => {
  document.querySelector('#all').addEventListener('click', filterDucksEvent);
  document.querySelector('#small').addEventListener('click', filterDucksEvent);
  document.querySelector('#medium').addEventListener('click', filterDucksEvent);
  document.querySelector('#large').addEventListener('click', filterDucksEvent);
  document.querySelector('#male').addEventListener('click', filterDucksEvent);
  document.querySelector('#female').addEventListener('click', filterDucksEvent);
  document.querySelector('#rubber').addEventListener('click', filterDucksEvent);
}

const init = () => {
  showDucks(ducks);
  clickEvents();
}

init();
