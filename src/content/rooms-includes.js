export function getRoomIncludes(locale = 'es') {
  const iconsRoomIncludesEs = [
    { image: "ducha.webp",          label: "Baño privado" },
    { image: "caliente.webp",       label: "Agua Caliente" },
    { image: "tv.webp",             label: "Smart TV 50°" },
    { image: "wifi-free.webp",      label: "WiFi Gratis" },
    { image: "despertar.webp",      label: "Servicio de Despertador" },
    { image: "secadora.webp",       label: "Secadora de Cabello" },
    { image: "planchador.webp",     label: "Set de planchado bajo peticion" },
    { image: "calefaccion.webp",    label: "Calefaccion" },
    { image: "caja-seguridad.webp", label: "Caja fuerte" },
    { image: "telephone.webp",      label: "Telefono en el Baño" },
  ];

  const iconsRoomIncludesEn = [
    { image: "ducha.webp",          label: "Private Bathroom" },
    { image: "caliente.webp",       label: "Hot water" },
    { image: "tv.webp",             label: "Smart TV 50″" },
    { image: "wifi-free.webp",      label: "WiFi free" },
    { image: "despertar.webp",      label: "Wake-up service" },
    { image: "secadora.webp",       label: "Hair dryer" },
    { image: "planchador.webp",     label: "Ironing set on request" },
    { image: "calefaccion.webp",    label: "Heating" },
    { image: "caja-seguridad.webp", label: "In-room safe deposit box" },
    { image: "telephone.webp",      label: "In-room telephone" },
  ];

  return locale === 'en' ? iconsRoomIncludesEn : iconsRoomIncludesEs;
}