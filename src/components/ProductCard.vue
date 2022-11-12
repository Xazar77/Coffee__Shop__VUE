<template>
    <div :class="classItem" @click="onEmmit(card.id)">
        <img :src="require(`@/assets/img/${card.image}`)" :alt="card.image">
        <!-- <div :class="classItem + '-title'">
            {{card.name}}
        </div>
        <div :class="classItem === 'shop__item'? classItem + '-country': null">{{card.country}}</div>
        <div :class="classItem + '-price'">{{card.price}}$</div> -->
        <div class="best__item-title">{{card.name}}</div>
        <div class="best__item-price">{{card.price | addCurrent}}</div>
    </div>

</template>

<script>

export default {
    props: {
        
        classItem: {
            type: String,
            required: false,
        },
        
        card: {
            type: Object,
            required: true
        }
    },
    methods: {
        onEmmit(id) {
            this.$emit('onNavigate', id)
        }
    }
}

</script>