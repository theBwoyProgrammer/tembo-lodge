import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "@/assets/image-1.jpeg";
import image2 from "@/assets/image-2.jpeg";
import image3 from "@/assets/image-3.jpeg";
import image4 from "@/assets/image-4.jpeg";
import image5 from "@/assets/image-5.jpeg";
import image6 from "@/assets/image-6.jpeg";
import image7 from "@/assets/image-7.jpeg";
import { fetchPublicGallery, type PublicGalleryImage } from "@/lib/content";

const fallbackImages: PublicGalleryImage[] = [
  { id: "lodge-sunrise", image_url: image4, title: "Sunrise over the lodge", category: "The Lodge", sort_order: 1 },
  { id: "lodge-aerial", image_url: image3, title: "Tembo from above", category: "The Lodge", sort_order: 2 },
  { id: "lodge-welcome", image_url: image5, title: "A warm lodge welcome", category: "The Lodge", sort_order: 3 },
  { id: "lodge-dining", image_url: image1, title: "Dining at Tembo", category: "The Lodge", sort_order: 4 },
  { id: "dinner-view", image_url: image7, title: "Dinner with a view", category: "The Lodge", sort_order: 5 },
  { id: "golden-hour", image_url: image2, title: "Golden hour at the lake", category: "Landscapes", sort_order: 6 },
  { id: "balcony-view", image_url: image6, title: "A balcony view", category: "Landscapes", sort_order: 7 },
];

const SneakPeek = () => {
  const [images, setImages] = useState<PublicGalleryImage[]>(fallbackImages);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    void fetchPublicGallery()
      .then((managedImages) => {
        if (managedImages.length > 0) setImages(managedImages);
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    if (isPaused || images.length < 2) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [images.length, isPaused]);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, Math.max(images.length - 1, 0)));
  }, [images.length]);

  const goTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  const activeImage = images[activeIndex];

  return (
    <section
      aria-label="Sneak Peek gallery"
      className="relative mx-auto mt-20 min-h-[470px] w-[calc(100%-2rem)] max-w-6xl overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-dramatic sm:min-h-[570px] lg:mt-28 lg:min-h-[68vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart === null) return;
        const distance = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(distance) > 50) goTo(activeIndex + (distance < 0 ? 1 : -1));
        setTouchStart(null);
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={activeImage.image_url} alt={activeImage.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[470px] flex-col justify-between px-5 py-7 sm:min-h-[570px] sm:px-10 sm:py-10 lg:min-h-[68vh] lg:px-14 lg:py-12">
        <div className="flex justify-end">
          <Link to="/gallery" className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary-foreground sm:text-base">
            Gallery <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous sneak peek image"
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-secondary sm:left-8"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              type="button"
              aria-label="Next sneak peek image"
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-secondary sm:right-8"
            >
              <ChevronRight size={26} />
            </button>
          </>
        )}

        <div className="flex items-end justify-between gap-6">
          <h4 className="max-w-3xl font-display text-4xl font-bold sm:text-6xl lg:text-7xl">{activeImage.title}</h4>
        </div>
        <div className="mt-7 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
          {images.length > 1 ? (
            <div className="flex items-center gap-2" aria-label="Choose sneak peek image">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  aria-label={`Show ${image.title}`}
                  aria-current={index === activeIndex}
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${index === activeIndex ? "w-10 bg-secondary" : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground"}`}
                />
              ))}
            </div>
          ) : <span />}
          <div className="ml-auto flex items-center gap-4">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <div className="h-px w-10 bg-primary-foreground/40 sm:w-16" />
            <span>{String(images.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
