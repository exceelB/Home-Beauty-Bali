export default function HomeBeautyBaliFantasyWorld() {
  const services = [
    {
      title: 'Gel Nails',
      desc: 'Elegant glossy nails with magical pastel aesthetics.',
      icon: '💅',
    },
    {
      title: 'Korean Nail Art',
      desc: 'Cute Korean-inspired designs with dreamy details.',
      icon: '🎀',
    },
    {
      title: 'Spa & Relax',
      desc: 'Relax your body in a cozy fantasy beauty atmosphere.',
      icon: '🛁',
    },
    {
      title: 'Custom Design',
      desc: 'Create your own unique magical nail character style.',
      icon: '✨',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610992238031-8b3b5a4d2f44?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop',
  ];

  const testimonials = [
    {
      name: 'Bella',
      role: 'Beauty Explorer',
      text: 'My nails never looked this magical before ✨',
    },
    {
      name: 'Sofia',
      role: 'Princess Customer',
      text: 'The cutest nail art studio experience in Bali 💖',
    },
    {
      name: 'Luna',
      role: 'Fantasy Girl',
      text: 'Feels like entering a cozy beauty game world 🌸',
    },
  ];

  return (
    <div className="bg-[#fff7f4] text-[#5b3b31] overflow-hidden min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffd6e7] via-[#fff2e8] to-[#fff7f4]"></div>

        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        {/* NAVBAR */}
        <header className="relative z-50 max-w-7xl mx-auto px-6 pt-8">
          <div className="bg-[#ffe0ec]/80 backdrop-blur-xl border-4 border-[#f6b6c9] rounded-[28px] px-8 py-5 flex items-center justify-between shadow-xl">
            <div>
              <div className="text-2xl md:text-3xl font-black tracking-wide text-[#d65a8d]">
                HOME BEAUTY BALI
              </div>
              <div className="text-xs uppercase tracking-[4px] text-[#b9788f] mt-1">
                Fantasy Beauty World
              </div>
            </div>

            <nav className="hidden md:flex gap-8 font-bold text-sm text-[#8b5a67] uppercase">
              <a href="#services" className="hover:text-pink-500 transition">
                Services
              </a>
              <a href="#gallery" className="hover:text-pink-500 transition">
                Gallery
              </a>
              <a href="#booking" className="hover:text-pink-500 transition">
                Booking
              </a>
              <a href="#testimonials" className="hover:text-pink-500 transition">
                Reviews
              </a>
            </nav>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 lg:pt-28 grid lg:grid-cols-2 gap-14 items-center min-h-[85vh]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fff0f6] border-2 border-[#f8bfd3] px-5 py-3 rounded-full text-[#d65a8d] font-bold mb-8 shadow-lg">
              ✨ Welcome To Beauty Land
            </div>

            <h1 className="text-5xl md:text-7xl leading-tight font-black mb-8 text-[#7b4658]">
              Magical
              <br />
              Nail Art
              <br />
              Experience
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-[#8e6875] max-w-xl mb-10">
              Enter a cozy fantasy world filled with dreamy nail art,
              self-care rituals, pastel beauty aesthetics, and magical vibes.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-[#ff7cab] hover:scale-105 transition text-white px-8 py-5 rounded-[24px] font-black shadow-2xl shadow-pink-300/50 border-b-[6px] border-[#e15d90]">
                Start Beauty Journey
              </button>

              <button className="bg-[#fff0c9] hover:scale-105 transition text-[#8a5c47] px-8 py-5 rounded-[24px] font-black shadow-xl border-b-[6px] border-[#f0c96f]">
                Explore Gallery
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg">
              <div>
                <div className="text-4xl font-black text-[#ff7cab]">1K+</div>
                <div className="text-sm text-[#9a7481]">Happy Clients</div>
              </div>

              <div>
                <div className="text-4xl font-black text-[#ff7cab]">5★</div>
                <div className="text-sm text-[#9a7481]">Beauty Rating</div>
              </div>

              <div>
                <div className="text-4xl font-black text-[#ff7cab]">24/7</div>
                <div className="text-sm text-[#9a7481]">Cute Vibes</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[450px] h-[450px] bg-pink-200/50 rounded-full blur-3xl"></div>

            <div className="relative bg-white/60 backdrop-blur-xl p-5 rounded-[40px] border-4 border-[#ffd0e0] shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
                alt="beauty"
                className="rounded-[30px] w-full max-w-lg h-[650px] object-cover"
              />

              <div className="absolute -top-5 -left-5 bg-[#ff7cab] text-white px-6 py-3 rounded-2xl font-black shadow-xl animate-bounce">
                Cute ✨
              </div>

              <div className="absolute -bottom-5 -right-5 bg-[#ffe38d] text-[#7b4d29] px-6 py-3 rounded-2xl font-black shadow-xl">
                Cozy Salon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="text-[#ff7cab] uppercase tracking-[6px] font-black mb-4">
            Fantasy Services
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-[#7b4658] mb-6">
            Beauty Kingdom
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-[#8e6875] leading-relaxed">
            Discover magical self-care experiences crafted for your beauty adventure.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border-4 border-[#ffd3e3] rounded-[36px] p-8 hover:-translate-y-4 transition duration-300 shadow-xl"
            >
              <div className="text-6xl mb-6">{item.icon}</div>

              <h3 className="text-2xl font-black text-[#d65a8d] mb-4">
                {item.title}
              </h3>

              <p className="text-[#8e6875] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 px-6 bg-[#fff1f6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#ff7cab] uppercase tracking-[6px] font-black mb-4">
              Magical Collection
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-[#7b4658] mb-6">
              Beauty Gallery
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[36px] border-4 border-[#ffd5e2] shadow-xl group bg-white"
              >
                <img
                  src={image}
                  alt="gallery"
                  className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-yellow-100"></div>

        <div className="relative max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border-4 border-[#ffd4e4] rounded-[48px] p-12 md:p-20 shadow-2xl text-center">
          <div className="inline-flex bg-[#ffe8f1] border-2 border-[#ffc2d7] text-[#d65a8d] px-5 py-3 rounded-full font-black mb-8">
            ✨ Start Your Journey
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#7b4658] leading-tight mb-8">
            Ready For
            <br />
            Your Magical
            <br />
            Glow Up?
          </h2>

          <p className="text-lg md:text-xl text-[#8e6875] max-w-2xl mx-auto leading-relaxed mb-10">
            Book your cozy fantasy nail art experience and become part of our beauty world.
          </p>

          <button className="bg-[#ff7cab] hover:scale-105 transition text-white px-10 py-6 rounded-[28px] text-lg font-black shadow-2xl shadow-pink-300/50 border-b-[6px] border-[#e15d90]">
            Begin Beauty Adventure ✨
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-28 px-6 bg-[#fff1f6]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="text-[#ff7cab] uppercase tracking-[6px] font-black mb-4">
            Customer Stories
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-[#7b4658]">
            Beauty Explorers
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-[#ffd4e4] rounded-[36px] p-8 shadow-xl"
            >
              <div className="text-5xl mb-6">💖</div>

              <p className="text-lg leading-relaxed text-[#8e6875] mb-8">
                “{item.text}”
              </p>

              <div>
                <div className="font-black text-2xl text-[#d65a8d]">
                  {item.name}
                </div>
                <div className="text-[#9b7583]">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#ffdce8] border-t-4 border-[#ffc5d7] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-3xl font-black text-[#d65a8d] mb-2">
              HOME BEAUTY BALI
            </div>
            <div className="text-[#9b7583]">
              Fantasy Beauty World ✨
            </div>
          </div>

          <div className="flex gap-6 text-[#8e6875] font-bold uppercase text-sm">
            <a href="#services" className="hover:text-pink-500 transition">
              Services
            </a>
            <a href="#gallery" className="hover:text-pink-500 transition">
              Gallery
            </a>
            <a href="#booking" className="hover:text-pink-500 transition">
              Booking
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
