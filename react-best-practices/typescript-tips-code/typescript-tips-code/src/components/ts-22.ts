export type User = {
  john: number;
  alex: number;
};

type Activity = {
  bans: number;
  reports: number;
};

type UserActivityData = {
  [user in keyof User]: {
    [role in user]: {
      [activity in keyof Activity]: number;
    };
  };
}[keyof User];

const getUserActivityData = (): UserActivityData => {
  return {
    john: {
      bans: 45,
      reports: 30,
    },
  };
};
