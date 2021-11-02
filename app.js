const app = new Vue({
    el: "#app",
    data: {
        lists: ["aggiornare il framework", "completare il front-end", "salvare la cheerleader per salvare il mondo"]
    },
    methods: {
        removeList_I(i) {
            this.lists.splice(i, 1);
        }
    }
})


