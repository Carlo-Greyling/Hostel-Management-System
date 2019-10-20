export class User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;

  constructor(uid, displayName, email, photoURL) {
    this.uid = uid;
    this.email = email;
    this.photoURL = photoURL;
    this.displayName = displayName;
  }
}
