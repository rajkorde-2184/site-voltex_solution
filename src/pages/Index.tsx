import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="products">
          <ProductShowcase />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">voltex Solution</h3>
              <p className="text-sm text-primary-foreground/80">
                Leading the solar revolution with innovative, efficient, and sustainable energy solutions.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Residential Solar</li>
                <li>Commercial Solar</li>
                <li>Energy Storage</li>
                <li>Maintenance</li>
              </ul>
            </div>
            
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">© 2021 voltex solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;