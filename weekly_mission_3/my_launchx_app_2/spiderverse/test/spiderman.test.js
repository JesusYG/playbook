const SpiderMan = require('./../app/spiderman');

describe("Unit test for SpyderMan class", () => {
    test('1) Create an spyderman object', () => {
      const andrewGarfield = new SpiderMan("Spiderman SONY",31,"Andrew Garfield",28,"Sony")
      expect(andrewGarfield._name).toBe("Spiderman SONY");
      expect(andrewGarfield._age).toBe(31);
      expect(andrewGarfield._actor).toBe("Andrew Garfield");
      expect(andrewGarfield._movies).toBe(28);
      expect(andrewGarfield._estudio).toBe("Sony");
    });
  })

  describe("Unit test for SpyderMan class #2", () => {
    test('2) Use the method getInfo()', () => {
      const tomHolland = new SpiderMan("Spiderman Marvel",25,"Tom Holland",5,"Marvel estudios");
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel estudios");
    });
  })