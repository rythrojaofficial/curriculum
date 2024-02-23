export default displayMenu;

function displayMenu(){
    const title = document.createElement('h2');
        title.classList.add('current-offerings-title');
        title.textContent = 'Current Offerings';

    const container = document.createElement('div');
        container.classList.add('curent-offerings-conatiner');
        container.appendChild('title');

    const divContent = document.getElementById('content');

    let experienceLevel = {
        none:'No experience Required ✔️',
        basic:'Introductory Experience recommended 🤙',
        advanced:'Experience recommended 🤙'
    }

    class Offering {
        constructor(name, runTime, price, experience, info){
            this.name = name;
            this.runTime = runTime; // in minutes
            this.price = price;
            this.experience = experienceLevel(experience);
            this.info = info;
        };

        create(){
            let offering = document.createElement('div');
                offering.classList.add('current-offerings-offering')
            
            let offeringName = document.createElement('h3');
                offeringName.classList.add('offering-name');
                offeringName.textContent  = `${this.name} (${this.runTime}m)`;

            let offeringPrice = document.createElement('div');
                offeringPrice.classList.add('offering-price');
                offeringPrice.textContent = `Drop in price: ${this.price}`

            let offeringInfo = document.createElement('div');
                offeringInfo.classList.add('offering-info');
                offeringInfo.textContent = this.info;

            let offeringExperience = document.createElement('span');
                offeringExperience.classList.add('offering-experience');
                offeringExperience.textContent = this.experience;

            offering.appendChild(offeringName);
            offering.appendChild(offeringPrice);
            offering.appendChild(offeringInfo);
            offering.appendChild(offeringExperience);
            
            

            container.appendChild(offering);
            divContent.appendChild(container);
        }

    }

    const openTrickingOffering = new Offering(
        'Open Tricking',
        120,
        20,
    )
}

