const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
  
  //Nombre de cada explorer en la lista:
  console.log("Nombre de cada explorer en la lista:");
  explorers.forEach(function(element){
    console.log(element.name);
  });
  
  //Stack de cada explorer:
  console.log("Stack de cada explorer:");
  explorers.forEach(function(element){
    console.log("Stack "+element.name+":"+ element.stack);
  });
  
  //Nueva lista con los stacks de cada explorer:
  var result= explorers.map(function(element, index){
    return element.stack 
  });
  console.log("Nueva lista con los stacks de cada explorer:")
  console.log(result);