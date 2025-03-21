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
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Talha Demir Mesutgil",
      designation: "Yönetim Kurulu Başkanı",
      src: "/teams/TalhaDemirMesutgil.jpg",
    },
    {
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Musa Malkoç",
      designation: "Yönetim Kurulu Başkan Yardımcısı",
      src: "/teams/MusaMalkoc.jpg",
    },
    {
      quote: "Yazılım Mühendisliği",
      name: "Nisa Nur Hurç",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/NisaNurHurc.jpg",
    },
    {
      quote: "Makine Mühendisliği",
      name: "Lütfi Kaan Ünal",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/LutfiKaanUnal.jpg",
    },
    {
      quote: "Endüstri Mühendisliği",
      name: "Edanur Arpalık",
      designation: "Yönetim Kurulu Üyesi",
      src: "/teams/ekipprofil.jpg",
    },
    {
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Faruk Baykal",
      designation: "Üst Kurul Üyesi",
      src: "/teams/FarukBaykal.jpg",
    },
    {
      quote: "Havacılık ve Uzay Mühendisliği",
      name: "İkra Gültekin",
      designation: "Üst Kurul Üyesi",
      src: "/teams/IkraGultekin.jpg",
    },
    
    {
      quote: "Makine Mühendisliği",
      name: "MuhammetCan Güyildar",
      designation: "Üst Kurul Üyesi",
      src: "/teams/MuhammetCanGuyildar.jpg",
    },
    {
      quote: "Yazılım Mühendisliği",
      name: "Ceren Bayındır",
      designation: "Üst Kurul Üyesi",
      src: "/teams/CerenBayindir.jpg",
    },
    
    {
      quote: "Bilgisayar Mühendisliği",
      name: "Enver Kaynak",
      designation: "Üst Kurul Üyesi",
      src: "/teams/Enver.jpg",
    },
    {
      quote: "Bilgisayar Mühendisliği",
      name: "Volkan Kıvanç",
      designation: "Üst Kurul Üyesi",
      src: "/teams/VolkanKivanc.jpg",
    },
    {
      quote: "Bilgisayar Mühendisliği",
      name: "Belkıs Güllü",
      designation: "Üst Kurul Üyesi",
      src: "/teams/BelkisGullu.jpg",
    },
    {
      quote: "Elektrik-Elektronik Mühendisliği",
      name: "Halil Arslan",
      designation: "Üst Kurul Üyesi",
      src: "/teams/HalilArslan.jpg",
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
