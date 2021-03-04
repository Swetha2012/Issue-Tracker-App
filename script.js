var issueList = {
  issues: [],

  displayIssue: function () {
      //if issues is empty : say There is no issue in the issues list
      if (this.issues.length === 0) {
          console.log('There is no issue in the issues list');
      }
      //otherwise display issues
      else {
          // if completed :  (X) - issue name
          // if not completed :  () - issue name
          var issueWithCompletedStatus = '';
          console.log('My Issues : ');
          for (var i = 0; i < this.issues.length; i++) {
              var issue = this.issues[i];
              if (issue.completed === true) {
                  issueWithCompletedStatus = '(X)-' + issue.issueText;
              } else {
                  issueWithCompletedStatus = '()-' + issue.issueText;
              }
              console.log(issueWithCompletedStatus);
          }
      }

  },

  addIssue: function (issueText) {
      this.issues.push({
          issueText: issueText,
          completed: false

      });
      this.displayIssue();
  },
  changeIssue: function (position, issueText) {
      this.issues[position].issueText = issueText;
      this.displayIssue();
  },
  deleteIssue: function (position) {
      this.issues.splice(position, 1);
      this.displayIssue();
  },
  toggleComplete: function (position) {
      var issue = this.issues[position];
      issue.completed = !issue.completed;
      this.displayIssue();

  },
  toggleAll: function () {
      var totalIssues = this.issues.length;
      var completedIssues = 0;
      // get the total completed issues
      for (var i = 0; i < this.issues.length; i++) {
          if (this.issues[i].completed === true) {
              completedIssues++;
          }
      }

      // case 1 :  if everything is true, make everything as false
      if (totalIssues === completedIssues) {
          for (var i = 0; i < this.issues.length; i++) {
              this.issues[i].completed = false;
          }
      }

      // case 2 :  otherwise make everything true
      else {
          for (var i = 0; i < this.issues.length; i++) {
              this.issues[i].completed = true;
          }
      }
      this.displayIssue();
  }


}

var handlers= {
    displayAll: function () {
        issueList.displayIssue();
        view.displayIssues();
    },
    toggleAll: function(){
        issueList.displayIssue();
        view.displayIssues();
    },
    addIssue: function() {
        var addIssueTextInput = document.getElementById("addIssueTextInput");
        issueList.addIssue(addIssueTextInput.value);
        addIssueTextInput.value="";
        view.displayIssues();
    },
    changeIssue: function() {
        var changeIssuePositionInput = document.getElementById("changeIssuePositionInput");
        var changeIssueTextInput = document.getElementById("changeIssueTextInput");
        issueList.changeIssue(changeIssuePositionInput.valueAsNumber,changeIssueTextInput.value);
        changeIssuePositionInput.value="";
        changeIssueTextInput.value="";
        view.displayIssues();
    },
    deleteIssue: function() {
        var deleteIssuePositionInput = document.getElementById("deleteIssuePositionInput");
        issueList.deleteIssue(deleteIssuePositionInput.value);
        deleteIssuePositionInput.value="";
        view.displayIssues();
    },
    toggleComplete: function() {
        var toggleIssuePositionInput = document.getElementById("toggleIssuePositionInput");
        issueList.toggleComplete(toggleIssuePositionInput.value);
        toggleIssuePositionInput.value="";
        view.displayIssues();
    },
}    
var view = {
    displayIssues: function() {
        var issueUl = document.querySelector('ul');
        issueUl.innerHTML = "";
        for (var i = 0; i<issueList.issues.length; i++) {
            var issueLi = document.createElement('li');
            var issue = issueList.issues[i];
            var issueTextWithCompletedStatus = '';
            if(issue.completed === true){
                issueTextWithCompletedStatus = '(X)-' + issue.issueText;
            }
            else {
                issueTextWithCompletedStatus = '()-' + issue.issueText; 
            }
            issuesLi.textContent = issueTextWithCompletedStatus;
            issueUl.appendChild(issueLi);
        }
    } 
    
}


