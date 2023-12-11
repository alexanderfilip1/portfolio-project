<template>
<MobileHeader/>
<MobileHome/>
<FooterComponent/>
</template>

<script>
import MobileHeader from './MobileHeader.vue';
import MobileHome from './MobileHome.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    components: { MobileHeader, MobileHome, FooterComponent }
}
</script>

<style scoped>

</style>