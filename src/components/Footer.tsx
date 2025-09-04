import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Heart, 
  Shield,
  Send,
  MessageCircle,
  Star,
  Award,
  Globe,
  Stethoscope
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const stats = [
    { icon: Users, value: '50,000+', label: 'Users Helped', color: 'text-blue-600' },
    { icon: Stethoscope, value: '500+', label: 'Doctors Available', color: 'text-green-600' },
    { icon: Heart, value: '1M+', label: 'Health Queries', color: 'text-red-600' },
    { icon: Globe, value: '6', label: 'Languages', color: 'text-purple-600' },
  ];

  const services = [
    'AI Health Chatbot',
    'Telemedicine Consultations',
    'Vaccination Tracking',
    'Health Camp Locations',
    'Emergency Services',
    'Symptom Checker'
  ];

  const emergencyContacts = [
    { service: 'Ambulance', number: '108', available: '24/7' },
    { service: 'Fire Emergency', number: '101', available: '24/7' },
    { service: 'Police', number: '100', available: '24/7' },
    { service: 'Health Helpline', number: '104', available: '24/7' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      {/* Stats Section */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Making Healthcare Accessible</h2>
            <p className="text-muted-foreground">Connecting communities with quality healthcare services</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* About Us Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">HealthBot</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                About Us
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                HealthBot is a revolutionary multilingual AI-powered healthcare platform designed to bridge 
                the gap between rural communities and quality healthcare services. We provide 24/7 health 
                assistance, connect patients with qualified doctors, and ensure everyone has access to 
                essential health information.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  Our Mission
                </h4>
                <p className="text-sm text-muted-foreground">
                  To democratize healthcare access through technology, making quality medical advice 
                  and services available to everyone, regardless of location or language barriers.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Our Services:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold">Certified & Trusted</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  All our medical information is verified by licensed healthcare professionals 
                  and follows international health guidelines.
                </p>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                Contact Us
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      We'd love to hear from you. Send us a message and we'll respond within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:shadow-md"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:shadow-md"
                        />
                      </div>
                      <div>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="transition-all duration-300 focus:shadow-md"
                        />
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="transition-all duration-300 focus:shadow-md"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full group hover:shadow-lg transition-all duration-300"
                      >
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-6">
                  {/* Contact Details */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Get in Touch</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        <div>
                          <div className="font-medium">Address</div>
                          <div className="text-sm text-muted-foreground">
                            123 Health Street, Medical District<br />
                            New Delhi, India 110001
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <Phone className="w-5 h-5 text-green-500" />
                        <div>
                          <div className="font-medium">Phone</div>
                          <div className="text-sm text-muted-foreground">
                            +91 1800-HEALTH (1800-432584)
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <Mail className="w-5 h-5 text-red-500" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">
                            support@healthbot.com
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <Clock className="w-5 h-5 text-purple-500" />
                        <div>
                          <div className="font-medium">Support Hours</div>
                          <div className="text-sm text-muted-foreground">
                            24/7 Emergency Support<br />
                            Mon-Fri 9AM-6PM for General Queries
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Emergency Contacts */}
                  <Card className="shadow-lg border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-red-700 dark:text-red-300">Emergency Contacts</CardTitle>
                      <CardDescription>Available 24/7 for immediate assistance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {emergencyContacts.map((contact, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-950/20 rounded">
                            <div>
                              <div className="font-medium text-sm">{contact.service}</div>
                              <div className="text-xs text-muted-foreground">{contact.available}</div>
                            </div>
                            <Button 
                              size="sm" 
                              className="bg-red-600 hover:bg-red-700 text-white"
                              onClick={() => window.open(`tel:${contact.number}`)}
                            >
                              {contact.number}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="bg-muted/30 border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 HealthBot. All rights reserved. | Healthcare for Everyone, Everywhere.
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-xs">Privacy Policy</Button>
              <Button variant="ghost" size="sm" className="text-xs">Terms of Service</Button>
              <Button variant="ghost" size="sm" className="text-xs">Accessibility</Button>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-muted-foreground">
                Trusted by thousands of users across India for reliable health information
              </span>
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;