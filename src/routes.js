import ExerciseList from './components/exercise/ExerciseList.vue';
import Exercise from './components/exercise/Exercise.vue';
import ExerciseAdd from './components/exercise/ExerciseAdd.vue';
import App from './App.vue';

export const routes = [
    { path: '/', name: 'home', component: App, titulo: 'home' },
    { path: '/bodypart/:id', name: 'exercise-list', component: ExerciseList, titulo: 'exercise-list'},
    { path: '/exercise/add', name: 'exercise-add', component: ExerciseAdd, titulo: 'exercise-add'},
    { path: '/exercise/:id', name: 'exercise-view', component: Exercise, titulo: 'exercise-view'}
];