type Test<T> = T extends string ? string : number;

interface Handlers {
  onClick: () => string;
  id: number;
  onSubmit: () => string;
  onCancel: () => string;
  setValue: () => string;
  values: number[];
}

type TypeTransformer<T> = {
  [Key in keyof T]: Key extends `on${string}` ? string : T[Key];
};

type TransformedHandlers = TypeTransformer<Handlers>;
