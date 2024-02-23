
export const content = document.querySelector('#content');
export function clearContent(){
    const content = document.querySelector('#content');
    // clear content 
        content.textContent = '';
}

export class Heading{
        
    constructor(hSize, content, classlist){
        this.hSize = hSize;
        this.content = content;
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