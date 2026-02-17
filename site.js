/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
            
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
         title: 'IMDB + MKs Top Movies',
         owner: 'rosenode',
         url: 'https://github.com/rosenode/NJIT-3'
      }
    },
      methods: {
            getMonthText (dataArray) {
                  if(dataArray[1] == 1){
                        return "January " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 2){
                        return "February " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 3){
                        return "March " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 4){
                        return "April " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 5){
                        return "May " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 6){
                        return "June " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 7){
                        return "July " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 8){
                        return "August " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 9){
                        return "September " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 10){
                        return "October " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 11){
                        return "November " + dataArray[2] + ", " + dataArray[0]
                  }
                  if(dataArray[1] == 12){
                        return "December " + dataArray[2] + ", " + dataArray[0]
                  }
      },
      like(index){
            this.movies[index].likes++
      },
      dislike(index){
            this.movies[index].dislikes++
      },
posterClick(index){
      let length = this.movies[index].posters.length

      this.movies[index].posterIndex++
      if(this.movies[index].posterIndex >= length){
            this.movies[index].posterIndex = 0
      }
},
timeText(minutes){
      let hr = Math.floor(minutes / 60)
      let min = minutes % 60
      return hr + "h " + min + "m"
}
}
});

vue_app.mount('#vue_app')
