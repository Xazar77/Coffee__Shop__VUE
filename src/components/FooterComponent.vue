<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        
                        <link-item-component
                            :link="links.footer.link"
                            classLink="footer__item"
                        >     
                            <img 
                                :src="require(`@/assets/logo/${links.footer.icon}`)" 
                                :alt="links.footer.icon"
                            />
                        </link-item-component>

                        <link-item-component 
                        v-for="link in links.other" 
                        :key="link.id" 
                        classLink="footer__item"
                        :link="link.link" 
                        :text="link.text" 
                        />
                        
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>

<script>
import LinkItemComponent from './LinkItemComponent.vue';
export default {
    components: { LinkItemComponent },
    computed:{
        links() {
            return this.$store.getters["getFooterLinks"]
        }
    }
}

</script>