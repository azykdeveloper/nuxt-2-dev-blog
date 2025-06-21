export interface INavLinks {
  label: string;
  route: string;
  icon: string;
}

export interface IBlog {
  title: string;
  description: string;
  createdAt: string;
  slug: string;
  author: {
    name: string;
    bio: string;
    image: {
      url: string;
    };
  };
  tag: {
    name: string;
    slug: string;
  };
  category: {
    slug: string;
    name: string;
  };
  image: {
    url: string;
  };
  content: {
    html: string;
  };
}