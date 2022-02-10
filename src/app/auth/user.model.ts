export class User {
    constructor(
      public email: string,
      public id: string,
      private _token: string,
      private _tokenExpirationDate: Date
    ) {}
  
    get token() {
      if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {  // if token idoesn't exist or the token has expired
        return '' ;
      }
      return this._token;
    }
  }
  