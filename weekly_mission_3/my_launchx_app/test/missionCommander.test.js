const MissionCommander = require('./../app/missionCommander');

//describe("Esto es una suite de pruebas", () => {
    //test('Caso de prueba 1: Cracion de Objeto', () => {

      describe("Unit Tests for Mission Commander Class", () => {
        test('1) Create a mission commander objet', () => {

          
      //Aqui se puede usar el código como se desee:
      //const result = 1 + 2 
      const myMissionCommander = new MissionCommander("Woopa")

      //Validar resultado experado:
      //expect(result).toBe(3);
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })