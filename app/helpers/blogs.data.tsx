export interface IBlog {
  id: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  link: string;
  introduction: React.ReactNode;
  sections: IBlogSection[];
  categories: string[];
}

export interface IBlogSection {
  title: string;
  description: React.ReactNode;
}
