import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Recycle, Heart, Shield, Leaf, ArrowRight, Search, ShoppingBag } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const Home: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <Recycle className="h-8 w-8 text-eco-primary" />,
      title: 'Sustainable Shopping',
      description: 'Give products a second life and reduce environmental impact'
    },
    {
      icon: <Heart className="h-8 w-8 text-eco-secondary" />,
      title: 'Community Driven',
      description: 'Connect with eco-conscious sellers and buyers in your area'
    },
    {
      icon: <Shield className="h-8 w-8 text-eco-accent" />,
      title: 'Secure & Trusted',
      description: 'Safe transactions with verified users and secure payments'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-eco-primary/5 to-eco-secondary/5">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-eco-primary/10 text-eco-primary border-eco-primary/20">
                  <Leaf className="h-3 w-3 mr-1" />
                  Sustainable Marketplace
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Discover 
                  <span className="text-eco-primary"> Sustainable</span>
                  <br />
                  Second-Hand Finds
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-md">
                  Join our eco-conscious community. Buy and sell pre-loved items while making a positive impact on the planet.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={user ? "/marketplace" : "/register"}>
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    <Search className="h-5 w-5 mr-2" />
                    Start Shopping
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                
                {user && (
                  <Link to="/add-product">
                    <Button variant="eco-outline" size="lg" className="w-full sm:w-auto">
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Sell Your Items
                    </Button>
                  </Link>
                )}
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-eco-primary rounded-full"></div>
                  <span>1000+ Items Listed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-eco-secondary rounded-full"></div>
                  <span>500+ Happy Users</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Sustainable marketplace products" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating cards */}
              <Card className="absolute -top-4 -left-4 w-48 shadow-lg animate-pulse">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-eco-primary rounded-full flex items-center justify-center">
                      <Recycle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">95% Waste Reduced</p>
                      <p className="text-xs text-muted-foreground">This month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-4 -right-4 w-48 shadow-lg animate-pulse animation-delay-1000">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-eco-secondary rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Community First</p>
                      <p className="text-xs text-muted-foreground">Local impact</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose EcoFinds?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of eco-conscious individuals making a difference through sustainable shopping
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-eco-primary to-eco-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our sustainable marketplace today and start your eco-friendly shopping journey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!user ? (
                <>
                  <Link to="/register">
                    <Button variant="outline" size="lg" className="bg-white text-eco-primary hover:bg-white/90 border-white">
                      Get Started Now
                    </Button>
                  </Link>
                  <Link to="/marketplace">
                    <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 border border-white/30">
                      Browse Products
                    </Button>
                  </Link>
                </>
              ) : (
                <Link to="/marketplace">
                  <Button variant="outline" size="lg" className="bg-white text-eco-primary hover:bg-white/90 border-white">
                    Explore Marketplace
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};