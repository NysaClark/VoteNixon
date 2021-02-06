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

// let check = 0;

// 4. onclick event: redirect to congrats page
nixonImg.addEventListener("click",function(){
    window.location.href = "congrats.html";
})
// onclick event: replace image with img 2
mcGovernImg.addEventListener("click", function(){
    mcGovernImg.style.display = "none";
    mcGovernImg2.style.display = "block";
    fadeIn(document.getElementById('mcGovernImg2'), 1000);
})

// 5. contextmenu event: redirect to check 1
mcGovernImg2.addEventListener("contextmenu", function(){
    window.location.href = "check1.html";
})

//6. mouseover & mouseleave: add border & cursor on images
// Nixon image
nixonImg.addEventListener("mouseover", function(){
    nixonImg.style.border = "3px solid #DC1D25";
});
nixonImg.addEventListener("mouseleave", function(){
    nixonImg.style.border = "none";
});
// McGovern images
mcGovernImg.addEventListener("mouseover", function(){
    mcGovernImg.style.border = "3px solid #0E4D82";
    mcGovernImg.style.cursor = "url(images/donkeyCursor.png), pointer";
});
mcGovernImg.addEventListener("mouseleave", function(){
    mcGovernImg.style.border = "none";
    mcGovernImg.style.cursor = "url(images/nixonface.png), pointer";
})
mcGovernImg2.addEventListener("mouseover", function(){
    mcGovernImg2.style.border = "3px solid #0E4D82";
    mcGovernImg2.style.cursor = "url(images/donkeyCursor.png), pointer";
});
mcGovernImg2.addEventListener("mouseleave", function(){
    mcGovernImg2.style.border = "none";
    mcGovernImg2.style.cursor = "url(images/nixonface.png), pointer";
})
