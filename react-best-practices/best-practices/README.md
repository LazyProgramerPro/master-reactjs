### Best practices

- Common best practice

  - Impossible state

  ```tsx
  import { useState } from "react";

  const AComponent = () => {
    const [status, setStatus] = useState("empty"); // 'typing'

    const isEmpty = status === "empty";
    const isTyping = status === "typing";

    // lots of logic here...
  };
  ```

  - Naming Conventions: [basic rules](https://github.com/airbnb/javascript/tree/master/react#basic-rules)

  ```tsx
  import { useEffect, useState } from "react";

  const Products = () => {
    const [status, setStatus] = useState("idle");

    const fetchProducts = async () => {
      try {
        setStatus("pending");
        fetch(/*fetch products from server*/);
        setStatus("successful");
      } catch (error) {
        setStatus("rejected");
      }
    };

    useEffect(() => {
      fetchProducts();
    }, []);

    if (status === "pending" || status === "idle") {
      return <p>Loading products...</p>;
    }

    if (status === "rejected") {
      return <p>Oh nooo!</p>;
    }

    return <>products are ready, display here ...</>;
  };

  export default Products;
  ```

  - Đóng gói các CP

  ```tsx
  type Settings = {
    theme: {
      mode: "dark" | "light";
      version: "classic" | "modern";
    };
    otp: boolean;
    //other properties here...
  };

  class UserModel {
    constructor(
      public name: string,
      public lastname: string,
      private settings: Settings
    ) {
      this.name = name;
      this.lastname = lastname;
      this.settings = settings;
    }

    get fullname() {
      return `${this.name} ${this.lastname}`;
    }

    get mode() {
      return this.settings.theme.mode;
    }
  }

  const UserForm = ({ user }: { user: UserModel }) => {
    const fullname = user.fullname;
    const mode = user.mode; // thay vị trí của user.settings.theme.mode bằng user.mode

    return <form>{/* some inputs for user information. */}</form>;
  };

  export default UserForm;
  ```

  - Viết những CP nào có khả năng re-render lại nhiều lần thành 1 để chúng việc re-render lại của chúng ko ảnh hưởng đến những CP khác ( cùng cấp )

  ```tsx
  import { useState } from "react";

  const RootComponent = () => {
    return (
      <>
        <Form />
        <ExpensiveComponent />
      </>
    );
  };

  const Form = () => {
    const [name, setName] = useState("");
    return (
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
    );
  };

  const ExpensiveComponent = () => {
    //a component that holds a lot of other components and stuff.
  };

  export default RootComponent;
  ```

  - Ref

  ```tsx
  import { useEffect, useRef } from "react";

  const AComponent = () => {
    const ref = useRef(0);

    useEffect(() => {
      ref.current = 123;
    }); // This effect will run only once after the first render

    const clickHandler = () => {
      //doSomeStuff(ref.current)
    };

    return <p></p>;
  };
  ```

  - Group các trạng thái liên quan lại với nhau

  ```tsx
  import { useState } from "react";

  const MousePosition = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    return (
      <div
        onPointerMove={(e) => {
          setPos({
            x: e.clientX,
            y: e.clientY,
          });
        }}
      >
        {/* some stuff... */}
      </div>
    );
  };

  export default MousePosition;
  ```

  - Reset state

  ```tsx
  import { useState } from "react";

  const AComponent = () => {
    const [key, setKey] = useState(0);

    function resetState() {
      setKey(Math.random());
    }

    return (
      <>
        <input type="text" key={key} />{" "}
        {/* Về mặt kĩ thuật mỗi lần resetState sẽ tạo ra 1 input mới */}
        <button onClick={resetState}>Reset state</button>
      </>
    );
  };

  export default AComponent;
  ```

  - Tránh sự dư thừa state

  ```tsx
  import { useState } from "react";

  const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const fullname = firstname + " " + lastname;
    // Khi firstname hoặc lastname thay đổi thì fullname sẽ được cập nhật
    // Không cần sử dụng useState cho fullname
    const firstnameHandler = (e) => {
      setFirstname(e.target.value);
    };

    const lastnameHandler = (e) => {
      setLastname(e.target.value);
    };

    return (
      <form>
        <input type="text" id="firstname" onChange={firstnameHandler} />
        <input type="text" id="lastname" onChange={lastnameHandler} />
        <br />
        <h1>fullname: {fullname}</h1>
      </form>
    );
  };

  export default UserForm;
  ```

  - Caching

  ```tsx
  import { cache } from "react";

  const getUsers = cache(async () => {
    return await fetch("api/users");
  });

  async function DisplayUsers() {
    const users = await getUsers();
    // ...
  }

  async function ModifyUsers() {
    const users = await getUsers();
    // ...
  }
  ```

  - Render có điều kiện

  ```tsx
  import { Case, Default, Switch } from "./19-3";

  const ScoreBoard = ({ scores }) => {
    return (
      <Switch>
        <Case condition={scores < 50}>
          You need more scores to unlock next card!
        </Case>
        <Case condition={scores >= 50 && scores < 100}>
          Just a little more scores needed!
        </Case>
        <Case condition={scores >= 100}>Next card is unlocked!</Case>
        <Default>You need to collect some scores!</Default>
      </Switch>
    );
  };

  export default ScoreBoard;
  ```

  ```tsx
  import React from "react";

  // The Switch component will render one of its child components based on conditions
  export const Switch = ({ children }) => {
    // Variables to hold the matched case and the default case
    let matchChild = null;
    let defaultCase = null;

    // Iterate over each child of the Switch component
    React.Children.forEach(children, (child) => {
      // Check if we haven't found a match yet and the current child is a Case component
      if (!matchChild && child.type === Case) {
        // Extract the condition prop from the Case component
        const { condtion } = child.props;

        // Convert the condition to a boolean
        const conditionRes = Boolean(condtion);

        // If the condition is true, set this child as the match
        if (conditionRes) {
          matchChild = child;
        }
      } else if (!defaultCase && child.type === Default) {
        // If we haven't found a default case yet and the current child is a Default component, set it as the default case
        defaultCase = child;
      }

      // Return the matched child if found, otherwise return the default case if found, or null if none
      return matchChild ?? defaultCase ?? null;
    });
  };

  // The Case component simply renders its children
  export const Case = ({ children }) => {
    return children;
  };

  // The Default component also simply renders its children
  export const Default = ({ children }) => {
    return children;
  };
  ```

  ```tsx
  const RolesViews = {
    ADMIN: AdminView,
    TEACHER: TeacherView,
    STUDENT: StudentView,
  };

  const DisplayUser = ({ role }) => {
    const View = RolesViews[role] ?? GuestView;
    return (
      <div>
        <View />
      </div>
    );
  };

  const AdminView = () => <div>Teacher</div>;
  const TeacherView = () => <div>Teacher</div>;
  const StudentView = () => <div>Student</div>;
  const GuestView = () => <div>GuestView</div>;

  export default DisplayUser;
  // Tránh mấy cái kiểu if if if
  ```

  - Currying handler

  ```tsx
  import { useState } from "react";

  const Form = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const onProductClick = (product) => () => setSelectedProduct(product);

    return (
      <>
        <ul>
          {products.map((product) => {
            return <li onClick={onProductClick(product)}>{product.title}</li>;
          })}
        </ul>
        <h1>{selectedProduct.title}</h1>
      </>
    );
  };

  export default Form;
  ```

  - Enum

  ```tsx
  import { useState } from "react";

  export const STATUS = {
    IDLE: "IDLE",
    IS_LOADING: "IS_LOADING",
    HAS_ERROR: "HAS_ERROR",
    HAS_SUCCEEDED: "HAS_SUCCEEDED",
  };

  const AComponent = () => {
    const [status, setStatus] = useState(STATUS.IDLE);

    // the rest of the code...
  };
  ```

  - Factory pattern in React

  ```tsx
  // const createFilter = (filter) => {
  //   switch (filter) {
  //     case "date":
  //       return <DateFilter />;
  //     case "category":
  //       return <CategoryFilter />;
  //     default:
  //       return <NoFilter />;
  //   }
  // };

  const filterFactory = {
    date: DateFilter,
    category: CategoryFilter,
  };

  const DisplayFilter = ({ filter }) => {
    //return createFilter(filter);
    return filterFactory[filter] ?? <NoFilter />;
  };

  const DateFilter = () => <div>Pick a date</div>;
  const CategoryFilter = () => <div>Select a category</div>;
  const NoFilter = () => null;
  ```

  - Clean if statements

  ```tsx
  const isOrderFinalized = ({ hasStock }, { processed }) =>
    hasStock && processed;
  ```

  - Normalizing states

  ```tsx
  const AComponent = ({ id }) => {
    const users = {
      ids: ["1", "2", "3"],
      entities: {
        1: { id: 1, name: "Jack" },
        2: { id: 2, name: "Tom" },
        3: { id: 3, name: "Jerry" },
        4: { id: 4, name: "Superman" },
      },
    };

    //O(1)
    const getUserById = (id) => {
      return users?.entities[id];
    };

    const user = getUserById(id);

    return <DisplayUser user={user} />;
  };

  const DisplayUser = ({ user }) => {
    //...
  };

  export default AComponent;
  ```

  - Tips form

  ```tsx
  const LoginForm = () => {
    const submitHandler = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const formJson = Object.fromEntries(formData.entries());

      console.log(formJson);
    };

    return (
      <form onSubmit={submitHandler}>
        <input name="email" />
        <input type="password" name="password" />

        <button type="submit">login</button>
      </form>
    );
  };

  export default LoginForm;
  ```


