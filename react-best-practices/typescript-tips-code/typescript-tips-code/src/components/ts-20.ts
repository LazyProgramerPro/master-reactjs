const aFunction = () => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;

  if (randomNumber === 10) return "Yesss!";
  if (randomNumber === 0) return "dah!";
  return false;
};

type AFunctionResult = ReturnType<typeof aFunction>;

const anotherFunction = (result: AFunctionResult) => {
  // perform some logic on the result here
};

anotherFunction(aFunction());
