import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, User, LogOut, Leaf, Plus } from 'lucide-react';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-eco-primary" />
          <span className="text-2xl font-bold text-eco-primary">EcoFinds</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/marketplace" className="text-foreground hover:text-eco-primary transition-colors">
            Marketplace
          </Link>
          {user && (
            <>
              <Link to="/my-listings" className="text-foreground hover:text-eco-primary transition-colors">
                My Listings
              </Link>
              <Link to="/add-product" className="text-foreground hover:text-eco-primary transition-colors">
                <Plus className="h-4 w-4 inline mr-1" />
                Sell Item
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/cart" className="relative">
                <Button variant="eco-ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-eco-secondary text-white">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>
              
              <Link to="/dashboard">
                <Button variant="eco-ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              
              <Button variant="eco-ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <div className="flex space-x-2">
              <Link to="/login">
                <Button variant="eco-outline" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="eco" size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};