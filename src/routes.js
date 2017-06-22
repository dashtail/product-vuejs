import ProductsList from './components/home/ProductsList.vue';
import ProductsForm from './components/forms/ProductForm.vue';
import LoginForm from './components/forms/LoginForm.vue';

export const routes = [
    {path: '/', component: ProductsList, name: 'Home', menu: true, auth: true},
    {path: '/create', component: ProductsForm, name:'Cadastro de produtos',menu: true},
    {path: '/update/:id', component: ProductsForm, name:'update', menu: false},
    {path: '/login', component: LoginForm,  meta:{auth: false}}
];
