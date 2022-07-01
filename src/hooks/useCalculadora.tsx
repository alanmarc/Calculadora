import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, dividir, multiplicar
  }

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('99');
    const [numero, setNumero] = useState('100');
    const ultimaOperacion = useRef<Operadores>();
    const limpiar = () =>{
        setNumero('0');
        setNumeroAnterior('0');
    }
    const armarNumero = ( numeroTexto: string ) =>{
        //No aceptar doble punto
        if ( numero.includes('.') && numeroTexto === '.') {return;}
  
        if ( numero.startsWith('0') || numero.startsWith('-0')){
          //Punto decimal
          if ( numeroTexto === '.' ){
            setNumero( numero + numeroTexto);
  
            //Evaluar si es otro cero y hay un punto
          } else if ( numeroTexto === '0' && numero.includes('.')){
            setNumero( numero + numeroTexto );
  
            //Evaluar si es diferente de cero y no tiene punto
          } else if ( numeroTexto !== '0' && !numero.includes('.')){
            setNumero( numeroTexto);
          }
            //Evitar 0000.0
           else if ( numeroTexto === '0' && !numero.includes('.')){
            setNumero( numero );
          } else {
            setNumero( numero + numeroTexto );
          }
  
        } else {
          setNumero( numero + numeroTexto);
        }
    }
    const negativoPositivo = () => {
      if (numero.includes('-')){
        setNumero( numero.replace('-','') );
      } else {
        setNumero('-' + numero);
      }
    }
  
    const btnDelete = () =>{
      let negativo = '';
      let numeroTemp = numero;
      if ( numero.includes('-')){
        negativo = '-';
        numeroTemp = numeroTemp.substring(1);
      }
      if ( numeroTemp.length > 1){
        setNumero( negativo + numeroTemp.slice(0,-1));
      } else {
        setNumero('0');
      }
    }
  
    const cambiarNumPorAnterior = () => {
      if ( numero.endsWith('.')){
        setNumeroAnterior( numero.slice(0,-1));
      } else {
        setNumeroAnterior( numero);
      }
      setNumero('0');
    }
  
    const btnSumar = () =>{
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.sumar;
    }
  
    const btnRestar = () =>{
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.restar;
    }
  
    const btnMultiplicar = () =>{
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.multiplicar;
    }
  
    const btnDividir = () =>{
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.dividir;
    }
  
    const calcular = () => {
      const num1 = Number( numero );
      const num2 = Number( numeroAnterior );
      switch ( ultimaOperacion.current) {
        case Operadores.sumar:
          setNumero( `${num1 + num2}` );
          break;
      case Operadores.restar:
          setNumero( `${num2 - num1}` );
          break;
      case Operadores.multiplicar:
          setNumero( `${num1 * num2}` );
          break;
      case Operadores.dividir:
          setNumero( `${num2 / num1}` );
          break;
      }
      setNumeroAnterior('0');
    }
  return {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    negativoPositivo,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    btnDelete,
    calcular,
  }
}
