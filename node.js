class DS_Node {
    data;
    parent;
    leftChild;
    rightSibling;
    element;

    constructor(data = null) {
        this.data = data;
        this.parent = null;
        this.leftChild = null;
        this.rightSibling = null;
        this.element = null;
    }

    findLastChildPtr() {
        let child = this.leftChild;
        if (child == null)
            return null
        while (child.rightSibling != null)
            child = child.rightSibling;
        return child;
    }

    addChild(node) {
        let last_child = this.findLastChildPtr();
        if (last_child == null)
            this.leftChild = node;
        else
            last_child.rightSibling = node;
        node.parent = this;
        return node;
    }

    makeElement() {
        this.element = document.createElement('div');
        let data_body = document.createElement('div');
        let data = document.createElement('div');
        let children = document.createElement('div');

        this.element.className = 'ds-node';
        data_body.className = 'ds-data';
        children.className = 'ds-children';

        data.innerText = this.data;
        this.element.appendChild(data_body);
        data_body.appendChild(data);
        this.element.appendChild(children);

        return this.element;
    }

    get children() {
        let lst = [];
        if (this.leftChild == null)
            return lst;

        let child = this.leftChild;
        while (child != null) {
            lst.push(child);
            child = child.rightSibling;
        }
        return lst;
    }

}