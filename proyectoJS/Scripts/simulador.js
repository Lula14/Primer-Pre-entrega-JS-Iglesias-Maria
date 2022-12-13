


function datosCargados (){
    if (monto < 1000 || monto > 100000) {
        alert("Revise el monto ingresado, recuerde: No debe ser menor a $10.000 ni mayor a $100.000")
    }
    else if ( cuotas < 1 || cuotas > 12) {

        alert ("Revisa las cuotas seleccionas, recuerda que no debe ser menor a 1 cuota ni mayor a 12")
    }
   
    else (monto >= 1000 && monto <= 100000 && cuotas >=1 && cuotas <= 12)
    {
        alert("Adelante")

        
    }
}
//INTENTO DE CALCULAR INTERES

/* function simularCuota(monto, cuotasSelecionadas, interesPorCuota) {

    if (datosCargados) {
     return (( monto/cuotasSelecionadas) * interesPorCuota)
    }
    else  ( cuotasSelecionadas < 1 || cuotasSelecionadas > 12 || monto <1000 || monto >100000 )
     {

        alert ("Revisa las cuotas seleccionas, recuerda que no debe ser menor a 1 cuota ni mayor a 12")
    }
   


    
} */
datosCargados()

/* simularCuota() */