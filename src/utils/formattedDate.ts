const formattedDate = (value: Date): string =>
  new Date(value)
    .toLocaleString(
      'pt-BR', 
        { 
          timeZone: 'UTC' 
        }
    )

export default formattedDate;