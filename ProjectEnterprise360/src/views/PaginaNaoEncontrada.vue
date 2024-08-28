<template>
    <div class="container d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold text-danger">404</h1>
            <p class="fs-3"> <span class="text-danger">Oops!</span> Página não encontrada.</p>
            <p class="lead">
                A página que você está procurando pode ter sido removida ou o endereço digitado está incorreto.
            </p>
            <router-link to="/home" class="btn btn-primary">
                Voltar para Home
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaginaNaoEncontrada'
}
</script>

<style scoped>
/* Estilos adicionais opcionais */
.container {
    max-width: 600px;
}
</style>
