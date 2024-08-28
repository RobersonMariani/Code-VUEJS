import { createRouter, createWebHistory } from 'vue-router'

// Lazy loading para todas as views e componentes
const Home = () => import('@/views/Home.vue');
const Login = () => import('@/views/Login.vue');
const Site = () => import('@/views/Site.vue');

// Lazy loading dos componentes do dashboard
const Dashboard = () => import('@/components/dashboard/Dashboard.vue');
const DashboardRodape = () => import('@/components/dashboard/DashboardRodape.vue');

// Lazy loading dos componentes de vendas
const Vendas = () => import('@/components/sales/Vendas.vue');
const Lead = () => import('@/components/sales/Lead.vue');
const Leads = () => import('@/components/sales/Leads.vue');
const Contratos = () => import('@/components/sales/Contratos.vue');
const VendasPadrao = () => import('@/components/sales/VendasPadrao.vue');

// Lazy loading dos componentes de serviços
const Servicos = () => import('@/components/services/Servicos.vue');
const Servico = () => import('@/components/services/Servico.vue');
const Indicadores = () => import('@/components/services/Indicadores.vue');
const Opcoes = () => import('@/components/services/Opcoes.vue');

// Lazy loading da página 404
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada.vue');

const routes = [
    {
        path: '/',
        component: Site
    },
    {
        path: '/home',
        alias: '/app',
        component: Home,
        children: [
            {
                path: 'vendas', component: Vendas, children: [
                    { path: 'leads', component: Leads, name: 'leads' },
                    { path: 'lead/:id', props: true, component: Lead, name: 'lead' },
                    { path: 'contratos', component: Contratos, name: 'contratos' },
                    { path: '', component: VendasPadrao }, // Rota padrão vendas
                ]
            },
            {
                path: 'servicos', component: Servicos, name: 'servicos', children: [
                    {
                        path: ':id',
                        props: {
                            default: true,
                            indicators: true,
                            options: true
                        },
                        name: 'servico',
                        components:
                        {
                            default: Servico,
                            indicators: Indicadores,
                            option: Opcoes,
                        },
                    },
                ]
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                components:
                {
                    default: Dashboard,
                    rodape: DashboardRodape,
                },
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {

        if (savedPosition) return savedPosition

        if (to.hash) return { el: to.hash, behavior: 'smooth', }

        return {
            top: 0,
            left: 0
        }
    },
    routes
})

export default router