const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function() {

    const iconMenu = document.querySelector('.icon-menu');
    const iconCloseMenu = document.querySelector('.icon-close-menu');
    const dropDownContainer = document.querySelector('.drop-down-container');

    if ( dropDownContainer.style.display === 'none'){
        dropDownContainer.style.display = 'block';
        iconMenu.style.display = 'none'
        iconCloseMenu.style.display = 'block';
        document.body.classList.add('overlay-active'); // Add the overlay

        

    } else {
        dropDownContainer.style.display = 'none';
        iconMenu.style.display = 'block'
        iconCloseMenu.style.display = 'none';
        document.body.classList.remove('overlay-active'); // Remove the overlay

    }
    
})

const featuresButton = document.querySelector('.features-btn');

featuresButton.addEventListener('click', function() {

    const featuresArrowUp = document.querySelector('.features-arrow-up');
    const featuresArrowDown = document.querySelector('.features-arrow-down');
    const featuresDropDown = document.querySelector('.features-dropdown')

    

    if (featuresArrowUp.style.display === 'none'){

        featuresArrowUp.style.display = 'inline';
        featuresArrowDown.style.display = 'none';
        featuresDropDown.style.display = 'block';
        
    } else {

        featuresArrowUp.style.display = 'none';
        featuresArrowDown.style.display = 'inline';
        featuresDropDown.style.display = 'none';

    }

    
})

const companyButton = document.querySelector('.company-btn');

companyButton.addEventListener('click', function() {

    const companyArrowUp = document.querySelector('.company-arrow-up');
    const companyArrowDown = document.querySelector('.company-arrow-down');
    const companyDropDown = document.querySelector('.company-dropdown')

    

    if (companyArrowUp.style.display === 'none'){

        companyArrowUp.style.display = 'inline';
        companyArrowDown.style.display = 'none';
        companyDropDown.style.display = 'block';
    } else {

        companyArrowUp.style.display = 'none';
        companyArrowDown.style.display = 'inline';
        companyDropDown.style.display = 'none';

    }
})

document.querySelectorAll('.drop-down-btn').forEach(button => {
    button.onclick = function() {
      let expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
    }
  }); 