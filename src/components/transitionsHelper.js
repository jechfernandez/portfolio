const isInViewPort = el => {
    const rect = el.getBoundingClientRect()
    const verInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
    const horInView = (rect.left <= window.innerHeight) && ((rect.left + rect.width) >= 0)
    return (verInView && horInView)

}

let spaceLeft, speedVertical, speedHorizontal


export const stickyNavbar = () => {

    //Scroll Effect
    if (window.scrollY > 100) {
        document.querySelector('.navbar').classList.add('sticky')
        document.querySelector('.drop-menu').classList.add('sticky')

    } else {

        document.querySelector('.navbar').classList.remove('sticky')
        document.querySelector('.drop-menu').classList.remove('sticky')

    }
}

export const revealContainers = () => {

    // //Reveal Effects
    document.querySelectorAll('.reveal').forEach(elm => {
        isInViewPort(elm) ? elm.classList.add('visible') : elm.classList.remove('visible')
    })
}

export const heroTitleAnimation = () => {


    isInViewPort(document.querySelector('.feature')) ?
        document.querySelector('.feature').classList.add('visible')
        :
        document.querySelector('.feature').classList.remove('visible')

}

export const parallaxEffect = () => {
    document.querySelectorAll('.parallax').forEach(elm => {

        spaceLeft = elm.getBoundingClientRect().top

        elm.dataset.axis === 'horizontal' ? speedHorizontal = elm.dataset.speed * spaceLeft : speedHorizontal = 0
        elm.dataset.axis === 'vertical' ? speedVertical = elm.dataset.speed * spaceLeft : speedVertical = 0

        elm.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`
    })
}

