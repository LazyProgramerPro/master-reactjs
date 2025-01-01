import React from "react";

type Props = {
  books: string[];
};

const MyComponent = (props: Props) => {
  return (
    <ul>
      {React.Children.toArray(
        props.books.map((item) => {
          return <li>{item}</li>;
        })
      )}
    </ul>
  );
};
