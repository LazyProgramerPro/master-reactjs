type TestCases = "case-1" | "case-2" | "case-3";

const doSomething = (cases: TestCases) => {
  switch (cases) {
    case "case-1":
      return "Case 1 handled.";
    case "case-2":
      return "Case 2 handled.";
    case "case-3":
      return "Case 3 handled.";
    default:
      assertUnreachable(cases);
  }
};

function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}
