// A generic function that logs the identity of a user
const getUserIdentity = <T>(user: T) => {
  console.log(`${user} identity is 123`);
};

// A generic function that logs the exchange rate of a currency
function getExchangeRate<T>(currency: T) {
  console.log(`${currency} is worth 1000 credits`);
}

// A generic interface for a data response object
interface ApiResponse<T> {
  data: T;
  status: string;
}

// A generic type for a response payload
type Payload<T> = {
  data: T;
  status: string;
};

// A generic class with a method that logs the type of the input
class Logger<T> {
  log(value: T) {
    console.log(`Your type is ${typeof value}`);
  }
}

// A generic function with a default type argument
function greet<T = string>(message: T) {
  console.log(`Hi ${message}`);
}

// A generic function constrained to numbers
function increment<T extends number>(num: T): number {
  return num + 1;
}

// A generic function constrained to objects with a 'name' property
function displayObjectName<T extends { name: string } = { name: string }>(
  obj: T
): void {
  console.log(obj.name);
}

// A function using multiple generic types
function combine<T, K>(first: T, second: K) {
  console.log(`${first} ${second}`);
}
