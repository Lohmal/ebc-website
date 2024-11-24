import AnimatedTestimonials from "@/components/ui/AnimatedTestimonials";

export function Teams() {
  const testimonials = [
    {
      quote: "Elektrik-Elektronik Mühendisi",
      name: "Arş. Gör. Ömer Can Tolun",
      designation: "Kulüp Danışmanı",
      src: "/teams/OmerTolun.jpg",
    },
    {
      quote: "Endüstri Mühendisliği",
      name: "Aybüke Tuana Budaklı",
      designation: "Yönetim Kurulu Başkanı",
      src: "/teams/AybukeTuanaBudakli.jpg",
    },
    {
      quote: "Yazılım Mühendisliği",
      name: "Ceren Bayındır",
      designation: "Yönetim Kurulu Başkan Yardımcısı",
      src: "/teams/CerenBayindir.jpg",
    },
    {
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Musa Malkoç",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/MusaMalkoc.jpg",
    },
    {
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Talha Demir Mesutgil",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/TalhaDemirMesutgil.jpg",
    },
    {
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Halil Arslan",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/HalilArslan.jpg",
    },
    {
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Faruk Baykal",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/FarukBaykal.jpg",
    },
    {
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Mert Uçar",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/MertUcar.jpg",
    },
    {
      quote: "Havacılık ve Uzay Mühendisliği",
      name: "İkra Gültekin",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/IkraGultekin.jpg",
    },
    {
      quote: "Makine Mühendisliği",
      name: "Lütfi Kaan Ünal",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/LutfiKaanUnal.jpg",
    },
    {
      quote: "Makine Mühendisliği",
      name: "MuhammetCan Güyildar",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/MuhammetCanGuyildar.jpg",
    },
    {
      quote: "Endüstri Mühendisliği",
      name: "Sena Başkaya",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/SenaBaskaya.jpg",
    },
    {
      quote: "Yazılım Mühendisliği",
      name: "Nisa Nur Hurç",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/NisaNurHurc.jpg",
    },
    {
      quote: "Bilgisayar Mühendisliği",
      name: "Enver Kaynak",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/Enver.jpg",
    },
    {
      quote: "Bilgisayar Mühendisliği",
      name: "Volkan Kıvanç",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/VolkanKivanc.jpg",
    },
    {
      quote: "Bilgisayar Mühendisliği",
      name: "Emre Altunbey",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/EmreAltunbey.jpg",
    },
    {
      quote: "Bilgisayar Mühendisliği",
      name: "Belkıs Güllü",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/BelkisGullu.jpg",
    },
  ];
  return (
    <section id="teams" className="mt-32 z-[3]">
      <h2 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Ekibimiz
      </h2>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}
