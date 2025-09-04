import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ChatbotInterface from '@/components/ChatbotInterface';
import AlertBanner from '@/components/AlertBanner';
import FeatureCard from '@/components/FeatureCard';
import { Heart, Shield, Users, Video, Stethoscope, Calendar, Phone, MessageCircle } from 'lucide-react';

// Import images
import healthcareHero from '@/assets/healthcare-hero.jpg';
import healthCamps from '@/assets/health-camps.jpg';
import telemedicine from '@/assets/telemedicine.jpg';
import vaccination from '@/assets/vaccination.jpg';

const Homepage = () => {
  const features = [
    {
      title: "Vaccination Information",
      description: "Get up-to-date vaccination schedules, find vaccination centers near you, and receive reminders for important immunizations.",
      image: vaccination,
      buttonText: "View Vaccination Info",
      onClick: () => console.log('Navigate to vaccination'),
      variant: 'highlight' as const,
    },
    {
      title: "Health Camps",
      description: "Discover upcoming health camps in your area. Free health checkups, consultations, and medical services in rural communities.",
      image: healthCamps,
      buttonText: "Find Health Camps",
      onClick: () => console.log('Navigate to health camps'),
    },
    {
      title: "Connect with Doctor",
      description: "Book instant video consultations, schedule appointments, or get medical advice from certified healthcare professionals.",
      image: telemedicine,
      buttonText: "Connect Now",
      onClick: () => console.log('Navigate to telemedicine'),
    },
  ];

  const quickActions = [
    { icon: Heart, text: "Health Checkup", color: "text-red-600" },
    { icon: Shield, text: "Vaccination", color: "text-blue-600" },
    { icon: Users, text: "Health Camp", color: "text-green-600" },
    { icon: Video, text: "Video Call", color: "text-teal-600" },
    { icon: Stethoscope, text: "Symptoms Check", color: "text-orange-600" },
    { icon: Calendar, text: "Appointments", color: "text-primary" },
  ];

  return (
    <div className="bg-background">
      {/* Alert Banner */}
      <AlertBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in slide-in-from-left duration-1000">
                  Your Health,
                  <span className="block text-yellow-300 animate-in slide-in-from-right duration-1000 delay-300">
                    Our Priority
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-xl animate-in fade-in duration-1000 delay-500">
                  Get instant health advice, connect with doctors, find vaccination centers, and join health camps in your community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in slide-in-from-bottom duration-1000 delay-700">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all group">
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Start Chat
                  </Button>
                  <Button variant="secondary" size="lg" className="group hover:shadow-lg transition-all">
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Emergency: 108
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-in slide-in-from-right duration-1000 delay-200">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={healthcareHero} 
                    alt="Healthcare professionals providing medical care" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-in fade-in duration-1000">
            <h2 className="text-2xl font-bold mb-2">Quick Health Services</h2>
            <p className="text-muted-foreground">Access essential health services instantly</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-in zoom-in-50 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <action.icon className={`w-8 h-8 mx-auto mb-3 ${action.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`} />
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{action.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chatbot Section */}
            <div className="lg:col-span-2 animate-in slide-in-from-left duration-1000">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Health Assistant</h2>
                <p className="text-muted-foreground mb-6">
                  Ask questions about symptoms, medications, vaccination schedules, or find nearby health services. 
                  Our AI assistant is here to help 24/7 in multiple languages.
                </p>
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <ChatbotInterface />
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="space-y-6 animate-in slide-in-from-right duration-1000 delay-300">
              <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                    Health Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors cursor-pointer group">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 group-hover:scale-105 transition-transform origin-left">Active Vaccination Drive</h4>
                    <p className="text-sm text-muted-foreground">COVID-19 booster shots available at nearby centers</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors cursor-pointer group">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2 group-hover:scale-105 transition-transform origin-left">Free Health Camp</h4>
                    <p className="text-sm text-muted-foreground">This weekend at Community Center - General checkup</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors cursor-pointer group">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2 group-hover:scale-105 transition-transform origin-left">Telemedicine Available</h4>
                    <p className="text-sm text-muted-foreground">Connect with doctors via video call instantly</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2">
                    <Phone className="w-5 h-5 animate-pulse" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center hover:bg-red-100 dark:hover:bg-red-950/30 p-2 rounded transition-colors">
                    <span className="text-sm font-medium">Ambulance</span>
                    <span className="font-bold text-red-600">108</span>
                  </div>
                  <div className="flex justify-between items-center hover:bg-red-100 dark:hover:bg-red-950/30 p-2 rounded transition-colors">
                    <span className="text-sm font-medium">Fire Emergency</span>
                    <span className="font-bold text-red-600">101</span>
                  </div>
                  <div className="flex justify-between items-center hover:bg-red-100 dark:hover:bg-red-950/30 p-2 rounded transition-colors">
                    <span className="text-sm font-medium">Police</span>
                    <span className="font-bold text-red-600">100</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full mt-4 bg-red-600 text-white hover:bg-red-700 animate-pulse hover:animate-none transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('tel:108')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in duration-1000">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Complete Healthcare Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From vaccination schedules to telemedicine consultations, we provide comprehensive health services 
              for rural and urban communities across the country.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="animate-in zoom-in-50 duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;