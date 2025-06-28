
const promisefour= new Promise(function(resolve, reject)
{
    setTimeout(function()
{
    let error= true
    if(!error)
    {
        resolve({username:"pratyush", password:123})
    }
    else reject(' ERROR:something went wrong ')
},1000)
})

promisefour.then((user) =>
{
  console.log(user)
  return user.username
})
.then((username) =>
{
  console.log(username)
})
.catch(function(error)
{
    console.log(error);
})
.finally(() =>
{
    console.log("the promise is either resolved or rejected ");
})

const promisefive= new Promise((resolve, reject) =>
{
    setTimeout(function()
    {
        let error= true
        if(!error)
        {
            resolve({username:"JS", password:123})
        }
        else reject(' ERROR:JS went wrong ')
    },1000)
})
async function consumepromisefive()
{
   try {
    const response = await promisefive
    console.log(response);
   } catch (error) {
     console.log(error);
   }
}
consumepromisefive()




fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>
{
 console.log(response);
 return response.json()
})
.then((data) => 
    {
        console.log(data)
    })
.catch((error) => console.log("error")
)
setInterval(() =>
{
    console.log('I love u ');
},1000)