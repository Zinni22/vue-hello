//3. Inizializzo VUE
const { createApp } = Vue;

createApp({
    data(){
        return{

            mainTitle: 'Brand Collabs',

            post: {
                image: 'https://global-uploads.webflow.com/5e544b8d3ec78690b06d0685/62276d94c342fd6b78140c88_5G5A0821-min-p-500.jpeg',
                title: 'Coco Gauff x Barilla',
                description: 'La produzione Cantera ha avuto modo di curare la campagna promozionale di Barilla che ha coinvolto la nuova stella del tennis mondiale, la quindicenne francese Coco Gauff.'
            }
        }
    },

    methods: {

    }


}).mount('#app');