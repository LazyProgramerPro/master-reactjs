type Button = {
  text: string;
  color: string;
  padding: number;
};

type Radio = {
  text: string;
  font: string;
  size: number;
};

type ButtonRadioUnion = Button | Radio;
type ButtonRadioIntersection = Button & Radio;

export const submitButton: ButtonRadioUnion = {
  text: "submit",
  color: "blue",
  padding: 24,
};

declare function getButtonOrRadio(): ButtonRadioUnion;
const myGetButtonOrRadio = getButtonOrRadio();

const formButton: ButtonRadioIntersection = {
  text: "blabla",
  color: "blue",
  padding: 16,
  font: "some font",
  size: 24,
};

declare function getFormButton(): ButtonRadioIntersection;
const myGetFormButton = getFormButton();
