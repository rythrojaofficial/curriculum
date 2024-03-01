export default createNavbar;

import displayOverview from "./display/overview";
import displayBeginning from "./display/beginning";
import displayAdvanced from "./display/advanced";
import { clearContent, Navbar, navbar, navButton } from "./website";
import displaySpecial from "./display/special";

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
        navHeading.textContent = 'Axis 45 Curriculum & Grade Scale ⬅️';
        navHeading.addEventListener('click', ()=>{
            switch(navHeading.textContent){
                case 'Axis 45 Curriculum & Grade Scale ⬅️':
                    navHeading.textContent = 'Axis 45 Curriculum & Grade Scale ⬇️';
                    navHeading.style.fontSize = 'medium';
                    navbar.classList.add('hidden');
                    break;
                case 'Axis 45 Curriculum & Grade Scale ⬇️':
                    navHeading.textContent = 'Axis 45 Curriculum & Grade Scale ⬅️';
                    navHeading.style.fontSize = '2rem';
                    navbar.classList.remove('hidden');
                    break;
                default:
                    console.log('error navHeading');
                    break
            }
        })

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

    
    
    
    
    
    
    // append
    navContainer.appendChild(navHeading);
        const overview = new NavButton('Overview', 'overview-button', displayOverview);
        const beginnerGrades = new NavButton('Beginner Grades (1-3)', 'beginner-grades-button', displayBeginning);
        const advancedGrades = new NavButton('Advanced Grades (1-4)', 'advanced-grades-button', displayAdvanced);
        const specialGrades = new NavButton('Special Grades (1-5)', 'special-grades-button', displaySpecial);
        
    navContainer.appendChild(navbar);
    header.appendChild(navContainer);
}