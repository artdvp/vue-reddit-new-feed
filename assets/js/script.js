
// Parent | subreddit component
var subreddit = Vue.component('subreddit', {
  template : '#subreddit',
  props: ['name'],
  data: function(){
    return {
      posts: []
    }
  },
  created: function(){
    this.$http.get("https://www.reddit.com/r/" + this.name + "/top.json?limit=6")
    .then(function(resp){
      console.log(resp);
      if(typeof resp.data == 'string'){
        resp.data = JSON.parse(resp.data);
      }
      this.posts = resp.data.data.children;
    });
  }
});

// Child | Component

var post = Vue.component('post', {
  template: '#post',
  props: ['item'],
  methods: {
    getImageBackgroundCSS: function(img) {
            if(img && img!='self' && img!='nsfw') {
                return 'background-image: url(' + img + ')';    
            }
            else {
                return 'background-image: url(assets/img/placeholder.png)'; 
            }
        }       
  }
});

// filter
Vue.filter('uppercase',function(value){
  return value.toUpperCase();
});

Vue.filter('truncate', function(value){
  var length = 60;
  if(value.length <= length){
    return value;
  }else{
    return value.substring(0,length) + '...';
  }
})

// Initialize app
new Vue({
  el:'#main'
});