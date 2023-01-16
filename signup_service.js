import webshopDB from "./database/connection.js"; 

export async function checkIfUserExists(email) { 
    // I DB i users find emails og du får det som en liste pga. toArray()
  const result = await webshopDB.users.find({"email": email}).toArray();
  console.log(result,email)
  // find() itterere igennem mailene i DB og hvis den indtastede mail findes og derfor matcher den som der er tastet ind så laves der et nyt array hvori den mail vil blive indsat. hvis den ikke findes vil det nye array være tomt hvilket vil sige at mailen ikke findes.
  // Hvis listens længde er større eller li med 1 så returner true ellers returner false. 
  if (result.length >= 1) { // Hvis listen = 1 så returnere true hvilket vil sige at mailen er fundet i databasen og der derfor er et objekt/mail i arrayt.  
      return true
    } else {
      return false // Hvis listen er = 0 så skal den returnere false hvilket vil sige at mailen ikke er fundet og der derfor er et tomt array.
    }
}

export async function findUserByEmail(email) {
  if(await checkIfUserExists(email)) {
    const userEmail = await webshopDB.users.find({"email": email}).toArray() 
    return userEmail[0];
  } else {
    console.log("User doens't exist")
  }
}