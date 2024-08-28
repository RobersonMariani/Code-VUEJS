<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>

                <ul class="navbar-nav links">
                    <li class="nav-item">
                        <router-link class="nav-link" to="#section_1">Seção 1</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ path: '/', hash: '#section_2' }">Seção 2</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ path: '/', hash: '#section_3' }">Seção 3</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Acessar</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="destaque">
                        <h4 class="text-primary text-center">Descubra as vantagens em utilizar o Empresa 360 para
                            gerenciar seus negócios!</h4>
                    </div>
                </div>
                <div class="col">
                    <p class="text-center">Inscreva-se e veja a nossa demonstração</p>
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Nome">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="E-mail">
                            </div>
                            <button class="btn btn-primary">Me inscrever</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 p-5 bg-light">
                <div class="col">
                    <h3 id="section_1">Seção 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus elit, et blandit
                        neque pulvinar a. Nunc id consectetur ipsum. Sed dignissim turpis quis fringilla pretium. Sed
                        bibendum faucibus ex, tincidunt aliquet mauris commodo accumsan. Vivamus commodo risus quis
                        euismod tempus. Donec non hendrerit quam. Vivamus laoreet lacus sed neque tristique pulvinar.
                        Vestibulum in maximus dolor. Mauris efficitur libero quis placerat placerat.</p>
                    <p>Proin sollicitudin orci ligula, ac bibendum ante porttitor ac. Mauris a sem id augue blandit
                        dapibus. Fusce facilisis mi et velit porttitor suscipit. Praesent ut nunc ullamcorper, pretium
                        augue vitae, bibendum ligula. Duis ut augue lobortis, congue erat et, placerat nisl. Nam sed
                        lobortis leo. Pellentesque gravida hendrerit urna, vitae ullamcorper ante pharetra eget. Integer
                        consectetur laoreet ultricies. Nunc vestibulum pulvinar sodales.</p>
                </div>
            </div>

            <div class="row mt-5 p-5">
                <div class="col">
                    <h3 id="section_2">Seção 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus elit, et blandit
                        neque pulvinar a. Nunc id consectetur ipsum. Sed dignissim turpis quis fringilla pretium. Sed
                        bibendum faucibus ex, tincidunt aliquet mauris commodo accumsan. Vivamus commodo risus quis
                        euismod tempus. Donec non hendrerit quam. Vivamus laoreet lacus sed neque tristique pulvinar.
                        Vestibulum in maximus dolor. Mauris efficitur libero quis placerat placerat.</p>
                </div>
            </div>

            <div class="row mt-5 p-5 bg-light">
                <div class="col">
                    <h3 id="section_3">Seção 3</h3>
                    <p>Proin sollicitudin orci ligula, ac bibendum ante porttitor ac. Mauris a sem id augue blandit
                        dapibus. Fusce facilisis mi et velit porttitor suscipit. Praesent ut nunc ullamcorper, pretium
                        augue vitae, bibendum ligula. Duis ut augue lobortis, congue erat et, placerat nisl. Nam sed
                        lobortis leo. Pellentesque gravida hendrerit urna, vitae ullamcorper ante pharetra eget. Integer
                        consectetur laoreet ultricies. Nunc vestibulum pulvinar sodales.</p>
                </div>
            </div>

            <!-- Botão para voltar ao topo, visível apenas quando scroll for maior que 200px -->
            <div class="row mt-3">
                <div class="col text-center">
                    <button v-if="showScrollTopButton" class="btn btn-secondary btn-voltar-topo"
                        @click="scrollToTop">Voltar ao
                        Topo</button>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="row bg-secondary">
                <div class="col">
                    <p>Rodapé</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showScrollTopButton: false // Estado do botão 'Voltar ao Topo'
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll); // Adiciona o listener de rolagem
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll); // Remove o listener de rolagem quando o componente for destruído
    },
    methods: {
        handleScroll() {
            // Mostra o botão se a rolagem for maior que 200px
            this.showScrollTopButton = window.scrollY > 1;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Rola para o topo de forma suave
            });
        }
    }
};
</script>

<style scoped>
.menu-superior {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%),
        inset 0 -1px 0 rgb(0 0 0 / 15%);
}

.destaque {
    padding: 60px 15px;
}

.links {
    flex-direction: row;
}

.links a {
    margin-right: 20px;
}

.btn-voltar-topo {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>