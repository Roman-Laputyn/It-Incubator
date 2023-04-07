const generateId = () => {
  Math.floor(Math.random() * 10000);
};

const createUser = (userName, age) => {
  {
    id: generateId(), userName, age;
  }
};
