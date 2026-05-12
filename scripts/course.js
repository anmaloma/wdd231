const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle("open");
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

const courses = [
    {
        subject: "WDD",
        number: 130,
        completed: false,
        credits: 3
    },

    {
        subject: "WDD",
        number: 131,
        completed: false,
        credits: 3
    },

    {
        subject: "CSE",
        number: 110,
        completed: false,
        credits: 2
    },

    {
        subject: "CSE",
        number: 111,
        completed:false,
        credits: 2
    },

    {
        subject: "WDD",
        number: 231,
        completed: false,
        credits: 3
    }
] 


const container = document.querySelector("#course-container");

function displayCourses(courseList) {

    container.innerHTML = "";

    courseList.forEach(course => {

        const div = document.createElement("div");

        div.classList.add("course-card");

        if (course.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            ${course.subject} ${course.number}
        `;

        container.appendChild(div);
    });

    const totalCredits =
        courseList.reduce((sum, course) => sum + course.credits, 0);

    document.querySelector("#credits").textContent =
        `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {

    const filtered = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(filtered);
});

document.querySelector("#cse").addEventListener("click", () => {

    const filtered = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(filtered);
});
