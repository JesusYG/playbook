class User {
    constructor (id,username,name,bio,dateCreated,lastUpdated) {
      this._id = id
      this._username = username
      this._name = name
      this._bio = bio
      this._dataCreated = new Date()
      this._lastUpdated = new Date()
    }

    get getUsername(){
        return this._username
    }

    get getBio(){
        return this._bio
    }

    get getdataCreated(){
        return this._dataCreated
    }

    get getlastUpdated() {
        return this.lastUpdated
    }
  }
  
  // Esta línea nos permite exportar nuestra clase
  module.exports = User