import Exercise from './components/exercise/Exercise.vue';
import App from './App.vue';

export const routes = [
    { path: '/', name: 'home', component: App, titulo: 'home' },
    { path: '/bodypart/:id', name: 'listExercises', component: Exercise, titulo: 'Exercise' }
];