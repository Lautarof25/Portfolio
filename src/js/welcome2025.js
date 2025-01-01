const popup = document.createElement('div');
popup.classList.add('popup');
popup.innerHTML = `
    <h1>¡Bienvenido 2025!</h1>
    <p>Que sea un año lleno de éxitos y felicidad.</p>
`;
document.body.appendChild(popup);

// Crear y mostrar los fuegos artificiales
const fireworks = document.createElement('div');
fireworks.classList.add('firework-container');
document.body.appendChild(fireworks);

for (let i = 0; i < 50; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.top = `${Math.random() * 100}vh`;
    spark.style.left = `${Math.random() * 100}vw`;
    fireworks.appendChild(spark);
}

for (let i = 0; i < 3; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${20 + i * 30}%`;
    firework.style.animationDelay = `${0.2 + i * 0.3}s`;
    fireworks.appendChild(firework);
}

// Mostrar el popup y los fuegos artificiales temporalmente
popup.style.display = 'block';
fireworks.style.display = 'block';

setTimeout(() => {
    popup.style.display = 'none';
    fireworks.style.display = 'none';
    document.body.removeChild(popup);
    document.body.removeChild(fireworks);
}, 5000);