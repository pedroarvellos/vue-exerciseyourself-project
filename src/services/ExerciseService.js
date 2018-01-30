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

        if(exercise.id) {
            return this._resource
            .update(exercise)
            .then(null, err => {
                console.log(err);
                throw new Error('Sorry, it was not possible to update the exercise. Try later!');
            });
        } else {
            return this._resource
            .save(exercise)
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Sorry, it was not possible to create the exercise. Try later!');
            });
        }
    }

    delete(id) {

        return this._resource
            .delete({ id })
            .then(null, err => {
                console.log(err);
                throw new Error('Não foi possível remover a foto. Tente mais tarde');
            });
    }
}