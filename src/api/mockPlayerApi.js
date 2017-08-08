import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "dhoni",
    name: "Mahender Singh Dhoni",
    wiki: "https://en.wikipedia.org/wiki/MS_Dhoni",
    totalRuns: "10099",
    iplTeam: "Chennai Super Kings",
    height: "1.33 m"
  },
  {
    id: "sachin",
    name: "Sachin Tendulkar",
    wiki: "https://en.wikipedia.org/wiki/Sachin_Tendulkar",
    totalRuns: "45000",
    iplTeam: "Mumbai Indians",
    height: "1.22 m"
  },
  {
    id: "virat",
    name: "Virat Kholi",
    wiki: "https://en.wikipedia.org/wiki/Virat_Kohli",
    totalRuns: "8000",
    iplTeam: "Royal Challengers Bangalore",
    height: "1.45 m"
  },
  {
    id: "jadeja",
    name: "Ravindra Jadeja",
    wiki: "https://en.wikipedia.org/wiki/Ravindra_Jadeja",
    totalRuns: "5000",
    iplTeam: "Chennai Super Kings",
    height: "1.67 m"
  },
  {
    id: "yuvaraj",
    name: "Yuvaraj Singh",
    wiki: "https://en.wikipedia.org/wiki/Yuvraj_Singh",
    totalRuns: "20000",
    iplTeam: "Sunrishers Hyderabad",
    height: "2.34 m"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.name, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static savePlayer(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseNameLength = 1;
        if (course.name.length < minCourseNameLength) {
          reject(`Name must be at least ${minCourseNameLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and wiki's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.wiki = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
