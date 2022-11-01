'use strict';
(() => {
    console.log("Method Chaining")

    class CustomMath {
        result = 0;
        addition(a) {
            this.result === 0 ? this.result = a : this.result = this.result + a;
            return this;
        }

        multiplication(a) {
            this.result === 0 ? this.result = a : this.result = this.result * a;
            return this;
        } 
    }
    const solution = new CustomMath().addition().addition(2).multiplication(2)
    console.log(solution)

    const course = "Application Development";
    const courseSplit = course.split('');
    console.log(courseSplit);
    const courseSplitSorted = courseSplit.sort();
    console.log(courseSplitSorted);
    const courseSplitSortedJoined = courseSplitSorted.join('');
    console.log(courseSplitSortedJoined.toLowerCase());

    console.log("Function Composition")

    const add = (a,b) => {
        return a + b;
    }

    const multiply = (a,b) => {
        return a * b;
    }

    console.log(add(1,multiply(2,2)))
    console.log(add(1,add(2,2)))
    console.log(add(1,add(2,add(2,multiply(2,2)))))

})()