export default createNavbar;

import displayOverview from "./overview";
import displayBeginning from "./beginning";
import displayAdvanced from "./advanced";
import { clearContent, navbar, navButton } from "./website";

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
    class NavButton {
    
        constructor(content, id, fx){
            this.content = content;
            this.id = id;
            this.fx = fx;
            this.add();
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

    const specialGrades = document.createElement('button');
        specialGrades.textContent = 'Special Grades (1-5)';
        specialGrades.id = 'special-grades';

    
    
    
    
    
    
    // append
    navbar.appendChild(navHeading);
        const overview = new NavButton('Overview', 'overview-button', displayOverview);
        const beginnerGrades = new NavButton('Beginner Grades (1-3)', 'beginner-grades-button', displayBeginning);
        const advancedGrades = new NavButton('Advanced Grades (1-4)', 'advanced-grades-button', displayAdvanced);

    navbar.appendChild(specialGrades);

    navContainer.appendChild(navbar);
    header.appendChild(navContainer);
}