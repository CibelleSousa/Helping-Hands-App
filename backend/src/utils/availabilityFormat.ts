export const formatAvailabilityString = (availabilities: any[]): string => {
  if (!availabilities || availabilities.length === 0) return 'Sob consulta';

  // 1. Ordenar pelos dias da semana (2=Seg, ..., 7=Sáb, 1=Dom)
  // Tratamos Domingo (1) como o último se quisermos "Mon-Sun", ou primeiro.
  // Aqui vamos ordenar numérico simples.
  const sorted = [...availabilities].sort((a, b) => a.DayWeek - b.DayWeek);

  // 2. Mapear Dias (Inglês para bater com o protótipo, ou PT se preferir)
  const dayMap: { [key: number]: string } = {
    1: 'Dom', 2: 'Seg', 3: 'Ter', 4: 'Qua', 5: 'Qui', 6: 'Sex', 7: 'Sab'
  };

  const firstDay = dayMap[sorted[0].DayWeek];
  const lastDay = dayMap[sorted[sorted.length - 1].DayWeek];

  // Lógica para "Mon-Sat" ou apenas "Mon" se for um dia só
  const dayRange = firstDay === lastDay ? firstDay : `${firstDay}-${lastDay}`;

  // 3. Formatar Horas (De Date/ISO para 9:00AM)
  // O Prisma retorna datas completas (1970-01-01T09:00:00.000Z) para campos Time
  const formatTime = (dateInput: Date | string) => {
    const date = new Date(dateInput);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    }).replace(" ", ""); // Remove espaço (9:00 AM -> 9:00AM)
  };

  // Assumimos o horário do primeiro dia como padrão para o range
  const start = formatTime(sorted[0].StartTime);
  const end = formatTime(sorted[0].EndTime);

  // Formato Final: "Mon-Sat / 9:00AM - 5:00PM"
  return `${dayRange} / ${start} - ${end}`;
};