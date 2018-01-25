export default class ExerciseService {

    constructor(resource) {
        this._resource = resource('exercise{/id}');
    }

    readById(id) {
        return this._resource
            .get({ id })
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Sorry, it was not possible to obtain the exercise. Try later!');
            });
    }

    create(exercise) {
        this._resource
            .save(exercise);
    }
}