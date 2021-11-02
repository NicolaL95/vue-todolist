const app = new Vue({
    el: "#app",

    data: {
        addedItems: "",
        lists: ["aggiornare il framework", "completare il front-end", "salvare la cheerleader per salvare il mondo"]
    },
    methods: {
        removeList_I(i) {
            this.lists.splice(i, 1);
        },
        addList_I() {
            if (this.addedItems.length >= 5) {
                this.lists.push(this.addedItems);
            }
            else {
                alert("cia fraa")
            }
            this.addedItems = "";
        }
    }
})


