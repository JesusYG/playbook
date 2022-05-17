class SpiderMan {
    constructor (name,age,actor,no_movies,estudio) {
      this._name = name
      this._age = age
      this._actor = actor
      this._movies = no_movies
      this._estudio = estudio
    }
    getInfo(){
        return `Hey, I'm ${this._actor} from ${this._estudio}`;
    }
}
  // Esta línea nos permite exportar nuestra clase
  module.exports = SpiderMan