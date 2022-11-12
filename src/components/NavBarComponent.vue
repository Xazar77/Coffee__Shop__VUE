<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            
            <link-item-component 
            :link="links.header.link" 
            classLink="header__item">
                <img :src="require(`@/assets/logo/${links.header.icon}`)" 
                    :alt="links.header.icon"
                />
            </link-item-component>

            <link-item-component 
            v-for="link in links.other" 
            :key="link.id" 
            classLink="header__item" 
            :link="link.link"
            :text="link.text" 
            />
        </ul>
    </header>
</template>


<script>
import LinkItemComponent from './LinkItemComponent.vue';
export default {
    components: { LinkItemComponent },
    computed:{
        links() {
            return this.$store.getters["getHeaderLinks"]
        }
    }
}

</script>