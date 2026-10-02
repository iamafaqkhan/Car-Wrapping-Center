export function getStudioStatus(): {
  isOpen: boolean;
  statusText: string;
  nextOpenText: string;
} {
  // Compute local Italian time (Europe/Rome)
  const now = new Date();
  const italyTimeString = now.toLocaleString('en-US', { timeZone: 'Europe/Rome' });
  const italyDate = new Date(italyTimeString);

  const day = italyDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = italyDate.getHours();
  const minutes = italyDate.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // Working hours: Mon-Sat (8:00 AM to 6:00 PM -> 480 to 1080 min)
  const openTime = 8 * 60;
  const closeTime = 18 * 60;

  const isWorkday = day >= 1 && day <= 6;
  const isOpen = isWorkday && timeInMinutes >= openTime && timeInMinutes < closeTime;

  let statusText = isOpen ? 'Aperto Ora · Open Now' : 'Chiuso Ora · Closed';
  let nextOpenText = '';

  if (isOpen) {
    const closesInHours = Math.floor((closeTime - timeInMinutes) / 60);
    const closesInMin = (closeTime - timeInMinutes) % 60;
    nextOpenText = `Chiude alle 18:00 (tra ${closesInHours}h ${closesInMin}m)`;
  } else {
    if (day === 0) {
      nextOpenText = 'Riapre Lunedì alle 08:00';
    } else if (timeInMinutes < openTime) {
      nextOpenText = 'Apre oggi alle 08:00';
    } else {
      if (day === 6) {
        nextOpenText = 'Riapre Lunedì alle 08:00';
      } else {
        nextOpenText = 'Riapre domani alle 08:00';
      }
    }
  }

  return { isOpen, statusText, nextOpenText };
}
