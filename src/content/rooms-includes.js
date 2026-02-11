export function getRoomIncludes(locale = 'es') {
  const iconsRoomIncludesEs = [
    {
        image: "/images/iconos/ducha.webp",
        label: "Baño privado",
    },
    {
        image: "/images/iconos/caliente.webp",
        label: "Agua Caliente",
    },

    {
        image: "/images/iconos/tv.webp",
        label: "Smart TV 50°",
    },
    {
        image: "/images/iconos/wifi-free.webp",
        label: "WiFi Gratis",
    },
    {
        image: "/images/iconos/despertar.webp",
        label: "Servicio de Despertador",
    },
    {
        image: "/images/iconos/secadora.webp",
        label: "Secadora de Cabello",
    },
    {
        image: "/images/iconos/planchador.webp",
        label: "Set de planchado bajo peticion",
    },
    {
        image: "/images/iconos/calefaccion.webp",
        label: "Calefaccion",
    },
    {
        image: "/images/iconos/caja-seguridad.webp",
        label: "Caja fuerte",
    },
    {
        image: "/images/iconos/telephone.webp",
        label: "Telefono en el Baño",
    },
  ];

  const iconsRoomIncludesEn = [
    {
        image: "/images/iconos/ducha.webp",
        label: "Private Bathroom",
    },
    {
        image: "/images/iconos/caliente.webp",
        label: "Hot water",
    },

    {
        image: "/images/iconos/tv.webp",
        label: "Smart TV 50″",
    },
    {
        image: "/images/iconos/wifi-free.webp",
        label: "WiFi free",
    },
    {
        image: "/images/iconos/despertar.webp",
        label: "Wake-up service",
    },
    {
        image: "/images/iconos/secadora.webp",
        label: "Hair dryer",
    },
    {
        image: "/images/iconos/planchador.webp",
        label: "Ironing set on request",
    },
    {
        image: "/images/iconos/calefaccion.webp",
        label: "Heating",
    },
    {
        image: "/images/iconos/caja-seguridad.webp",
        label: "In-room safe deposit box",
    },
    {
        image: "/images/iconos/telephone.webp",
        label: "In’room telephome",
    },
  ];

  return locale === 'en' ? iconsRoomIncludesEn : iconsRoomIncludesEs;
}