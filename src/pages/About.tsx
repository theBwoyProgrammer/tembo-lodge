import { motion } from "framer-motion";
import { Bird, Car, MapPin, Plane, Utensils, Waves, BedDouble } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/home/CallToAction";
import lodgeAerial from "@/assets/image-3.jpeg";
import cottageImage from "@/assets/image-2.jpeg";
import sunsetImage from "@/assets/image-6.jpeg";
import diningImage from "@/assets/image-7.jpeg";

const features = [
  { icon: BedDouble, title: "A place to return to", text: "Return from a day of adventure to the warmth and tranquillity of Tembo Safari Lodge. Choose from our traditional grass-thatched cottages and comfortable standard rooms, thoughtfully designed to offer a relaxing retreat in the heart of Queen Elizabeth National Park." },
  { icon: Waves, title: "The Kazinga Channel, close by", text: "Just 200 metres from Tembo Safari Lodge, the Kazinga Channel offers unforgettable encounters with hippos, remarkable birdlife, and the wild beauty of Queen Elizabeth National Park. At Tembo, nature is part of your stay, bringing you closer to Uganda’s extraordinary wilderness." },
  { icon: Utensils, title: "Savour the Flavours. Embrace the Wild.", text: "After exploring Queen Elizabeth National Park, return to Tembo Safari Lodge for delicious meals, warm hospitality, and a relaxing atmosphere. Share stories, savour every bite, and make dining part of your safari experience." },
  { icon: Bird, title: "Wake Up to the Wild. Live the Adventure.", text: "Explore Queen Elizabeth National Park from Tembo Safari Lodge. Discover incredible wildlife, breathtaking landscapes, and unforgettable adventures in the heart of the wild.." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="relative flex min-h-[76vh] items-end overflow-hidden bg-primary text-primary-foreground">
        <img src={lodgeAerial} alt="Tembo Safari Lodge beside the Kazinga Channel" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 safari-overlay" />
        <div className="safari-container relative z-10 w-full pb-20 pt-36 md:pb-28">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="mb-6 inline-block text-sm font-semibold uppercase text-secondary">The Tembo story</span>
            <h1 className="mb-6 max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl">A Place Between the Wild and Wonder.</h1>
            <p className="max-w-2xl text-xl leading-relaxed text-primary-foreground/90">Wake up to nature, explore the Kazinga Channel, and discover the wildlife that makes Queen Elizabeth National Park unforgettable. At Tembo Safari Lodge, comfort meets the wild and every stay becomes a lasting memory.</p>
          </motion.div>
        </div>
      </section>

      <section className="safari-section bg-background">
        <div className="safari-container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="safari-badge mb-5">Why Tembo exists</span>
            <h2 className="safari-heading mb-7">To Bring You Closer to the Wild</h2>
            <div className="space-y-5 safari-text">
              <p>Tembo Safari Lodge exists to make the experience of discovering Uganda's wilderness more welcoming, meaningful, and memorable.</p>
              <p>We bring together warm hospitality, delicious dining, and nature’s tranquillity for a meaningful and memorable Ugandan safari experience.</p>
              <p>Discover extraordinary wildlife, breathtaking landscapes, and local culture while creating lasting memories in the heart of Uganda’s wilderness.</p>
            </div>
            <p className="mt-8 border-l-2 border-secondary pl-6 font-display text-2xl font-bold text-primary">Feel the Culture, Love the Stay</p>
          </motion.div>
          <motion.figure initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-lg shadow-dramatic">
            <img src={sunsetImage} alt="Sunset over the Kazinga Channel from Tembo Safari Lodge" className="aspect-[4/5] w-full object-cover md:aspect-[5/4]" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-primary/90 px-6 py-4 text-sm text-primary-foreground">When the tracks grow quiet, the evening settles over Katunguru.</figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="safari-section bg-muted">
        <div className="safari-container">
          <div className="mb-12 max-w-3xl">
            <span className="safari-badge mb-5">The Tembo Experience</span>
            <h2 className="safari-heading mb-6">A Day in the Rhythm of the Wild</h2>
            <p className="safari-text">Every day unfolds to the rhythm of nature. Wake up to the sounds of the wilderness, explore the remarkable landscapes of Queen Elizabeth National Park, discover the beauty of the Kazinga Channel, and unwind as the African sun paints the horizon in golden hues.

From the first light of dawn to the calm of evening, experience a stay where nature inspires, adventure awaits, and every moment becomes a memory.

Tembo Safari Lodge: Feel the Culture, Love the Stay.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-t-2 border-secondary bg-card p-7 shadow-soft">
                <item.icon className="mb-5 text-primary" size={32} />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="safari-section bg-primary text-primary-foreground">
        <div className="safari-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 gap-3">
            <img src={cottageImage} alt="A cottage at Tembo Safari Lodge" className="h-full min-h-80 w-full rounded-lg object-cover" />
            <img src={diningImage} alt="Dining room overlooking the channel at Tembo Safari Lodge" className="mt-10 h-full min-h-80 w-full rounded-lg object-cover" />
          </div>
          <div>
            <span className="mb-5 inline-block text-sm font-semibold uppercase text-secondary">Hospitality, naturally</span>
            <h2 className="mb-7 font-display text-4xl font-bold md:text-5xl">Where Every Moment Belongs to the Journey</h2>
            <div className="space-y-5 text-lg leading-relaxed text-primary-foreground/80">
              <p>At Tembo Safari Lodge, the adventure doesn't end when you leave the wilderness. It simply takes on a different rhythm.</p>
              <p>Tembo Safari Lodge is a welcoming retreat nestled in the natural beauty of Katunguru, right on the edge of Queen Elizabeth National Park and just 200 meters from the Kazinga Channel. The lodge features traditional cottages surrounded by lush greenery, relaxed dining, and an immersive wilderness experience where rest and safari seamlessly blend together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="safari-section bg-background">
        <div className="safari-container">
          <div className="mb-12 max-w-2xl">
            <span className="safari-badge mb-4">Getting here</span>
            <h2 className="safari-heading mb-5">Your adventure to the wild starts here</h2>
            <p className="safari-text">Ready to discover the beauty of Queen Elizabeth National Park? Follow the Ntungamo - Katunguru Road to Katunguru, where a warm welcome awaits at Tembo Safari Lodge. Tucked into the heart of the wilderness, Tembo is your invitation to slow down, reconnect with nature, and experience the magic of the African safari. Follow the road. Find your wild. Feel at home at Tembo.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-t-2 border-secondary pt-6"><MapPin className="mb-4 text-primary" /><h3 className="mb-2 text-xl font-bold">In the park</h3><p className="text-muted-foreground">Katunguru, Queen Elizabeth National Park, Uganda, just 200 metres from the Kazinga Channel.</p></div>
            <div className="border-t-2 border-secondary pt-6"><Car className="mb-4 text-primary" /><h3 className="mb-2 text-xl font-bold">By road</h3><p className="text-muted-foreground">About 5 - 6 hours (384 km) from Kampala via Mbarara and Bushenyi.</p></div>
            <div className="border-t-2 border-secondary pt-6"><Plane className="mb-4 text-primary" /><h3 className="mb-2 text-xl font-bold">By air</h3><p className="text-muted-foreground">About 1 hour from Entebbe to Kasese Airstrip, followed by a short transfer.</p></div>
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
    <Footer />
  </div>
);

export default About;