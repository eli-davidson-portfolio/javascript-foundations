class Person {
    constructor(name, mood) {
        this.name = name;
        this.mood = 'frightened';
        if (mood !== undefined) {
            this.mood = mood;
        }
    }
}

module.exports = Person;