const _menus = [
    {'id': 1, 'Restaurant': 'McDonalds', 'price': 15},
    {'id': 2, 'Restaurant': 'OTacos', 'price': 10},
    {'id': 3, 'Restaurant': 'KFC', 'price': 20}
]

export default {
    getMenus (cb) {
        setTimeout(() => cb(_menus),1000)
    },

    buyMenus (menus, cb, errorCb) {
        setTimeout(() => {
            (Math.random() > 0.5 || navigator.webdriver)
            ? cb()
            : errorCb()
        }, 1000)
    }
}