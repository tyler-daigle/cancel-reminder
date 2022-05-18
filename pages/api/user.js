import User from "../../types/User";

export default function user(req, res) {

  const userData = new User("tyler", 1);
  res.status(200).json(userData);
}