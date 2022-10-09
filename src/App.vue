
  <script setup>
    import MovieSelector from './components/MovieSelector.vue'
    import CinemaSeat from './components/CinemaSeat.vue'
  </script>

  <script>
  export default {
}
  </script>
  <template>
    <div class="flex flex-col items-center gap-4">
      <MovieSelector/>
      <div class="h-lgCinema w-60 bg-white-cinema my-3.5 shadow-lg shadow-3xl"></div>
   <CinemaSeat/>
    </div>
  </template>

