const ducks = [
  {
    color: 'Red',
    name: 'Jenny',
    breed: 'American Pekin',
    size: 'medium',
    temperament: 'easy',
    imageUrl: 'https://bit.ly/2xifHNR',
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
    imageUrl: 'https://bit.ly/3f2cYsU',
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
    imageUrl: 'https://bit.ly/2xYZFsE',
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
  let domString = '';
  for (let i = 0; i < duckCollection.length; i++) {
    domString += `
      <div class="duck-layout">
      <h2>${duckCollection[i].name}</h2>
      <h3>${duckCollection[i].color}
      ${duckCollection[i].breed}</h3>
      <p>- ${duckCollection[i].size} size</p>
      <p>- ${duckCollection[i].temperament} temperament</p>
      <img src="${duckCollection[i].imageUrl}">
      <p>Gender: ${duckCollection[i].gender}</p>
      <p>Age: ${duckCollection[i].age}</p>
      <p>Are you rubber? ${duckCollection[i].isRubber}</p>
      </div>
    `
  }
  printToDom('#allDucks', domString);
}

const init = () => {
  showDucks(ducks);
}

init();
