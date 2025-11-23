export const parseDate = (dateString: string): Date | null => {
    // Remove qualquer separador que não seja número e pega as partes
    // Suporta 25/12/1990, 25-12-1990 ou 25.12.1990
    const cleanDate = dateString.replace(/[^0-9]/g, ''); 

    // Se vier vazio ou incompleto, retorna data atual ou lança erro (opcional)
    if (cleanDate.length !== 8) return null; 

    const day = cleanDate.substring(0, 2);
    const month = cleanDate.substring(2, 4);
    const year = cleanDate.substring(4, 8);

    // O construtor Date aceita o formato ISO "YYYY-MM-DD" perfeitamente
    const dateObj = new Date(`${year}-${month}-${day}`);

    if (isNaN(dateObj.getTime())) return null;

    return dateObj;
};