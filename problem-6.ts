{
  //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  interface Profile {
    name : string;
    age : number;
    email : string;
  }

  const updateProfile = (profile : Profile, updates: Partial <Profile>) => {
        return {...profile, ...updates}
  }

  const userProfile : Profile ={
        name : 'Yousuf',
        age : 26,
        email : 'abc@gmail.com'
  }

  const updatedProfile =  updateProfile(userProfile,{email: 'mdabuyousufsajib@gmail.com'})
  console.log(updatedProfile)

}