//const User = require('./../app/user');
const User = require('./../../app/models/user');

describe('Unit test for User class', () => {
    test('1) Create an user object', () => {
      const user = new User(1,"carlogilmar","Carlo","Bio","dataCreadet","lastUpdated")
      expect(user._id).toBe(1);
      expect(user._username).toBe("carlogilmar");
      expect(user._name).toBe("Carlo");
      expect(user._bio).toBe("Bio");
      //expect(andrewGarfield._dataCreated).toBe("dataCreadet");
      //expect(andrewGarfield._lastUpdated).toBe("lastUpdated");
      expect(user._dataCreated).not.toBeUndefined()
      expect(user._lastUpdated).not.toBeUndefined()
    });
});

describe('Unit test getters', () => {
    test('2) Add getters', () => {
      const user = new User(1,"carlogilmar","Carlo","Bio")
      expect(user.getUsername).toBe("carlogilmar");
      expect(user.getBio).toBe("Bio");
      expect(user.getDataCreated).not.toBeUndefined()
      expect(user.getLastUpdated).not.toBeUndefined()
  });
});

describe('Unit test getters', () => {
    test('2) Add getters', () => {
      const user = new User(1,"carlogilmar","Carlo","Bio")
      expect(user.getUsername).toBe("carlogilmar");
      expect(user.getBio).toBe("Bio");
      expect(user.getDataCreated).not.toBeUndefined()
      expect(user.getLastUpdated).not.toBeUndefined()
  });
});

describe('Unit test setters', () => {
    test('3) Add setters', () => {
      const user = new User(1,"carlogilmar","Carlo","Bio")
      user.setUsername = "Gilmar"
      expect(user._username).toBe("Gilmar")

      user.setBio = "New Bio"
      expect(user._bio).toBe("New Bio")
  });
});