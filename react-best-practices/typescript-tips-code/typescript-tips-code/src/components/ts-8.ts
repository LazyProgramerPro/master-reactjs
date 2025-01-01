type allStringsAreAccepted = {
  [key: string]: string;
};

type test = {
  bla: string;
  blabla: number;
};

type OptionalPropertis<Type> = {
  [Key in keyof Type]?: Type[Key];
};

type optionalTest = OptionalPropertis<test>;
