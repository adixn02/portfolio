     let hamburger = document.querySelector('.hamburger')
        let phoneMenu = document.querySelector('.header-menu')
        let lin1 = document.querySelector('.line1')
        let lin2 = document.querySelector('.line2')
        let lin3 = document.querySelector('.line3')
        hamburger.addEventListener('click', () => {
            phoneMenu.classList.toggle('active');
            lin1.classList.toggle('active')
            lin2.classList.toggle('active')
            lin3.classList.toggle('active')
        })
        window.addEventListener('scroll',()=>{
            phoneMenu.classList.remove('active');
            lin1.classList.remove('active')
            lin2.classList.remove('active')
            lin3.classList.remove('active')
        })
