function readMore(city) {
    let dots = document.querySelector(`.monthBody[data-city="${city}"] .dots`);
    let moreText = document.querySelector(`.monthBody[data-city="${city}"] .more`);
    let btnText = document.querySelector(`.monthBody[data-city="${city}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = `  Read More &nbsp; <i class=" fas fa-angle-down"></i>`;
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = ` Read less &nbsp; <i class=" fas fa-angle-up"></i>`;
        moreText.style.display = "block";
    }
}

