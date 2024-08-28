<template>
    <div>
        <h3>Serviços</h3>
        <hr>
        <div class="row">
            <div class="col mb-2" v-for="service in data" :key="service.id">
                <div class="card" style="width: 11rem">
                    <img :src="`/img/${service.icone}`" :alt="service.servico" :title="service.servico"
                        class="card-img-top">
                    <div class="card-body text-center">
                        <router-link :to="{ name: 'servico', params: { id: service.id } }">
                            <p class="card-text">{{ service.servico }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <router-view class="mt-3"></router-view>
        <router-view name="option"></router-view>
        <router-view name="indicators"></router-view>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin';
export default {
    name: 'Servicos',
    mixins: [ApiMixin],
    created() {
        let url = 'http://localhost:3000/servicos'
        this.getData(url)
    }
}
</script>