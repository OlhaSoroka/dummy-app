<template>
  <div>
    <div class="header_container">
      <h1 class="header_text">City Guide</h1>
      <div class="header_select_container">
        <div class="header_select">
          <el-select v-model="value" class="m-2" placeholder="Select your location" size="large" @change="weatherWidgetStore.changeLocation(value)">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
    </div>

    <div class="content_container">
      <div class="guide_container">
        <div class="guide_header">Main Info</div>
        <div class="guide_text">{{citiesInfo }}</div>
      </div>
      <div>
        <WeatherWidgetComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
const { weatherWidgetStore } = useWeatherWidgetComposable();
import { ref } from 'vue';

const value = ref('Kiev');
const citiesInfo = computed(() => cities[value.value]);


const options = [
  {
    value: 'Kiev',
    label: 'Kyiv',
  },
  {
    value: 'London',
    label: 'London',
  },
  {
    value: 'Berlin',
    label: 'Berlin',
  },
  {
    value: 'New-York',
    label: 'New-York',
  },
];
const cities = {
Kiev: "Kyiv, the capital city of Ukraine, is a vibrant metropolis located on the banks of the Dnieper River. It is a city with a rich history, stunning architecture, and a unique blend of Eastern European traditions and modernity. Kyiv offers a wide range of attractions and activities for tourists to enjoy.Whether you're interested in history, culture, or simply enjoying the vibrant city atmosphere, Kyiv is a destination that will leave a lasting impression on any visitor.",
London: 'London, the capital city of the United Kingdom, is a vibrant and cosmopolitan metropolis that offers a wealth of history, culture, and iconic landmarks. It is a city that seamlessly blends tradition with modernity, making it a top destination for tourists from around the world.London is known for its rich history, spanning over two thousand years. It is home to world-famous landmarks, such as the majestic Buckingham Palace, the iconic Big Ben, and the historic Tower of London.',
Berlin: 'Berlin, the capital city of Germany, is a vibrant and dynamic metropolis that effortlessly combines history, culture, and creativity. Known for its rich heritage, diverse neighborhoods, and vibrant arts scene, Berlin is a top destination for travelers from around the globe.Berlin has a fascinating history that is reflected in its architecture, memorials, and museums. The city played a significant role in both World War II and the Cold War, and remnants of its past can be seen throughout its streets and landmarks. ',
'New-York': 'New York City, often referred to as the "Big Apple," is a vibrant and diverse metropolis that captures the essence of urban life. It is one of the most iconic cities in the world, renowned for its skyline, cultural institutions, and energetic atmosphere.New York City is located in the northeastern United States and is composed of five boroughs: Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. It is a global center of finance, media, art, fashion, and entertainment, making it a melting pot of cultures and influences.'
}

</script>

<style lang="css">
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(207, 207, 207);
  box-shadow: 4px 2px 2px rgba(207, 207, 207, 0.493);
  padding: 20px;
  margin-bottom: 50px;
}

.header_text {
  font-size: medium;
  color: dimgrey;
  font-weight: 600;
}

.header_select_container {
  display: flex;
  justify-content: center;
  justify-items: end;
}

.header_select {
  margin-right: 10px;
}

.content_container {
  padding: 50px 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.guide_header {
  font-size: medium;
  color: dimgrey;
  font-weight: 600;
  margin-bottom: 10px;
}

.guide_container {
  width: 50%;
}
.guide_text {
font-size: medium;
}
</style>