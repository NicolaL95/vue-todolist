const app = new Vue({
    el: "#app",

    data: {
        addedItems: "",
        error: false,
        lists: ["aggiornare il framework", "completare il front-end", "salvare la cheerleader per salvare il mondo"],
        listTrash: [],
        listCompl: []
    },
    methods: {
        removeList_I(i, c_o_r) {
            if (c_o_r == 1) {
                this.listCompl.push(this.lists[i])
            }
            else {
                this.listTrash.push(this.lists[i])
            }
            this.lists.splice(i, 1);
            console.log(this.listTrash)
        },
        addItem() {
            if (this.addedItems.length >= 5) {
                this.lists.push(this.addedItems);
                this.error = false;
            }
            else {
                this.error = true;
            }
            this.addedItems = "";
        },
        addList_I() {

        }
    }
})


