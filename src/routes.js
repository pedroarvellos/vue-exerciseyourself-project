import ExerciseList from './components/exercise/ExerciseList.vue';
import Exercise from './components/exercise/Exercise.vue';
import App from './App.vue';

export const routes = [
    { path: '/', name: 'home', component: App, titulo: 'home' },
    { path: '/bodypart/:id', name: 'exerciseList', component: ExerciseList, titulo: 'exerciseList'},
    { path: '/exercise/:id', name: 'exercise', component: Exercise, titulo: 'exercise'}
];