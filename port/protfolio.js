gsap.to("#Header",{
    backgroundColor:"#001d3d",
    duration:0.5,
    height:"80px",

    scrollTrigger:{
        trigger:"Header",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top 11%",
        scrub:1, 
    }
})
