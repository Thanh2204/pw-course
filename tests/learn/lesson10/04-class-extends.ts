class LoginPage {
  usernameLoc: string;
  passwordLoc: string;
  rememberMeLoc: string;
  btnLoginLoc: string;

  constructor(
    usernameLoc: string,
    passwordLoc: string,
    rememberMeLoc: string,
    btnLoginLoc: string,
  ) {
    this.usernameLoc = usernameLoc;
    this.passwordLoc = passwordLoc;
    this.rememberMeLoc = rememberMeLoc;
    this.btnLoginLoc = btnLoginLoc;
  }

  fillUsername(username: string) {
    console.log("Filling username: ", username);
  }
  fillPasword(password: string) {
    console.log("Filling password: ", password);
  }

  clickRememberMe() {
    console.log("Remeber me is click");
  }

  clickBtnLogin() {
    console.log("Click Button Login");
  }
}

class DashboardPage extends LoginPage {
  headingLoc: string;

  constructor(
    headingLoc: string,
    usernameLoc: string,
    passwordLoc: string,
    rememberMeLoc: string,
    btnLoginLoc: string,
  ) {
    super(usernameLoc, passwordLoc, rememberMeLoc, btnLoginLoc);
    this.headingLoc = headingLoc;
  }

  clickMenu(menuName: string) {
    return `${menuName}`;
  }
}

const dashboardPage = new DashboardPage("a", "b", "c", "d", "e");
const menuName = "abc";
dashboardPage.fillUsername("Thanh")

const loginPageObj = new LoginPage("a", "b", "c", "d");
