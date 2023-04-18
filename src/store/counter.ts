import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {

            count: 1
        }
    },

    getters: {
        times2: (state) => state.const*2
    },

    actions:{
        increment(val = 1){
            this.count += val
        }
    }
})