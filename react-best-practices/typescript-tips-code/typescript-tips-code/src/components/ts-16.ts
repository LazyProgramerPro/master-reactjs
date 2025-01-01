//📢 unknown is a type-safe version of any
//🚨 before accessing a value with type unknown, you should narrow it down.

// 1️⃣ Type guards
function someFunction(arg: unknown) {
  //❌
  arg.split(".");

  //✅
  if (typeof arg === "string") {
    arg.split(".");
  }
}

// 2️⃣ Equality test
function someFunction2(arg: unknown) {
  //❌
  let res = arg * 2;

  //✅
  if (arg === 5) {
    res = arg * 2;
  }
}

// 3️⃣ Type assertion
function someFunction3(arg: unknown) {
  //❌
  let res = arg.toFixed(2);

  //✅
  res = (arg as number).toFixed(2);
}
