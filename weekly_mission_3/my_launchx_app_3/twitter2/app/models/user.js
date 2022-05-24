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

    get getDataCreated(){
        return this._dataCreated
    }

    get getLastUpdated() {
        return this._lastUpdated
    }

    set setUsername(newUsername) {
        this._username = newUsername
    }

    set setBio(newBio) {
        this._bio = newBio
    }
}
module.exports = User