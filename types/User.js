export default class User {
  username;
  userId;
  userSubs = [];

  constructor(username, userId, userSubs) {
    this.username = username;
    this.userId = userId;
    this.userSubs = userSubs;
  }
}