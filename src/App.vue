<!-- root component -->
<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar'
const API_KEY = 'AIzaSyDOcZ3jn6y8wkF86OWgUBqZ631QxsNVRT4'

export default {
  name: 'App',
  components: {
    SearchBar,
  },
  methods: {
    // going to execute the request to the youtube api
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet', // tells youtube api what type of info we want to get back
          q: searchTerm // q stands for query
        }
      }).then(res => console.log(res)).catch(console.error)
    }
  }
}
</script>
