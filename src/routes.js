import ExerciseList from './components/exercise/ExerciseList.vue';
import Exercise from './components/exercise/Exercise.vue';
import ExerciseAction from './components/exercise/ExerciseAction.vue';
import Home from './Home.vue';

export const routes = [
    { path: '/', name: 'home', component: Home, tittle: 'home' },
    { path: '/bodypart/:idBodyPart', name: 'exercise-list', component: ExerciseList, tittle: 'exercise-list'},
    { path: '/exercise/add', name: 'exercise-add', component: ExerciseAction, tittle: 'exercise-add'},
    { path: '/bodypart/:idBodyPart/exercise/:idExercise/edit', name: 'exercise-edit', component: ExerciseAction, tittle: 'exercise-edit'},
    { path: '/exercise/:id', name: 'exercise-view', component: Exercise, tittle: 'exercise-view'}
];