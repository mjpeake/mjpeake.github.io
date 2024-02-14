$(document).ready(function () {
    const color = $('#showcase').css("color");
    const bgColor = $('#showcase').css("background-color");
    new p5(FlowFields.TraceField(color, bgColor), 'showcase');
});