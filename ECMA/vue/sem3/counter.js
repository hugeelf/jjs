Vue.component('counter-component', {
    props: {  },

    data() {
        return {
            counter: 0,
        }
    },

    template: `
        <div> 
            <h2> {{counter}}</h2>
            <button @click="counter++">+</button>
            <button @click="counter--">-</button>        
        </div>
    `
});