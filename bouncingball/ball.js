const main = document.querySelector('.main');
const h1 = document.querySelector('h1');
main.style.width = '600px';
main.style.height = '400px';
main.style.backgroundColor = 'grey';

const ball = document.createElement('div');
const b = {x:50, y:0, w:20, h:20, dx:1, dy:1, speed:5, ani:{}, move:false}
ball.style.backgroundColor ='red';
ball.style.borderRadius = '50%';
ball.style.width = `${b.w}px`;
ball.style.height = `${b.h}px`;
ball.style.position = 'relative';
ball.style.left = `${b.x}px`;
ball.style.top = `${b.y}px`;
main.append(ball);

h1.addEventListener('click',()=>{
    if(!b.move) {
        b.ani = requestAnimationFrame(mover);
        b.move = true;
    } else {
        cancelAnimationFrame(b.ani);
        b.move = false;
    }
})

function mover() {
    if(b.x>600-b.w || b.x <0) {
        b.dx *= -1;
    }
    if(b.y>400-b.h || b.y <0) {
        b.dy *= -1;
    }
    b.x += b.dx * b.speed;
    b.y += b.dy * b.speed;
    ball.style.left = `${b.x}px`;
    ball.style.top = `${b.y}px`;
    if(b.move) {
        b.ani = requestAnimationFrame(mover);
    }
}