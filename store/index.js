import Vue from 'vue';
import Vuex from 'vuex';
import menus from '../api/menus';

export const state = () => ({
    counter: 0
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, { todo }) {
        state.list.splice(state.list.IndexOf(todo), 1)
    },
    toggle(todo) {
        todo.done = !todo.done
    }
}