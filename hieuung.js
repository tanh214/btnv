// main1//
const canvas = document.getElementById('effectCanvas');
const ctx = canvas.getContext('2d');


function setCanvasSize() {
    const main2 = document.querySelector('.main2');
    canvas.width = main2.offsetWidth;
    canvas.height = main2.offsetHeight;
}

setCanvasSize();

const particlesArray = [];


class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        
        if (this.x > canvas.width || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY *= -1;
        }
    }

    draw() {
        
        const gradient = ctx.createRadialGradient(this.x, this.y, this.size * 0.2, this.x, this.y, this.size);
        gradient.addColorStop(0, 'rgba(255, 182, 193, 1)'); // Màu hồng nhạt
        gradient.addColorStop(0.5, 'rgba(255, 105, 180, 1)'); // Màu hồng
        gradient.addColorStop(1, 'rgba(255, 20, 147, 1)'); // Màu hồng đậm

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function initParticles() {
    particlesArray.length = 0;
    const numParticles = 200; 

    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 5 + 2; 
        const speedX = (Math.random() * 2 - 1) * 0.5; 
        const speedY = (Math.random() * 2 - 1) * 0.5; 

        particlesArray.push(new Particle(x, y, size, speedX, speedY));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateParticles);
}


initParticles();
animateParticles();

window.addEventListener('resize', () => {
    setCanvasSize();
    initParticles(); 
});


//menu1

const canvas1 = document.getElementById('effectCanvas1');
const ctx1 = canvas1.getContext('2d');


function setCanvasSize1() {
    const main2 = document.querySelector('.main2');
    canvas1.width = main2.offsetWidth;
    canvas1.height = main2.offsetHeight;
}

setCanvasSize1();

const particlesArray1 = []; // Đổi tên mảng particles

class Particle1 { // Đổi tên lớp Particle
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas1.width || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y > canvas1.height || this.y < 0) {
            this.speedY *= -1;
        }
    }

    draw() {
        const gradient = ctx1.createRadialGradient(this.x, this.y, this.size * 0.3, this.x, this.y, this.size);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.5, 'black');
        gradient.addColorStop(1, 'green');

        ctx1.fillStyle = gradient;
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx1.closePath();
        ctx1.fill();
    }
}

function initParticles1() { // Đổi tên hàm initParticles
    particlesArray1.length = 0;
    const numParticles = 200; 

    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas1.width;
        const y = Math.random() * canvas1.height;
        const size = Math.random() * 5 + 2; 
        const speedX = (Math.random() * 2 - 1) * 0.5; 
        const speedY = (Math.random() * 2 - 1) * 0.5; 

        particlesArray1.push(new Particle1(x, y, size, speedX, speedY));
    }
}

function animateParticles1() { // Đổi tên hàm animateParticles
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

    particlesArray1.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateParticles1);
}

initParticles1(); // Gọi hàm đã đổi tên
animateParticles1(); // Gọi hàm đã đổi tên

window.addEventListener('resize', () => {
    setCanvasSize1(); // Gọi hàm đã đổi tên
    initParticles1(); // Gọi hàm đã đổi tên
});

//menu2

const canvas2 = document.getElementById('effectCanvas3');
const ctx2 = canvas2.getContext('2d');


function setCanvasSize2() {
    const main3 = document.querySelector('.main3');
    canvas2.width = main3.offsetWidth;
    canvas2.height = main3.offsetHeight;
}

setCanvasSize2();

const particlesArray2 = []; // Đổi tên mảng particles

class Particle2 { // Đổi tên lớp Particle
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas2.width || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y > canvas2.height || this.y < 0) {
            this.speedY *= -1;
        }
    }

    draw() {
        const gradient = ctx2.createRadialGradient(this.x, this.y, this.size * 0.2, this.x, this.y, this.size);
        gradient.addColorStop(0, 'rgba(173, 216, 230, 1)'); // Màu xanh da trời nhạt
        gradient.addColorStop(0.5, 'rgba(70, 130, 180, 1)'); // Màu xanh nước biển
        gradient.addColorStop(1, 'rgba(0, 102, 204, 1)'); // Màu xanh đậm

        ctx2.fillStyle = gradient;
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx2.closePath();
        ctx2.fill();
    }
}

function initParticles2() { // Đổi tên hàm initParticles
    particlesArray2.length = 0;
    const numParticles = 100; 

    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas2.width;
        const y = Math.random() * canvas2.height;
        const size = Math.random() * 5 + 8; 
        const speedX = (Math.random() * 2 - 1) * 2; 
        const speedY = (Math.random() * 2 - 1) * 2; //tốc độ hạt

        particlesArray2.push(new Particle2(x, y, size, speedX, speedY));
    }
}

function animateParticles2() { // Đổi tên hàm animateParticles
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    particlesArray2.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateParticles2);
}

initParticles2(); // Gọi hàm đã đổi tên
animateParticles2(); // Gọi hàm đã đổi tên

window.addEventListener('resize', () => {
    setCanvasSize2(); // Gọi hàm đã đổi tên
    initParticles2(); // Gọi hàm đã đổi tên
});



//sub menu
const menuItems = document.querySelectorAll('.has-submenu > a');

menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn chuyển trang khi nhấp

        // Lấy menu con cấp 1 (submenu cấp 1)
        const submenu = this.nextElementSibling;

        // Đóng tất cả các submenu khác
        document.querySelectorAll('.submenu').forEach(sub => {
            if (sub !== submenu) { // Kiểm tra để không đóng submenu hiện tại
                sub.classList.remove('active');
            }
        });

        // Chuyển trạng thái menu con hiện tại
        submenu.classList.toggle('active');
    });
});