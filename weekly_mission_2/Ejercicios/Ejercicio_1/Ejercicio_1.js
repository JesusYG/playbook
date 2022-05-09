//Ejercicio 1.1
const repo = {
    name: "LaunchX",
    author: "JesusYH",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

//Ejercicio 1.2
const issue = {
    title: "LaunchX",
    repositoryNameAssociated: "playbook",
    status: "ON",
    numberOfComments: 100,
    labels: 199,
    author: "JesusYG",
    dateCreated: "10-10-2022",
    lastUpdated: 10,
    getTitleAndAuthor: function(){
      return this.title +" by "+this.author
    },
    getGeneralInfo: function(){
      return `This repository ${this.repositoryNameAssociated} was created by ${this.author} crated on ${this.dateCreated}`
    }
   }
   
   console.log("Titulo del repo:" + issue.title)
   console.log("Titulo y autor: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())

   //Ejercicio 1.3
   const pullrequest = {
    title: "LaunchX-PRO",
    branchName: "Full",
    dateCreated: "02-01-2022",
    status: true,
    repositoryNameAssociated: "playbook",
    getStatus: function(){
      return this.status
    },
    getTitleAndAutor: function(){
      return `This repository ${this.title} was created on ${this.dateCreated}`
   }
}
   console.log("Titulo del repo:" + pullrequest.title)
   console.log("Estatus: " + pullrequest.getStatus())
   console.log(pullrequest.getTitleAndAutor())

     //Ejercicio 1.4: Twitter user
     const users1 = {
          user1: "carlo",
          username: "carlogilmar", 
          bio: "...", 
          age: 23,
        getStatus: function(){
          return this.user1
        },
        getTitleAndAutor: function(){
          return `This repository ${this.username} was created on ${this.age}`
       }
    }
       console.log("Nombre del usuario:" + users1.name1)
       console.log("Estatus: " + users1.getStatus())
       console.log(users1.getTitleAndAutor())

       //Ejercicio 1.4: Twitter trending_topic

       const trending_topic = {
        user2: "carlo",
        username: "carlogilmar", 
        bio: "...", 
        age: 23,
        date: "24-04-2022",
        views: 134,
      getStatus: function(){
        return this.user1
      },
      getTitleAndAutor: function(){
        return `This repository ${this.username} was created on ${this.age}`
     }
  }
     console.log("Nombre del usuario:" + trending_topic.name2)
     console.log("Estatus: " + trending_topic.getStatus())
     console.log(trending_topic.getTitleAndAutor())

     //Ejercicio 1.5: Twitter hashtag

     const hashtag = {
        user2: "carlo",
        username: "carlogilmar", 
        bio: "...", 
        age: 23,
        date: "24-04-2022",
        views: 134,
        hashtag: "#weubwded",
      getStatus: function(){
        return this.user1
      },
      getTitleAndAutor: function(){
        return `This repository ${this.username} was created on ${this.age}`
     }
  }
     console.log("Hashtag:" + hashtag.hashtag)
     console.log("Estatus: " + hashtag.getStatus())
     console.log(hashtag.getTitleAndAutor())


     //Ejercicio 1.5: Facebook user
     const users2 = {
        user2: "carlo",
        username2: "carlogilmar", 
        bio: "...", 
        age: 23,
        date: "24-04-2022",
        views: 134,
        hashtag: "#weubwded",
      getStatus: function(){
        return this.user1
      },
      getTitleAndAutor: function(){
        return `This repository ${this.username} was created on ${this.age}`
     }
  }
     console.log("Nombre de usuario:" + users2.username2)
     console.log("Estatus: " + users2.getStatus())
     console.log(users2.getTitleAndAutor())

     //Ejercicio 1.5: Facebook post
     const post = {
        user2: "carlo",
        username2: "carlogilmar", 
        bio: "...", 
        age: 23,
        date: "24-04-2022",
        views: 134,
        hashtag: "#weubwded",
        name_post: "ulala",
      getStatus: function(){
        return this.user1
      },
      getTitleAndAutor: function(){
        return `This repository ${this.username} was created on ${this.age}`
     }
  }
     console.log("Nombre de usuario:" + post.name_post)
     console.log("Estatus: " + post.getStatus())
     console.log(post.getTitleAndAutor())

     //Ejercicio 1.5: Facebook biography
     const biography = {
        user3: "carlo",
        username3: "carlogilmar", 
        bio: "...", 
        age: 23,
        date3: "24-04-2022",
        views: 134,
        hashtag: "#weubwded",
        name_post: "ulala",
        mybiography: "Alfred",
      getStatus: function(){
        return this.user3
      },
      getTitleAndAutor: function(){
        return `This repository ${this.username3} was created on ${this.date2}`
     }
  }
     console.log("Nombre de usuario en biografia:" + biography.mybiography)
     console.log("Estatus: " + biography.getStatus())
     console.log(biography.getTitleAndAutor())

      //Ejercicio 1.6: Uber profile
      const profile = {
        user4: "carlo",
        username4: "carlogilmar", 
        bio4: "...", 
        age4: 23,
        date4: "24-04-2022",
        views4: 134,
        hashtag4: "#weubwded",
        name_pos4: "ulala",
        mybiography4: "Alfred",
        myprofile: "Personal",
      getStatus: function(){
        return this.user4
      },
      getTitleAndAutor: function(){
        return `This repository ${this.username4} was created on ${this.date4}`
     }
  }
     console.log("Nombre de usuario en biografia:" + profile.myprofile)
     console.log("Estatus: " + profile.getStatus())
     console.log(profile.getTitleAndAutor())


     //Ejercicio 1.7: Uber travel
     const travels = {
      user5: "carlo",
      username5: "carlogilmar", 
      bio5: "...", 
      age5: 23,
      date5: "24-04-2022",
      views5: 134,
      hashtag5: "#weubwded",
      name_pos5: "ulala",
      mybiography5: "Alfred",
      myprofile2: "Personal",
      travel:"Cancun",
    getStatus: function(){
      return this.user5
    },
    getTitleAndAutor: function(){
      return `This repository ${this.username5} was created on ${this.date5}`
   }
}
   console.log("Nombre de usuario en biografia:" + travels.travel)
   console.log("Estatus: " + travels.getStatus())
   console.log(travels.getTitleAndAutor())
     



