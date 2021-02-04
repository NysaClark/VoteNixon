//2. onload event: loads images w/ fade in animation
window.onload = function () {
    fadeIn(document.getElementById('nixonImg'), 1000);
    fadeIn(document.getElementById('mcGovernImg'), 1000);
}
function fadeIn(el, time) {
    el.style.opacity = 0;
    el.style.display = "block";
    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

//6. mouseover & mouseleave: add border & cursor on images
// Nixon image
nixonImg.addEventListener("mouseover", function(){
    nixonImg.style.border = "3px solid #DC1D25";
});
nixonImg.addEventListener("mouseleave", function(){
    nixonImg.style.border = "none";
});
// McGovern image
mcGovernImg.addEventListener("mouseover", function(){
    mcGovernImg.style.border = "3px solid #0E4D82";
    mcGovernImg.style.cursor = "url(images/donkeyCursor.png), pointer";
});
mcGovernImg.addEventListener("mouseleave", function(){
    mcGovernImg.style.border = "none";
    mcGovernImg.style.cursor = "url(images/nixonface.png), pointer";
})