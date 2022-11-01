'use strict';
(() => {
    console.log("Example")
    const exampleJavaScriptObject = {
        course: 'Application Development',
        school: 'Full Sail University',
        degree: 'Web Development'
    }

    const school = exampleJavaScriptObject.school;
    const degree = exampleJavaScriptObject.degree;
    const course = exampleJavaScriptObject.course;

    console.log(`I am a student at ${school}, in the ${degree} degree, currently taking ${course}.`)
})()