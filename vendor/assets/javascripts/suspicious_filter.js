angular.module("suspiciousEmployees", []).filter('suspicious', [function () {
  return function(employees) {
    if (employees) {
      var suspiciousEmployees = [];

      var date = new Date();
      var thisYear = date.getFullYear();
      var seventyYearsAgo = thisYear - 70; // can change threshold

      for (var i=0; i < employees.length; i++) {
        var birthYear = parseInt($scope.employees[i].birthdate.substring(0, 4));
        if (birthYear < seventyYearsAgo) {
          suspiciousEmployees.push(employees[i]);
        }
      }
      return suspiciousEmployees;
    }
  }
}]);