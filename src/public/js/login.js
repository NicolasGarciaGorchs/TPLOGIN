const form = document.getElementById('loginForm')
const response = document.getElementById('response')



form.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(form);

    const obj = {};

    data.forEach((value, key) => (obj [key] = value))

   

    fetch('/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj),
        async: true,
    })
        .then(response => {
            if (response.ok) {
                document.getElementById('loading').classList.remove('d-none');
                return response.json();
                
            } else {
                throw new Error('No es posible iniciar sesión');
            }
        })
        .then(data => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${data.message}`,
                showConfirmButton: false,
                timer: 3000
            });

            setTimeout(() => {
                window.location.href = '/profile';
            }, 3000);
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error al iniciar sesión',
                text: 'No es posible iniciar sesión',
            });
        });
})