type StatusCode = 200 | 400 | 500;

type Status = "success" | "rejected";

type AsyncResponse<T> = {
  code: StatusCode;
  status: Status;
  data: T;
};

const fetchUsers = (): AsyncResponse<{ users: string[] }> => {
  //fetching logic...
  //return a response satisfying AsyncResponse<{users: string[]}> requirements

  return {
    code: 200,
    status: "success",
    data: { users: ["jone", "alex", "batman"] },
  };
};
