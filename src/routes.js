import ProductsList from './components/home/ProductsList.vue';
import ProductsForm from './components/forms/ProductForm.vue';
import Login from './components/auth/Login.vue';
import SingUp from './components/auth/SingUp.vue';

export const routes = [
    {
      path: '/',
      component: ProductsList,
      name: 'Home',
      menu: true,
      meta:{auth: true}
    },
    {
      path: '/create',
      component: ProductsForm,
      name:'Cadastro de produtos',
      menu: true,
      meta:{auth: true}
    },
    {
      path: '/update/:id',
      component: ProductsForm,
      name:'update',
      menu: false,
      meta:{auth: true}
    },
    {
      path: '/login',
      component: Login,
      meta:{auth: false}
    },
    {
      path: '/singup',
      component: SingUp,
      name:'Cadastre-se',
      menu:true,
      meta:{auth: false}
    }
];
