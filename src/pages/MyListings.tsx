import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { mockProducts } from '@/data/mockData';
import { Package, Plus, Edit, Trash2, Eye, ArrowLeft } from 'lucide-react';

export const MyListings: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Filter products to show only current user's listings
  const [userProducts, setUserProducts] = useState(
    mockProducts.filter(product => product.userId === user?.id)
  );

  const handleDeleteProduct = (productId: string, title: string) => {
    setUserProducts(prev => prev.filter(product => product.id !== productId));
    toast({
      title: "Product deleted",
      description: `${title} has been removed from your listings.`,
    });
  };

  const handleEditProduct = (productId: string) => {
    toast({
      title: "Edit feature",
      description: "Edit functionality would open a form to modify the product.",
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Sign in required</h2>
          <p className="text-muted-foreground mb-6">
            Please sign in to view your listings.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login">
              <Button variant="eco">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="eco-outline">Create Account</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link to="/dashboard">
            <Button variant="eco-ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <div className="flex items-center space-x-3">
              <Package className="h-8 w-8 text-eco-primary" />
              <h1 className="text-3xl font-bold text-foreground">My Listings</h1>
            </div>
            
            <Link to="/add-product">
              <Button variant="eco" size="lg">
                <Plus className="h-5 w-5 mr-2" />
                Add New Product
              </Button>
            </Link>
          </div>
          
          <p className="text-muted-foreground">
            Manage your {userProducts.length} active listing{userProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {userProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No listings yet</h3>
            <p className="text-muted-foreground mb-6">
              Start selling your pre-loved items and join the sustainable marketplace
            </p>
            <Link to="/add-product">
              <Button variant="eco" size="lg">
                <Plus className="h-5 w-5 mr-2" />
                List Your First Item
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userProducts.map(product => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-eco-primary text-white">
                    {product.category}
                  </Badge>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                      onClick={() => handleEditProduct(product.id)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-eco-primary">
                      ${product.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Listed {product.createdAt}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/product/${product.id}`} className="flex-1">
                      <Button variant="eco-outline" size="sm" className="w-full">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </Link>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditProduct(product.id)}
                      className="px-3"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id, product.title)}
                      className="px-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Stats Section */}
        {userProducts.length > 0 && (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-eco-primary mb-1">
                  {userProducts.length}
                </div>
                <div className="text-sm text-muted-foreground">Active Listings</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-eco-secondary mb-1">
                  ${userProducts.reduce((sum, product) => sum + product.price, 0).toFixed(0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Value</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-eco-accent mb-1">
                  0
                </div>
                <div className="text-sm text-muted-foreground">Items Sold</div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};