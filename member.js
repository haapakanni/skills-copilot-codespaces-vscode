function createMember(name, age) {
    return {
        name: name,
        age: age,
        displayInfo: function() {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }
    };
}

const member = createMember("John Doe", 30);
member.displayInfo();

function skillsMember() {
    const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'];
    function displaySkills(skills) {
        skills.forEach(skill => {
            console.log(skill);
        });
    }
    displaySkills(skills);
    function calculateNumbers(var1, var2) {
        return var1 + var2;
    }
    function multiplyNumbers(var1, var2) {
        return var1 * var2;
    }
    console.log(calculateNumbers(2, 2));
    console.log(multiplyNumbers(2, 2));
}
