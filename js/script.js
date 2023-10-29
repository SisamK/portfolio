const cubes = document.querySelectorAll(".cube");

cubes.forEach((cube, index) => {
    cube.addEventListener("click", () => {
        switch (index) {
            case 0:
                window.location.href = "home.html";
                break;
            case 1:
                window.location.href = "about.html";
                break;
            case 2:
                window.location.href = "portfolio.html";
                break;
            case 3:
                window.location.href = "blog.html";
                break;
            case 4:
                window.location.href = "blog.html";
                break;
        }
    });
});