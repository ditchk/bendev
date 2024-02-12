export type MyNavLink = {
  route: string;
  label: string;
};

export type myWelcomeMessage = {
  title: string;
  subTitle?: string;
  slogan:string
  motive:string
};


export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

export type myFooterLinks = {
  name: string;
  route: string
};

export type myFaqs = {
  question: string,
  answer: string
}

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
  username: string;
  email: string;
  password: string;  
}

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

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

export type ToastProps = {
  type: 'success' | 'error' | 'warning' | 'info' | 'dark';
  message: string;
  position?: string;
  autoClose?: boolean;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: number;
  isPaused?: boolean;
 }

 export type myBannerAssets = {
  index: number;
  Image: string;
 }

 export type IImage = {
  id: number;
  url: string;
 }

 export type BasicServLink = {
  title: string;
 }

 export type PrimiumServLink = {
  title: string;
 }

export type dropownCotentLink = {
  title: string;
  message: string;
  path: string;
}