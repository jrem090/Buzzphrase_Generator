var app = new Vue({
    el: '#app',
    data: {
        message: 'Click to create Buzzword'
    },
    methods: {
        generateBuzzword: function () {
            this.message = "";
            switch (Math.floor(Math.random() * 12)) {
                case 0:
                    this.message += "Integrated ";
                    break;
                case 1:
                    this.message += "Total ";
                    break;
                case 2:
                    this.message += "Systemized ";
                    break;
                case 3:
                    this.message += "Parallel ";
                    break;
                case 4:
                    this.message += "Functional ";
                    break;
                case 5:
                    this.message += "Responsive ";
                    break;
                case 6:
                    this.message += "Optimal ";
                    break;
                case 7:
                    this.message += "Synchronized ";
                    break;
                case 8:
                    this.message += "Compatable ";
                    break;
                case 9:
                    this.message += "Balanced ";
                    break;
                case 10:
                    this.message += "Web-based ";
                    break;
                case 11:
                    this.message += "Virtual ";
                    break;
            }
            
            //Second word
            switch (Math.floor(Math.random() * 13)) {
                case 0:
                    this.message += "management ";
                    break;
                case 1:
                    this.message += "organizational ";
                    break;
                case 2:
                    this.message += "monitored ";
                    break;
                case 3:
                    this.message += "reciprocal ";
                    break;
                case 4:
                    this.message += "digital ";
                    break;
                case 5:
                    this.message += "logistical ";
                    break;
                case 6:
                    this.message += "transitional ";
                    break;
                case 7:
                    this.message += "incremental ";
                    break;
                case 8:
                    this.message += "third-generation ";
                    break;
                case 9:
                    this.message += "policy ";
                    break;
                case 10:
                    this.message += "blockchain ";
                    break;
                case 11:
                    this.message += "distributed ";
                    break;
                 case 12:
                    this.message += "automated ";
                    break;
            }

            //third word
            switch (Math.floor(Math.random() * 13)) {
                case 0:
                    this.message += "options";
                    break;
                case 1:
                    this.message += "flexibility";
                    break;
                case 2:
                    this.message += "capability";
                    break;
                case 3:
                    this.message += "mobility";
                    break;
                case 4:
                    this.message += "programming";
                    break;
                case 5:
                    this.message += "concept";
                    break;
                case 6:
                    this.message += "time-phase";
                    break;
                case 7:
                    this.message += "projection";
                    break;
                case 8:
                    this.message += "hardware";
                    break;
                case 9:
                    this.message += "contingency";
                    break;
                case 10:
                    this.message += "prototype";
                    break;
                case 11:
                    this.message += "paradigm";
                    break;
                case 12:
                    this.message += "AI";
                    break;
            }
        }
    }
})
