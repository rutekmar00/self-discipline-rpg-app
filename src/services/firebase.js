import { firebase } from "../lib/firebase";

export async function createUser(userId, data) {
  firebase.firestore().collection("users").add({
    userId: userId,
    userName: data.username,
    firstName: data.name,
    lastName: data.surname,
    email: data.email,
    dateCreated: Date.now(),
    hasCharacter: false,
  });

  return "User created";
}

export async function checkIfUserHasCharacter(email) {
  const output = await firebase
    .firestore()
    .collection("characters")
    .where("email", "==", email)
    .get();

  if (!output.empty) {
    return output.docs[0].data();
  } else {
    return false;
  }
}

export async function getUserByEmail(email) {
  const output = await firebase
    .firestore()
    .collection("users")
    .where("email", "==", email)
    .get();

  const user = output.docs.map((doc) => ({
    ...doc.data(),
  }));

  return user;
}

export async function createUserCharacter(email, stats) {
  const user = await getUserByEmail(email);

  firebase.firestore().collection("characters").add({
    agility: stats.agility,
    characterClass: stats.characterClass,
    charisma: stats.charisma,
    email: email,
    experience: 0,
    fullHealth: 100,
    health: 100,
    intelligence: stats.intelligence,
    level: 1,
    mana: 10,
    manaLimit: 10,
    nextLevelExp: 200,
    playerName: user[0].userName,
    responsibility: stats.responsibility,
    strength: stats.strength,
    userId: user[0].userId,
    userQuests: [],
    userTrophies: [],
    userQuestList: stats.userQuestList,
    vitality: stats.vitality,
  });

  return "Character created";
}

export async function getAllMissions() {
  const query = await firebase
    .firestore()
    .collection("missions")
    .orderBy("id", "asc");

  const output = await query.get();

  const missions = output.docs.map((doc) => ({
    ...doc.data(),
  }));

  return missions;
}
