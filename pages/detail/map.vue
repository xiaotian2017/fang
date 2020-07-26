<template>
    <map style="width: 100%; height: 100vh;" 
        :latitude="latitude"
        :longitude="longitude" 
        :markers="covers">
    </map>
</template>]

<script>
import { mapGetters } from "vuex"

export default {
    data() {
        return {
            latitude: 22.909,
            longitude: 114.39742,
            covers: [{
                latitude: 22.909,
                longitude: 114.39742,
            }]
        }
    },
    computed: {
        ...mapGetters('sDetail',['houseInfo'])
    },
    onLoad() {
        this.latitude = this.houseInfo.latitude
        this.longitude = this.houseInfo.longitude

        this.covers = [
            { latitude: this.latitude, longitude: this.longitude }
        ]

    }
}
</script>