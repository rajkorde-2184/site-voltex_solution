import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
const Collaborators = () => {
  const partners = [{
    name: "GEDA (Gujarat Energy Development Agency)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrU8NwfWK0QXPJ1yN42OpbRM77GEwSa54FbRLdRkYLuwqAml0u55kDew_75McdAyDrDd0&usqp=CAU",
    description: "The Gujarat Energy Development Agency (GEDA) is a state-level agency in Gujarat, India, focused on promoting renewable energy and energy efficiency.",
    fullDescription: "GEDA has played a pioneering role in the development of a long-term renewable policy and implementing of sustainable energy programmes across the state. GEDA’s challenge has been to make the renewable energy and energy efficient technologies economically and commercially viable. GEDA was catalytic in the formation of the Commission of Additional Sources of Energy (CASE) in 1981, which later became the Department of Non-conventional Energy Sources (DNES) in 1982 and a full-fledged Ministry- MNES (Ministry of Non-conventional Energy Sources) in 90s, which is now the MNRE (Ministry of New and Renewable Energy).   The model was then replicated to establish similar state nodal agencies in other states through out the country."
  }, {
    name: "PM Surya Ghar: Muft Bijli Yojana",
    logo: "https://www.indianchemicalnews.com/public/thumbs/news/2025/06/26630/MNRE.jpg",
    description: "The Ministry of New and Renewable Energy (MNRE) is the nodal agency in India for all matters related to new and renewable energy sources. ",
    fullDescription: "The Pradhan Mantri Surya Ghar – Muft Bijli Yojana, launched in February 2024 by the Government of India, aims to provide up to 300 units of free electricity per month to 1 crore households through rooftop solar installations. Implemented by the Ministry of New and Renewable Energy, the scheme offers up to 60% subsidy for systems up to 2 kW and 40% for the additional capacity up to 3 kW (capped at ₹78,000), along with collateral-free loans at low interest rates. Households can apply via the national portal (pmsuryaghar.gov.in), get installation from registered vendors, and benefit from lower electricity bills, potential income from selling surplus power, and reduced carbon emissions, while boosting domestic solar manufacturing and green jobs."
  }, {
    name: "Make In India",
    logo: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-03/Initiatives%20Under%20Make%20in%20India%20%20Programmes.png",
    description: "Make in India is an initiative by the Government of India to create and encourage companies to develop, manufacture and assemble products in India and incentivize dedicated investments into manufacturing.",
    fullDescription: "The Make in India initiative, launched by Prime Minister Narendra Modi on September 25, 2014, aims to transform India into a global manufacturing hub by facilitating investment, fostering innovation, enhancing skill development, protecting intellectual property, and building world-class infrastructure. Led by the Department for Promotion of Industry and Internal Trade (DPIIT), it encourages domestic and foreign companies to manufacture in India, thereby creating jobs, empowering industries, and improving India’s Ease of Doing Business ranking—rising from 142nd in 2014 to 63rd in 2020. Over the past decade, the programme has boosted manufacturing, attracted record FDI inflows (from US$ 45.14 billion in 2014-15 to US$ 70.95 billion in 2023-24), and strengthened India’s position in sectors like electronics, automobiles, and defence manufacturing. The current Make in India 2.0 focuses on 27 sectors including aerospace, biotechnology, pharmaceuticals, renewable energy, textiles, tourism, and space, with the goal of enhancing competitiveness, creating millions of jobs, and solidifying India’s role as a key player in the global industrial landscape."
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
            {partners.map((partner, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col items-center text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="w-48 h-24 mb-6 rounded-lg overflow-hidden bg-muted flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all duration-200">
                        <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </DialogTrigger>
                    
                    <DialogTrigger asChild>
                      <h3 className="text-xl font-semibold text-foreground mb-2 cursor-pointer hover:text-primary transition-colors duration-200 hover:underline">
                        {partner.name}
                      </h3>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader className="space-y-4 pb-6 border-b border-border">
                        <div className="flex items-center gap-6">
                          <div className="w-24 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center flex-shrink-0">
                            <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-cover" />
                          </div>
                          <div className="text-left">
                            <DialogTitle className="text-3xl font-bold text-primary mb-2">{partner.name}</DialogTitle>
                            <p className="text-lg text-muted-foreground font-medium">{partner.description}</p>
                          </div>
                        </div>
                      </DialogHeader>
                      
                      <div className="pt-6 space-y-6">
                        <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shadow-inner">
                          <img src={partner.logo} alt={`${partner.name} logo`} className="max-w-full max-h-full object-contain" />
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                          <h4 className="text-xl font-semibold text-foreground mb-4">About {partner.name}</h4>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {partner.fullDescription}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                          <div className="bg-primary/5 rounded-lg p-4 text-center">
                            <h5 className="font-semibold text-primary mb-2">Industry Focus</h5>
                            <p className="text-sm text-muted-foreground">Technology & Innovation</p>
                          </div>
                          <div className="bg-secondary/5 rounded-lg p-4 text-center">
                            <h5 className="font-semibold text-primary mb-2">Partnership Since</h5>
                            <p className="text-sm text-muted-foreground">2018</p>
                          </div>
                          <div className="bg-accent/5 rounded-lg p-4 text-center">
                            <h5 className="font-semibold text-primary mb-2">Projects Completed</h5>
                            <p className="text-sm text-muted-foreground">25+</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <p className="text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
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
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/#products" className="text-muted-foreground hover:text-primary">Products</Link></li>
                <li><Link to="/#benefits" className="text-muted-foreground hover:text-primary">Benefits</Link></li>
                <li><Link to="/#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
              <p className="text-muted-foreground">
               Email: info.voltexsolution@gmail.com<br />
               Phone: 9104629229, 9998491595
               <a href= "https://maps.app.goo.gl/vNQ2SjBrxMMajjhH9">Address: Voltex Solution, shop no 21, Opposite Vinayak Gold palace, Vasant Vihar 1, Ahmedabad </a>
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
