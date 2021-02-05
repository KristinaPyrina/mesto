export default class Section {
    constructor({ items, renderer }, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }

    addItem(elem){
        this._container.prepend(elem);
    }

    clean(){
        this._container.innerHTML = '';
    }

    renderer() {
        this.clean();
        this._items.forEach(item => {
            this._renderer(item);
        })
    }
}
