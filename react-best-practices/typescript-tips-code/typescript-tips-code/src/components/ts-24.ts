export interface Response {
  code: 200 | 204 | 401 | 500;
  status: "success" | "error" | "unauthorized";
  data?: unknown; // it is unknown to simplicity
  errorMsg?: string;
}

type BetterResponse =
  | {
      code: 200 | 204;
      status: "success";
      data: unknown;
    }
  | {
      code: 401 | 500;
      status: "error" | "unauthorized";
      errorMsg: string;
    };

const fetchData = (): BetterResponse => {
  return {
    code: 200,
    status: "success",
    data: [{ id: 123 }],
  };
};
