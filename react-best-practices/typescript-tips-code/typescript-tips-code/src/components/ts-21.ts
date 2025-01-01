export type User = {
  john: number;
  alex: number;
};

type Roles = {
  level: number;
  activeSessions: number;
};

type Activity = {
  bans: number;
  reports: number;
};

type UserData = {
  [user in keyof User]: {
    [role in keyof Roles]: {
      [activity in keyof Activity]: number;
    };
  };
};
