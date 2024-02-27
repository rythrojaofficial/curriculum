
export const content = document.querySelector('#content');
export function clearContent(){
        content.textContent = '';
}

export class Navbar{
    constructor(arrayOfButtonObjects, classlist = 'y'){
        this.arrayOfButtons = arrayOfButtonObjects;
        this.classList = classlist;
        this.add();
    }

    add(){
        let nav = document.createElement('nav');
        for (let i = 0; i < this.arrayOfButtons.length; i++){
            let button = document.createElement('button');
                button.textContent = this.arrayOfButtons[i].content;
                button.addEventListener('click', ()=>{
                    (this.arrayOfButtons[i].fx)()
                })
            nav.appendChild(button);
        }
        content.appendChild(nav);
    }
}

export class Heading{
        
    constructor(content, classlist = 'x', hSize = 'h2', ){
        this.content = content;
        this.hSize = hSize;
        this.classes = classlist;
        this.add();
    }


    add(){
        let heading = document.createElement(this.hSize);
            heading.textContent = this.content;
            heading.classList.add(this.classes)
        content.appendChild(heading);

    }
    
}


export class Paragraph{
    constructor(info){
        this.info = info
        this.add();
    }

    add(){
        let paragraph = document.createElement('p');
            paragraph.textContent = this.info;
        content.appendChild(paragraph);
    }

}

export class UnorderedList{
    constructor(heading, arrayOfLi, idname = ''){
        this.heading = heading;
        this.listArray = arrayOfLi;
        this.idname = idname;
        this.add();
    }
    add(){
        let ul = document.createElement('ul');
            ul.textContent = this.heading;
            if (this.idname !== ''){
                ul.setAttribute('id', this.idname)
            }
        
        for (let i = 0; i < this.listArray.length; i++){
            let li = document.createElement('li');
                li.textContent = this.listArray[i];
            ul.appendChild(li);
        }
        content.appendChild(ul);
    }
}

export class Sublist{
    constructor(heading, arrayOfLi, mainList, idname = ''){
        this.heading = heading;
        this.mainList = mainList;
        this.listArray = arrayOfLi;
        this.idname = idname;
        this.add();
    }
    add(){
        let ul = document.createElement('ul');
            ul.textContent = this.heading;
            if (this.idname !== ''){
                ul.setAttribute('id', this.idname)
            }
        
        for (let i = 0; i < this.listArray.length; i++){
            let li = document.createElement('li');
                li.textContent = this.listArray[i];
            ul.appendChild(li);
        }
        document.getElementById(this.mainList).appendChild(ul);
    }
    

    

}