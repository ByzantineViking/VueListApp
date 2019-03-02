<template>
  <div class="hello">
    <div class="holder">

      <form @submit.prevent="addThing">
        <input type="text" placeholder="Make a new entry.." v-model="thing" v-validate="'min:3'" name="thing">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('thing')">{{errors.first('thing')}}</p>
        </transition>
      </form>

      <!-- In current version of vue v-for doesn't work properly inside transition group which causes the animation to always drop the last item-->
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data, number) in things" :key='number'>
          {{ data.thing }}
          <i class="fa fa-minus-circle" 
          @click="remove(number)"></i>
        </li>
        </transition-group>
      </ul>

      <p v-if="things.length >= 5">Take some load of the server and get doing already!</p>
      <p v-else>Easily scaling server structure allows you to make very long lists.</p>

    </div>
  </div>
</template>




<script>
export default {
  name: 'Listing',
  data() {
    return {
      thing: '',
      things: [
        { "thing" : "Get milk" },
        { "thing" : "Write code" } ,
      ],
      

    }
  },
  methods: {
    addThing() {
      this.$validator.validateAll().then((result) => {
        if(result) {
          this.things.push({thing: this.thing});
          this.thing = '';
        }
      })
    },
    remove(id) {
      this.things.splice(id,1);
    }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #ff7675;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  .alert{
    background-color:azure;
    align-self: baseline;
    width: 40%;
    height: 10px;
  }
  i {
    float:right;
    cursor: pointer;
  }


  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.0);
    }
  }
</style>
