export interface INavLinks {
  label: string;
  route: string;
  icon: string;
}

export interface IBlog {
  title: string;
  description: string;
  author: {
    name: string;
    img?: string;
  };
  date: string;
  tags: string[];
  image: string;
}