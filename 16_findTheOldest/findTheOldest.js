const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const maxAge = getAge(
            oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const personAge = getAge(
            person.yearOfBirth, person.yearOfDeath
        );
        if (maxAge < personAge) {
            return person;
        } else return oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
