import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  users: string[] = ["ryan", "joe", "cameron"];

  projects = [
    {
      // Variables solo para desarrollo
      title: "Task App Design",
      created_At: "06/01/2019",
      numeroTask: 2,
      numeroSubTask: 3
    },
    {
      title: "Other Task",
      created_At: "06/01/2019",
      numeroTask: 3,
      numeroSubTask: 7
    },
    {
      title: "Lorem Ipsum Task",
      created_At: "06/01/2019",
      numeroTask: 2,
      numeroSubTask: 4
    }
  ];

  sayHello(user: string) {
    alert(`Hello ${user}!`);
  }

  addUser(newUser) {
    if (newUser.value) {
      this.users.push(newUser.value);
      newUser.value = "";
      newUser.focus();
    } else {
      newUser.placeholder = "Ingrese un nombre";
    }

    return false;
  }

  deleteUser(user: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
}
