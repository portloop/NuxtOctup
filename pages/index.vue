<template>
    <div class="wrap mt-[65px]">
        <div class="flex justify-between items-center w-10/12 mx-auto">
            <div class="flex flex-col  text-coal max-w-[615px]">
                <div class="text-[40px] leading-[46px] font-semibold mb-6">Yup. We’re Cutting Your Ecommerce Operation Costs by 30%.</div>
                <div class="text-coal font-2xl max-w-[465px] mb-6">The #1 multichannel analytics platform for brands who want to grow. See all your integrations and platforms in one place.</div>
                <div class="flex">
                    <TealButton class="w-[192px] h-[48px] flex items-center justify-center text-[17px] mr-4" :text="'Try for Free'" />
                    <TransparentButton class="w-[192px] h-[48px] flex items-center justify-center text-[17px] mr-4" :text="'Book a Demo'" />
                </div>
            </div>
            <dotlottie-player class="w-[500px]" src="https://lottie.host/15739b56-595e-4bce-9ff6-5589d1724f82/OLwJOw3yfd.lottie" autoplay
                loop :width="500" />

        </div>
    </div>
</template>
<script>
import TealButton from '~/components/buttons/TealButton.vue';
import TransparentButton from '~/components/buttons/TransparentButton.vue'
export default {
    components: {
        TealButton,
        TransparentButton
    }
}
</script>
<style scoped>
.wrap {
    background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 99.2%);
}
</style>