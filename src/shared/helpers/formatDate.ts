//функция преоброзования new Date() в компоненте Header в строку типа "Tuesday, March 12, 2024"
export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Полное название дня недели
    year: "numeric", // Год в числовом формате
    month: "long", // Полное название месяца
    day: "numeric", // Число месяца в числовом формате
  };
  return date.toLocaleDateString('en-US',options) //toLocaleDateString встроенная функ js что бы преобразовать в строку

}