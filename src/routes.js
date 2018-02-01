import ExerciseList from './components/exercise/ExerciseList.vue';
import ExerciseView from './components/exercise/ExerciseView.vue';
import ExerciseAction from './components/exercise/ExerciseAction.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '/', name: 'home', component: Home, tittle: 'home' },
    { path: '/bodypart/:idBodyPart', name: 'exercise-list', component: ExerciseList, tittle: 'exercise-list'},
    { path: '/exercise/add', name: 'exercise-add', component: ExerciseAction, tittle: 'exercise-add'},
    { path: '/bodypart/:idBodyPart/exercise/:idExercise/edit', name: 'exercise-edit', component: ExerciseAction, tittle: 'exercise-edit'},
    { path: '/bodypart/:idBodyPart/exercise/:id', name: 'exercise-view', component: ExerciseView, tittle: 'exercise-view'}
];