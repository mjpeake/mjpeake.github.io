window.onload = function () {
    const cfg = {
        particleCount: 10000,
        particleContain: false,
        particleColor: "red",
        backgroundColor: "red",
        backgroundRefresh: false,
    }
    new p5(flowfield(cfg), 'showcase');
}