
export const content = document.querySelector('#content');
export function clearContent(){
    const content = document.querySelector('#content');
    // clear content 
        content.textContent = '';
}

export class Heading{
        
    constructor(content, classlist = 'x', hSize = 'h2', ){
        this.content = content;
        this.hSize = hSize;
        this.classes = classlist;
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
    }

    add(){
        let paragraph = document.createElement('p');
            paragraph.textContent = this.info;
        content.appendChild(paragraph);
    }

}

export class UnorderedList{
    constructor(heading, arrayOfLi){
        this.heading = heading;
        this.listArray = arrayOfLi;
    }
    add(){
        let ul = document.createElement('ul');
            ul.textContent = this.heading;
        
        for (let i = 0; i < this.listArray.length; i++){
            let li = document.createElement('li');
                li.textContent = this.listArray[i];
            ul.appendChild(li);
        }
        content.appendChild(ul);
    }
}