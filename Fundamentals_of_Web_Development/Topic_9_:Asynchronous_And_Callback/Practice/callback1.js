const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
  const userToReturn = {  
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  user = callback(userToReturn);
  console.log(user);
  }, delay());
};

getUser(userFullName); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
getUser(userNationality); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"