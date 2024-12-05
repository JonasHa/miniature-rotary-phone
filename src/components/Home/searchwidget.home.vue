<template>
    <div>
        <component :is="'script'"
            src="https://tp.media/content?currency=eur&trs=177530&shmarker=371662&show_hotels=false&powered_by=true&locale=en&searchUrl=tickets.skyviator.com%2Fflights&primary_override=%2332a8dd&color_button=%232681ff&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&no_labels=&plain=true&promo_id=7879&campaign_id=100"
            charset="utf-8" async>
        </component>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sw: 1
        }
    }
}
</script>

<style>
.search-container {
    border-radius: 35px;
    height: 200px;
    width: 90%;
    border-top-left-radius: 0px;
}

@media screen and (max-width:500px) {
    .search-container {
        border-radius: 35px;
        height: 100px;
        width: 90%;
        border-top-left-radius: 0px;
    }
}
</style>