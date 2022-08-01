// initialize github class
const github = new Github();

// initialize ui class
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;

  // make sure user text isnt blank
  if (userText !== "") {
    // make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show ui alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
