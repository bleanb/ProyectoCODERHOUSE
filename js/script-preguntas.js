//********************************************************************************************************
//                                        SCRIP PARA SECCION PREGUNTAS
//********************************************************************************************************

// Obtén el elemento .preguntas
const preguntas = document.querySelector('.preguntas');

// Obtén los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Variable para controlar si el checkbox 3 estaba marcado previamente
let checkbox3WasChecked = false;

// Variable para controlar si el checkbox 2 estaba marcado previamente
let checkbox2WasChecked = false;

// Agrega un evento de cambio a cada checkbox
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        const checkedCheckboxes = [...checkboxes].filter((cb) => cb.checked);
        
        if (checkedCheckboxes.length === 1) {// Si se ha marcado solo un checkbox
            if (checkboxes[2].checked) {
                document.getElementById('preguntas').style.height = '500px';
                const newPosition = preguntas.getBoundingClientRect().top + window.pageYOffset + 100;
                window.scrollTo({
                    top: newPosition,
                    behavior: 'smooth',
                });
            } else {
                document.getElementById('preguntas').style.height = '700px';
                const newPosition = preguntas.getBoundingClientRect().top + window.pageYOffset + 100;
                window.scrollTo({
                    top: newPosition,
                    behavior: 'smooth',
                });
            }
        } else if (checkedCheckboxes.length === 2 || checkedCheckboxes.length === 3) {
                // Si se han marcado dos o tres checkboxes
                document.getElementById('preguntas').style.height = '900px';
                const newPosition = preguntas.getBoundingClientRect().top + window.pageYOffset + 300;
                window.scrollTo({
                    top: newPosition,
                    behavior: 'smooth',
                });
        } else {
            // Si no se ha marcado ningún checkbox
            document.getElementById('preguntas').style.height = '500px';
            // Verifica si no hay ningún checkbox marcado
            const noCheckboxesChecked = checkedCheckboxes.length === 0;
            // Si no hay ningún checkbox marcado y el checkbox 3 estaba marcado previamente, desplaza la pantalla al ID #preguntas
            if ((noCheckboxesChecked && checkbox3WasChecked) || (noCheckboxesChecked && checkbox2WasChecked) || (noCheckboxesChecked && checkbox1WasChecked)) {
                const preguntasElement = document.getElementById('preguntas');
                if (preguntasElement) {
                    preguntasElement.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        }// Si el checkbox 2 esta marcado y se marca el checkbox 1 sube la pantalla
        if (checkbox2WasChecked && checkboxes[0].checked && checkboxes[2].checked==0) {
            const newPosition = preguntas.getBoundingClientRect().top + window.pageYOffset - 0;
            window.scrollTo({
                top: newPosition,
                behavior: 'smooth',
            });
        }
        //Si el checkbox 3 esta marcado y se marca el checkbox 1 sube la pantalla
        if (checkbox3WasChecked && checkboxes[0].checked ) {
            const newPosition = preguntas.getBoundingClientRect().top + window.pageYOffset - 0;
            window.scrollTo({
                top: newPosition,
                behavior: 'smooth',
            });
        }

        
        
        // Actualiza el estado de los checkbox 1, 2 y 3 
        if (index === 2) {
            checkbox3WasChecked = checkbox.checked;
        } else if (index === 1) {
            checkbox2WasChecked = checkbox.checked;
        }else if (index == 0){
            checkbox1WasChecked = checkbox.checked;
        }
    });
});
