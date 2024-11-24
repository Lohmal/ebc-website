"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/CardCarousel";

const Projects = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section
      className="flex flex-col items-center justify-center py-20 container"
      id="projects"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projelerimiz
      </h2>
      <Carousel items={cards} />
    </section>
  );
};

const data = [
  {
    category: "",
    title: "Elektrikli Scooter",
    src: "/projects/ElektrikliScooter1.jpg",
    content: (
      <>
        <div
          key={"dummy-content"}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
            <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>{" "}
            Elektronik Scooter projemiz Seyhan Teknoloji ve İnovasyon Merkezi
            bünyesinde gerçekleştirdiğimiz bir projedir. Temel hedef akıllı
            ulaşım sistemleri alanında öncelikle bir yürür çıkarılması
            hedeflenmiştir. Bir aylık sürecin ardından şasi tamamlanmış ve
            motor, batarya, ESC gibi parçalar yerleştirilip son hali ortaya
            çıkmıştır.
          </p>
          <Image
            src="/projects/ElektrikliScooter1.jpg"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      </>
    ),
  },
  {
    category: "",
    title: "Araba Süren Balık",
    src: "/projects/arababalik.webp",
    content: (
      <>
        <div
          key={"dummy-content"}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
            Bu ilginç proje, bir akvaryum balığının araba sürmesini sağlayan bir
            sistem üzerine kuruludur. Raspberry Pi ve OpenCV kullanılarak,
            balığın akvaryum içinde hareketi takip edilir ve bu hareketler
            motorlu bir arabanın yönlendirilmesi için komutlara dönüştürülür.
            Sistem, balığın pozisyonunu analiz eden bir kamera, görüntü işleme
            algoritmaları ve hareketleri elektrikli araba mekanizmasına aktaran
            bir mikrodenetleyici içerir. Proje, yapay zekâ, görüntü işleme ve
            robotik alanlarında yaratıcı bir uygulama örneğidir.
          </p>
          <Image
            src="/projects/arababalik.webp"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      </>
    ),
  },
  {
    category: "",
    title: "Paletli RC Araç",
    src: "/projects/ekip.JPG",
    content: (
      <>
        <div
          key={"dummy-content"}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
            Aracımız uzun vadede hedeflediğimiz elektrikli araç için bir ön
            prototip niteliği taşımaktadır. Elektronik bağlantılarında Eaglecad
            uygulaması ile devre kartı üzerinde düzenli bir şekilde
            bağlantıların duracağı bir elektronik kart tasarımına gidilmiştir.
            Araç seyir halinde gitmekle birlikte telemetri sistemiyle de
            istasyonla haberleşecektir.
          </p>
          <Image
            src="/projects/ekip.JPG"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      </>
    ),
  },
  {
    category: "",
    title: "Robot Süpürge",
    src: "/projects/robotsupurge.webp",
    content: (
      <>
        <div
          key={"dummy-content"}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
            Robot süpürgenin tasarımı tamamen özgün bir şekilde yapıldı. Malzeme
            olarak Pleksi, kesimi için ise gazlı lazer makinesi kullanıldı.
            Elektronik bağlantıları ve gömülü sistem yazılımı da aynı şekilde
            özgün bir biçimde yazıldı ve çalışır hale getirildi.
          </p>
          <Image
            src="/projects/robotsupurge.webp"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      </>
    ),
  },
];

export default Projects;
