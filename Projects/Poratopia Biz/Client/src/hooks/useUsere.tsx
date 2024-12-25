interface User {
  _id: string;
  username: string;
  email: string;
  plan: "standard" | "gold" | "platinum";
}
