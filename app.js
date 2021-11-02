const app = new Vue({
    el: "#app",

    data: {
        addedItems: "",
        error: false,
        lists: ["aggiornare il framework", "completare il front-end", "salvare la cheerleader per salvare il mondo"],
        /* Array contenente tutti gli elementi nel cestino */
        listTrash: [],
        /* Array contenente tutti gli elementi completati */
        listCompl: []
    },

    methods: {
        /* Rimuove un elemento specifico(i) dalla lista e lo posiziona nella giusta cartella in base a quale pulsante è stato premuto(c_o_r) */
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
        /* Aggiunge un elemento alla lista con relativo controllo */
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
        /* Ri-aggiunge un elemento specifico(i) dalle cartelle completed o trash(r_t_l) alla lista principale */
        returnToList(i, r_t_l) {
            if (r_t_l == 1) {
                this.lists.push(this.listCompl[i])
                this.listCompl.splice(i, 1);
            }
            else {
                this.lists.push(this.listTrash[i])
                this.listTrash.splice(i, 1);
            }
        },
        removeAll() {
            this.listTrash = [];
        }
    }
})


