Vue.component("to-do-component", {
  props: {},

  data() {
    return {
      toDoList: [],
      newToDo: '',
    };
  },
  methods: {
    add() {
      const newItem = {
        id: Date.now(),
        title: this.newToDo,
      };
      this.toDoList.push(newItem);
      this.newItem = "";
    },
    removeItem(id) {
      this.toDoList = this.toDoList.filter((item) => item.id !== id);
    },
  },

  template: `
            <div> 
                <div class="input-section">
                    <input type="text" v-model="newToDo">
                    <p>{{newToDo}}</p>
                    <button @click="add()">Добавить</button>
                </div>
                <ul>
                    <li v-for="{id, title} in toDoList" :key="id">
                        <p> {{title}} </p>
                        <button @click="removeItem(id)"> удалить </button>
                    </li>
                </ul>
            </div>
    `,
});
