<template>
    <div>
        <i v-for="star in stars" :key="star.id" :class="star.style" @click.prevent="markEvaluation(star.id)"></i>
    </div>
</template>

<script>
export default {
    name: 'InputStar',
    props: {
        numberStars: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        stars: [],
        rating: 0
    }),
    created() {
        this.startStars()
    },
    methods: {
        startStars() {
            for (let i = 0; i < this.numberStars; i++) {
                this.stars[i] = { id: i, style: 'bi-star star' }
            }
        },
        markEvaluation(number) {
            this.startStars()

            this.rating = number + 1

            for (let i = 0; i < this.rating; i++) {
                this.stars[i].style = 'bi-star-fill star filled'
            }

            /* this.$emit('rate', this.rating) */
            this.$emit('update:rate', this.rating)
        }
    }
}
</script>

<style scoped>
.star {
    font-size: 1.5rem;
    color: #999;
    margin: 0px 2px
}

.filled {
    color: #FC0;
}
</style>