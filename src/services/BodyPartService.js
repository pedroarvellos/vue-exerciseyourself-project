export default class BodyPartService {

    constructor(resource) {
        this._resource = resource('bodypart{/id}');
    }

    readByCriteria() {
        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Sorry, it was not possible to obtain the exercises. Try later!');
            });
    }

    readById(id) {
        return this._resource
            .get({ id })
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Sorry, it was not possible to obtain the exercise. Try later!');
            });
    }
}