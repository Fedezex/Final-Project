(async () => {

    const {value:provincia} = await Swal.fire({
        title:"¡Bienvenido!",
        text: "Selecciona tu provincia",
        confirmButtonText: "Seleccionar",
        footer: "Informacion requerida",
        padding: "1rem",
        backdrop: true,
        position: "center",
        allowOutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        input: "select",
        inputPlaceholder: "Provincia",
        inputValue: "",
        inputOptions: {
            tucuman: "Tucumán",
            salta: "Salta",
            jujuy: "Jujuy",
            catamarca: "Catamarca",
            santiago: "Santiago del Estero"
        },
        imageUrl: "./imagenes/Logo2.png",
        imageWidth: "200px",
        imageAlt: "Logotipo A4",
        
    })
    
    if(provincia){
        Swal.fire({
            title:`Seleccionaste ${provincia}`
        })
    }
    
    })()
    