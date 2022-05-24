const User = require('./../app/user');

describe("Unit test for User class", () => {
    test('1) Create an user object', () => {
      const User = new user(1,"carlogilmar","Carlo","Bio","dataCreadet","lastUpdated")
      expect(User._id).toBe(1);
      expect(User._username).toBe("carlogilmar");
      expect(User._name).toBe("Carlo");
      expect(User._bio).toBe("Bio");
      //expect(andrewGarfield._dataCreated).toBe("dataCreadet");
      //expect(andrewGarfield._lastUpdated).toBe("lastUpdated");
      expect(User._dataCreated).not.toBeUndefined()
      expect(User._lastUpdated).not.toBeUndefined()
    });

    test('2) Add getters', () => {
        const User = new user(1,"carlogilmar","Carlo","Bio")
        expect(User.getusername).toBe("carlogilmar");
        expect(User.getbio).toBe("Bio");
        expect(User.getdataCreated).not.toBeUndefined()
        expect(User.getlastUpdated).not.toBeUndefined()
      });

      test('2) Add setters', () => {
        const user = new User(1,"carlogilmar","Carlo","Bio")
        expect(user.setusername).toBe("carlogilmar");
        expect(user.setbio).toBe("Bio");
        expect(user.setdataCreated).not.toBeUndefined()
        expect(user.setlastUpdated).not.toBeUndefined()
      });
  })