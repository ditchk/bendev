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

export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

export type IUser = {
  id: string;
  name: string;
  email: string;
};

export type myNewProject = {
  ProjectName: string;
  file: File[];
  projectInfo: string;
}