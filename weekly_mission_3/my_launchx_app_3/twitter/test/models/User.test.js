const user = require('./../app/User');

describe("Unit test for User class", () => {
    test('1) Create an user object', () => {
      const andrewGarfield = new SpiderMan("Spiderman SONY",31,"Andrew Garfield",28,"Sony")
      expect(andrewGarfield._id).toBe("Spiderman SONY");
      expect(andrewGarfield._username).toBe(31);
      expect(andrewGarfield._name).toBe("Andrew Garfield");
      expect(andrewGarfield._bio).toBe(28);
      expect(andrewGarfield._dataCreated).toBe("Sony");
    });
  })