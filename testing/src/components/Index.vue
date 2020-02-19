<template>
    <div>
        <Index_layout>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, inventore.</p>
           <template v-slot:para><div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque doloribus facilis itaque nam ratione sunt voluptates?</p>
                        </div></template>
        </Index_layout>
    </div>
</template>

<script>
    import Index_layout from "./Alll-Layouts/Index_layout";


    export default {
        name: "Index",
        components: {

            Index_layout

        }
    }
</script>

<style scoped>


</style>