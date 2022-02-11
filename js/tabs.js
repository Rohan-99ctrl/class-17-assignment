// tabs

const rohan_tab = document.querySelectorAll('.rohan_tab .tab_menu ul li a');
const tab_pane_all = document.querySelectorAll('.rohan_tab .tab_pane');


rohan_tab.forEach((item) => {

    item.addEventListener('click', function(event){

        event.preventDefault();
        rohan_tab.forEach((item) => {
            item.classList.remove('active');
        });

        item.classList.add('active');

        const tab_pane = document.querySelector(this.getAttribute('href'));

        tab_pane_all.forEach((paneItem) => {
            paneItem.classList.remove('active');
        });

        tab_pane.classList.add('active');

    });

});










