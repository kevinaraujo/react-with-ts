export const timeToSeconds = (time: string) => {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':')

    const hoursIntoSeconds = Number(hours) * 3600
    const minutesIntoSeconds = Number(minutes) * 60
   
    return hoursIntoSeconds + minutesIntoSeconds + Number(seconds)
}