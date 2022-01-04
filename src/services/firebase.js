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

export async function getUserCharacter(email) {
  const user = await getUserByEmail(email);
  const output = await firebase
    .firestore()
    .collection("characters")
    .where("userId", "==", user[0].userId)
    .get();

  const currentDate = new Date();
  const outputData = output.docs[0].data();
  const userQuestsComputed = outputData.userQuests.map((quest) => {
    const questDate = new Date(quest.questDate);
    if (quest.questDone === true) {
      quest.questStatus = "Finished";
      return quest;
    }
    if (questDate.toDateString() === currentDate.toDateString()) {
      quest.questStatus = "Waiting";
      return quest;
    } else if (questDate.getTime() < currentDate.getTime()) {
      quest.questStatus = "Failed";
      return quest;
    } else if (questDate.getTime() > currentDate.getTime()) {
      quest.questStatus = "Future";
      return quest;
    }
    return quest;
  });

  return {
    ...output.docs[0].data(),
    userQuests: userQuestsComputed,
    characterDocId: output.docs[0].id,
    userCreated: user[0].dateCreated,
  };
}

export async function updateCharacter(docId, stats, manaLimit) {
  firebase.firestore().collection("characters").doc(docId).update({
    strength: stats.strength,
    vitality: stats.vitality,
    charisma: stats.charisma,
    responsibility: stats.responsibility,
    agility: stats.agility,
    intelligence: stats.intelligence,
    mana: manaLimit,
    manaLimit: manaLimit,
  });
}

export async function updateLevelAndNextLevelExp(docId, level, nextLevelExp) {
  firebase.firestore().collection("characters").doc(docId).update({
    level: level,
    nextLevelExp: nextLevelExp,
  });
}

export async function updateUsersExpQuestsAndTrophies(
  docId,
  experience,
  questList,
  userTrophies
) {
  firebase.firestore().collection("characters").doc(docId).update({
    experience: experience,
    userQuestList: questList,
    userTrophies: userTrophies,
  });
}

export async function updateUsersQuestList(docId, questList) {
  firebase.firestore().collection("characters").doc(docId).update({
    userQuestList: questList,
  });
}

export async function updateUsersQuests(docId, userQuests) {
  firebase.firestore().collection("characters").doc(docId).update({
    userQuests: userQuests,
  });
}

export async function updateUsersQuestsAndQuestsList(
  docId,
  questList,
  userQuests,
  mana
) {
  if (mana != null) {
    firebase.firestore().collection("characters").doc(docId).update({
      userQuestList: questList,
      userQuests: userQuests,
      mana: mana,
    });
  } else {
    firebase.firestore().collection("characters").doc(docId).update({
      userQuestList: questList,
      userQuests: userQuests,
    });
  }
}

export async function getUsersTrophies(trophies) {
  const query = await firebase
    .firestore()
    .collection("trophies")
    .orderBy("id", "asc");

  const output = await query.get();

  const trophiesData = trophies.map((trophy) => {
    const docTrophy = output.docs[trophy.trophyId - 1];
    return docTrophy.data();
  });

  return trophiesData;
}
