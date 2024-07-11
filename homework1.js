const user=[
    {id: 1, name: "sok"}, 
    {id: 2, name: "sao"},
    {id: 3, name: "pisey"}
]

function getUserById(id, callback) {
    setTimeout(() => {
      const users = user.filter(user => user.id === id);
      if (users) {
        console.log(users)
      } else {
        callback(`User with id ${id} not found`);
      }
    }, 2000); 
  }

function capitalizeName(obj,callback){
    setTimeout(()=>{
      let name=''
      name=obj.name[0].toUpperCase()
      for(let i=1;i<obj.name.length;i++)
        name+=obj.name[i]
      obj.name=name
      callback(obj)
    },1500)
  }

  getUserById(2, (err, user) => {
    if (err) {
      console.error(err);
    } else {
      capitalizeName(user, (err, processedUser) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Processed user:', processedUser);
        }
      });
    }
  });