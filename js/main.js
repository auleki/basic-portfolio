window.onload = function () {
    lax.setup()

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax);
}

document.addEventListener("mousemove", parallax);

        function parallax(e) {
            this.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute("data-speed");
                const x = (window.innerWidth - e.pageX*speed)/85;
                const y = (window.innerHeight - e.pageY*speed)/85;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }


// ANIMATING PROGRESS BAR 

// setInterval(() => {
//     let progress = document.querySelector('.custom-progress');
//     if (progress.value < progress.max) {
//         progress.value += 1;
//     }
// }, 25)

barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0
            });
        },
        enter(data) {
            return gsap.from(data.next.contanier, {
                opacity: 0
            })
        }
    }]
})

