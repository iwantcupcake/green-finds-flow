import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { purchaseHistory } from '@/data/mockData';
import { User, Edit, Package, ShoppingBag, Award, Calendar } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, updateUsername, isLoading } = useAuth();
  const { toast } = useToast();
  const [newUsername, setNewUsername] = useState(user?.username || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateUsername = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newUsername.trim().length < 3) {
      toast({
        title: "Invalid username",
        description: "Username must be at least 3 characters long.",
        variant: "destructive",
      });
      return;
    }

    try {
      await updateUsername(newUsername.trim());
      setIsEditing(false);
      toast({
        title: "Profile updated!",
        description: "Your username has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Update failed",
        description: "Failed to update username. Please try again.",
        variant: "destructive",
      });
    }
  };

  const stats = [
    {
      icon: <Package className="h-6 w-6 text-eco-primary" />,
      label: "Items Listed",
      value: "3",
      description: "Active listings"
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-eco-secondary" />,
      label: "Items Purchased",
      value: purchaseHistory.length.toString(),
      description: "Total purchases"
    },
    {
      icon: <Award className="h-6 w-6 text-eco-accent" />,
      label: "Eco Points",
      value: "245",
      description: "Sustainability score"
    }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Sign in required</h2>
          <p className="text-muted-foreground mb-6">
            Please sign in to access your dashboard.
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
          <div className="flex items-center space-x-3 mb-2">
            <User className="h-8 w-8 text-eco-primary" />
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Manage your account and track your sustainable impact</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={user.email}
                    disabled
                    className="bg-muted"
                  />
                </div>
                
                <div>
                  <Label htmlFor="username">Username</Label>
                  {isEditing ? (
                    <form onSubmit={handleUpdateUsername} className="space-y-3">
                      <Input
                        id="username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        placeholder="Enter new username"
                      />
                      <div className="flex gap-2">
                        <Button 
                          type="submit" 
                          variant="eco" 
                          size="sm"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Saving...' : 'Save'}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setIsEditing(false);
                            setNewUsername(user.username);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Input
                        value={user.username}
                        disabled
                        className="bg-muted"
                      />
                      <Button 
                        variant="eco-ghost" 
                        size="sm"
                        onClick={() => setIsEditing(true)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <div className="pt-4 space-y-2">
                  <Badge className="bg-eco-primary/10 text-eco-primary">
                    <Award className="h-3 w-3 mr-1" />
                    Eco Warrior
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Member since {new Date().getFullYear()}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/add-product" className="block">
                  <Button variant="eco" className="w-full">
                    <Package className="h-4 w-4 mr-2" />
                    List New Item
                  </Button>
                </Link>
                <Link to="/my-listings" className="block">
                  <Button variant="eco-outline" className="w-full">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    My Listings
                  </Button>
                </Link>
                <Link to="/marketplace" className="block">
                  <Button variant="eco-ghost" className="w-full">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Browse Marketplace
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Purchase History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Recent Purchases</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {purchaseHistory.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">No purchases yet</p>
                    <Link to="/marketplace" className="inline-block mt-3">
                      <Button variant="eco-outline" size="sm">
                        Start Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {purchaseHistory.map(item => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">by {item.userName}</p>
                          <Badge variant="secondary" className="mt-1">
                            {item.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-eco-primary">${item.price}</p>
                          <p className="text-sm text-muted-foreground">{item.createdAt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};