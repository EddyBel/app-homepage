/**
 * Esta funcion toma un numero y retorna un texto con formato de tipo de moneda
 * @param amount Numero que indica el monto a formatear
 * @param type Tpo de moneda o divisa a utilizar
 * @param minimumFractionDigits Minimo numero de decimales
 * @returns Texto con el formato segun la divisa
 */
export const formatterAmount = (amount = 0, type = 'USD', minimumFractionDigits = 2) => {
    if (amount != null || amount != undefined) {
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: type,
        minimumFractionDigits: minimumFractionDigits,
      });
    } else return '';
  };