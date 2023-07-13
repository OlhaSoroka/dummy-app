<template>
  <div>
    <WeatherWidgetComponent />


    <button @click="weatherWidgetStore.changeLocation('London')">Change location</button>
  </div>
</template>

<script setup>
const {weatherWidgetStore} = useWeatherWidgetComposable();
</script>
