import { MapProps } from "~types";

export default function Map({ lat, long }: MapProps<number>) {
  return (
    <iframe
      src={`https://maps.google.com/maps?q=${lat},${long}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
      className="w-full aspect-video md:aspect-[16/9] rounded-lg"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="Peta Lokasi"
    ></iframe>
  );
}
