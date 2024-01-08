export type MyNavLink = {
  route: string;
  label: string;
};

export type myWelcomeMessage = {
  title: string;
  subTitle?: string;
};

export type myFooterLinks = {
  name: string;
  route: string
};

export type myMoreFooterLinks = {
  name2: string;
  route2: string;
}

export type contactInfo = {
  imageURL: string;
  content: string;
}

export type INewMessage = {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export type NewUser = {
  name: string;
  email: string;
  password: string;  
}

export type myNewProject = {
  ProjectName: string;
  file: File[];
  projectInfo: string;
}

export type Player = {
  name: string;
}
export type MyAboutLinks = {
  Icon: string;
  skill: string;
  info: string;
}

export type IEmailData = {
  from: string;
  to: string;
  subject: string;
  text: string;
}