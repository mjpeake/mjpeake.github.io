$(document).ready(function () {
    const color = $('#home-showcase').css("color");
    const bgColor = $('#home-showcase').css("background-color");
    new p5(FlowFields.TraceField(color, bgColor), 'home-showcase');
});