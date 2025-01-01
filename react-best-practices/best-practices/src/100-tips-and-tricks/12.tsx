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
  const mode = user.mode;

  return <form>{/* some inputs for user information. */}</form>;
};

export default UserForm;
