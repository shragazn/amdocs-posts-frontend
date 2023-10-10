export type User = {
  username: string;
  client: string;
  media: string;
  actions?: Action[];
};

export type Action = {
  action: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
};

export type Post = {
  date: string;
  text: string | null;
  hashTags: string[];
  link: string | undefined;
  likes: number;
  comments: number;
  shares: number;
};
