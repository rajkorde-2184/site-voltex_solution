import Navigation from "@/components/Navigation";
const Collaborators = () => {
  const partners = [{
    name: "GEDA (Gujarat Energy Development Agency)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrU8NwfWK0QXPJ1yN42OpbRM77GEwSa54FbRLdRkYLuwqAml0u55kDew_75McdAyDrDd0&usqp=CAU",
    description: "Leading technology solutions provider"
  }, {
    name: "Adani Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adani_2012_logo.png/1024px-Adani_2012_logo.png",
    description: "Renewable energy specialists"
  }, {
    name: "Smart Systems Ltd",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=100&fit=crop&crop=center",
    description: "Intelligent automation solutions"
  }, {
    name: "Innovation Partners",
    logo: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=200&h=100&fit=crop&crop=center",
    description: "Innovation and development consultancy"
  }, {
    name: "Future Tech Co",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop&crop=center",
    description: "Advanced technology solutions"
  }, {
    name: "Digital Dynamics",
    logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=200&h=100&fit=crop&crop=center",
    description: "Digital transformation experts"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Collaborators</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We collaborate with industry leaders to deliver exceptional solar energy solutions
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-24 mb-6 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                    <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">voltex solutions</h3>
              <p className="text-muted-foreground">
                Leading the future of renewable energy with innovative solar solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
                <li><a href="/#products" className="text-muted-foreground hover:text-primary">Products</a></li>
                <li><a href="/#benefits" className="text-muted-foreground hover:text-primary">Benefits</a></li>
                <li><a href="/#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
              <p className="text-muted-foreground">
                Email: info.voltexsolution@gmail.com<br />
                Phone: 9104629229, 9998491595<br />
                Address: Voltex Solution, shop no 21, Opposite Vinayak Gold palace, in Vasant Vihar 1, Ahmedabad
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">© 2021 voltex solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Collaborators;