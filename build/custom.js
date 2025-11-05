// Funksion për të hapur/mbyllur përshkrimin e recetës
function toggleDescription(id) {
    var desc = document.getElementById(id);
    if (desc) {
        desc.style.display = desc.style.display === "none" ? "block" : "none";
    }
}

// Efekte të thjeshta animacioni për nav dhe butona
function initCustomScripts() {
    // Efekt hover për nav ul li
    document.querySelectorAll("nav ul li").forEach(li => {
        li.addEventListener("mouseenter", function () {
            li.style.transition = "background 0.3s, transform 0.3s";
            li.style.transform = "scale(1.08)";
        });
        li.addEventListener("mouseleave", function () {
            li.style.transform = "";
        });
    });

    // Efekt hover për butonat
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("mouseenter", function () {
            btn.style.boxShadow = "0 0 20px #bb86fc, 0 0 40px #bb86fc44";
            btn.style.transform = "scale(1.07)";
        });
        btn.addEventListener("mouseleave", function () {
            btn.style.boxShadow = "";
            btn.style.transform = "";
        });
    });

    // Efekt fade-in për receta kur shfaqen në ekran
    const cards = document.querySelectorAll('.receta-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => {
        card.classList.add('hidden');
        observer.observe(card);
    });

    const form = document.getElementById('contactForm');
    const msg = document.getElementById('successMessage');
    if(form && msg) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const required = form.querySelectorAll('input[required], textarea[required]');
            let allFilled = true;
            required.forEach(input => {
                if (!input.value.trim()) allFilled = false;
            });
            if (allFilled) {
                msg.textContent = "Mesazhi juaj u dërgua me sukses!";
                msg.style.display = "block";
                msg.style.opacity = "1";
                form.reset();
                setTimeout(() => {
                    msg.style.opacity = "0";
                    setTimeout(() => { msg.style.display = "none"; }, 400);
                }, 4000);
            }
        });
    }
}

window.addEventListener("load", function () {
    setTimeout(initCustomScripts, 500);
});
window.addEventListener("locationchange", function () {
    setTimeout(initCustomScripts, 200);
});

window.searchRecipe = function() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var cards = document.querySelectorAll('.receta-card');
    cards.forEach(card => {
        var title = card.querySelector("h3") ? card.querySelector("h3").innerText.toLowerCase() : "";
        var desc = card.querySelector(".receta-highlight") ? card.querySelector(".receta-highlight").innerText.toLowerCase() : "";
        if (title.includes(input) || desc.includes(input) || input === "") {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
};

window.addEventListener("popstate", function () {
    setTimeout(initCustomScripts, 200);
});
window.addEventListener("pushstate", function () {
    setTimeout(initCustomScripts, 200);
});
window.addEventListener("replacestate", function () {
    setTimeout(initCustomScripts, 200);
});

(function(history){
    var pushState = history.pushState;
    history.pushState = function(){
        var ret = pushState.apply(history, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
    var replaceState = history.replaceState;
    history.replaceState = function(){
        var ret = replaceState.apply(history, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
    window.addEventListener('popstate', function(){
        window.dispatchEvent(new Event('locationchange'));
    });
})(window.history);

// Hide navbar on scroll down (mobile only)
let lastScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.innerWidth <= 700 && header) {
    if (window.scrollY > lastScrollY && window.scrollY > 60) {
      header.style.transform = "translateY(-120%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
  }
});