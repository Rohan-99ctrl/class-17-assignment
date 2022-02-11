const tabLink = document.querySelectorAll('.leftOption .listLink li a');
const tabIcon = document.querySelectorAll('.leftOption .listLink li a i');
const tabPaneAll = document.querySelectorAll('.RightOption .tabPane');


tabLink.forEach((item) => {

    item.addEventListener('click', function(event){

        event.preventDefault();

        tabLink.forEach((item) => {
            item.classList.remove('active');
        });

        item.classList.add('active');

        // ==================

        tabIcon.forEach(iconItem => {
            iconItem.classList.remove('active');
        });

        this.firstChild.classList.add('active');

        
        // tabIcon.classList.add('active');

        // ==================
        
        const tabPane2 = document.querySelector(this.getAttribute('href'));

        tabPaneAll.forEach((paneItem) => {
            paneItem.classList.remove('active');
        });

        tabPane2.classList.add('active');

    });

});