export default createNavbar;

import displayOverview from "./overview";
import displayBeginning from "./beginning";
import { clearContent } from "./website";

function createNavbar(){
    // =====================================
    // create elements, set id, set contents
    // =====================================
    const header = document.querySelector('header');



    const navContainer = document.createElement('div');
        navContainer.classList.add('nav-container');

    const navHeadingContainer = document.createElement('div');
        navHeadingContainer.classList.add('nav-heading-container');

    const navHeading = document.createElement('h1');
        navHeading.classList.add('nav-heading');
        navHeading.textContent = 'Axis 45 Grade Scale & Curriculum';

    const navbar = document.createElement('nav');

    // nav buttons for nav bar

    class navButton {
        constructor(content, id, fx){
            this.content = content;
            this.id = id;
            this.fx = fx;
        }

        add(){
            let myButton = document.createElement('button');
                myButton.textContent = this.content;
                myButton.id = this.id;
                myButton.addEventListener('click', ()=>{
                    clearContent();
                    (this.fx)();
                    
                });

            navbar.appendChild(myButton);
        }
        
    }



    


    const advancedGrades = document.createElement('button');
        advancedGrades.textContent = 'Advanced Grades (1-4)';
        advancedGrades.id = 'advanced-grades';

    const specialGrades = document.createElement('button');
        specialGrades.textContent = 'Special Grades (1-5)';
        specialGrades.id = 'special-grades';

    
    
    
    
    
    
    // append
    navbar.appendChild(navHeading);
        const overview = new navButton('Overview', 'overview-button', displayOverview);
        overview.add();

        const beginningGrades = new navButton('Beginning Grades (1-3)', 'beginning-grades-button', displayBeginning);
        beginningGrades.add();
    // navbar.appendChild(overview);
    // navbar.appendChild(beginningGrades);
    navbar.appendChild(advancedGrades);
    navbar.appendChild(specialGrades);

    navContainer.appendChild(navbar);
    header.appendChild(navContainer);
}