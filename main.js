class DataStruct {
    constructor(classname) {
        this.pointers = {};
        this.box = document.querySelector(classname);
    }

    show() {
        let q = [this.pointers['head']];
        while (q.length > 0) {
            let item = q[0];
            let children = item.children;

            let elem = item.makeElement();
            if (item.parent == null)
                this.box.appendChild(elem);
            else
                item.parent.element.children[1].appendChild(elem);

            q.push(...children);
            q.splice(0, 1);
        }
    }
}

let data = new DS_Node();
data.data = 100;
data.addChild(new DS_Node(10));
node = data.addChild(new DS_Node(20));
data.addChild(new DS_Node(30));
data.leftChild.addChild(new DS_Node(1));
data.leftChild.addChild(new DS_Node(2));
data.leftChild.addChild(new DS_Node(3));
node.addChild(new DS_Node(1));
node.addChild(new DS_Node(2));
node.addChild(new DS_Node(3));
console.log(data)

let tree = new DataStruct('.sand-box');
tree.pointers['head'] = data;
tree.show();
