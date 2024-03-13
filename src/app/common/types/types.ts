// ContactForm
export type ContactFormType = {
  placeholders: {
    firstName: string;
    phoneNumber: string;
  };
  buttonTitle: string;
  gratitudeHandler: (toggle: boolean) => void;
};

export type SelectOptionType = { value: string; label: string };

export type SubmitType = {
  firstName: string;
  phoneNumber: string;
};

// Contacts
export type ContactsType = {
  open: boolean;
  handleClose: () => void;
  gratitudeHandler: (toggle: boolean) => void;
  isGratitude: boolean;
};

// MainPage
export type MainPagePropsType = {
  buttonsData: ConsultationButtonPropsType[];
  cardsData: CardPropsType[];
  commentMobile: string;
  comment: string;
  title: string;
};

// ConsultationButton
export type ConsultationButtonPropsType = {
  id: string;
  description: string;
  descriptionMobile: string;
  isRecord?: boolean;
  isButton?: boolean;
};

// Card
export type CardPropsType = {
  id: string;
  title: string;
  description: string;
  mobileDescription: string;
};
