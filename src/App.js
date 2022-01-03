import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage/MainPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import HomePage from "./components/HomePage/HomePage";
import CharacterChoice from "./components/CharacterChoice/CharacterChoice";
import { firebase } from "./lib/firebase";
import {
  checkIfUserHasCharacter,
  createUser,
  createUserCharacter,
  getAllMissions,
} from "./services/firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.form = "";
    this.state = {
      loggedIn: false,
      username: "",
      email: "",
      badCredentials: "",
      displayedForm: "home",
      stats: {},
      character: {
        userQuests: [],
        userTrophies: [],
        characterClass: "",
        level: 1,
        playerName: "",
        experience: 0,
        nextLevelExp: 200,
        health: 100,
        fullHealth: 100,
        mana: 10,
        manaLimit: 10,
        strength: "",
        agility: "",
        vitality: "",
        intelligence: "",
        charisma: "",
        responsibility: "",
      },
    };
  }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const hasCharacter = await checkIfUserHasCharacter(user.email);
          if (hasCharacter != null && !hasCharacter) {
            this.setState({
              displayedForm: "characterChoice",
              email: user.email,
            });
          } else {
            this.setState({
              loggedIn: true,
              displayedForm: "",
              username: user.displayName,
              email: user.email,
            });
          }
        } catch (error) {
          console.error(error);
          this.setState({
            displayedForm: "home",
          });
        }
      } else {
        this.setState({
          displayedForm: "home",
        });
      }
    });
  }

  updateCharacter = (stats) => {
    let character = this.state.character;
    character.agility = stats.agility;
    character.strength = stats.strength;
    character.vitality = stats.vitality;
    character.intelligence = stats.intelligence;
    character.responsibility = stats.responsibility;
    character.charisma = stats.charisma;
    character.characterClass = stats.characterClass;
    character.playerName = this.state.username;
    return character;
  };

  handleClassChoice = async (e, stats) => {
    e.preventDefault();
    let currChar = this.updateCharacter(stats);
    this.setState({ character: currChar });
    try {
      const allMissions = await getAllMissions();
      currChar["email"] = this.state.email;
      currChar["userQuestList"] = allMissions;
      this.setState(
        { character: currChar, displayedForm: "", loggedIn: true },
        async () => {
          try {
            await createUserCharacter(this.state.email, currChar);
          } catch (error) {
            console.error(error);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
    this.setState({ stats: stats });
  };

  handleLogin = async (data, resetForm, resetSubmittedState) => {
    this.setState({ submitted: true });
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          this.setState({
            loggedIn: true,
            displayedForm: "",
            username: userCredential.user.displayName,
            email: userCredential.user.email,
          });
        });
    } catch (error) {
      console.log(error);
      resetForm();
      resetSubmittedState();
      this.setState({
        displayedForm: "login",
        badCredentials: error.message,
      });
      return;
    }
  };

  handleSignup = async (data, resetForm) => {
    try {
      const createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      await createdUser.user.updateProfile({
        displayName: data.username,
      });
      await createUser(createdUser.user.uid, data);
      this.setState({
        username: data.username,
        email: createdUser.user.email,
      });
    } catch (error) {
      resetForm();
      this.setState({
        displayedForm: "signup",
        badCredentials: error.message,
      });
      console.log(error);
    }
  };

  handleLogout = () => {
    setTimeout(
      function () {
        firebase.auth().signOut();
        this.setState({ loggedIn: false, username: "", form: "login" });
        this.setState({ displayedForm: "home" });
      }.bind(this),
      2000
    );
  };

  displayForm = (form) => {
    this.setState({
      displayedForm: form,
      badCredentials: "",
    });
  };

  render() {
    switch (this.state.displayedForm) {
      case "login":
        this.form = (
          <LoginForm
            changeForm={this.displayForm}
            handleLogin={this.handleLogin}
            badCredentials={this.state.badCredentials}
          />
        );
        break;
      case "signup":
        this.form = (
          <SignUpForm
            changeForm={this.displayForm}
            handleSignup={this.handleSignup}
            badCredentials={this.state.badCredentials}
          />
        );
        break;
      case "home":
        this.form = <HomePage changeForm={this.displayForm} />;
        break;
      case "characterChoice":
        this.form = (
          <CharacterChoice
            changeForm={this.displayForm}
            handleCharacterChoice={this.handleClassChoice}
          />
        );
        break;
      default:
        this.form = <HomePage changeForm={this.displayForm}></HomePage>;
        break;
    }

    return (
      <div className="App">
        {this.state.loggedIn ? (
          <MainPage
            handleLogout={this.handleLogout}
            name={this.state.username}
            stats={this.state.stats}
            email={this.state.email}
          />
        ) : (
          this.form
        )}
      </div>
    );
  }
}

export default App;
