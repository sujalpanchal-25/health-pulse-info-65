import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onClick: () => void;
  variant?: 'default' | 'highlight';
}

const FeatureCard = ({ 
  title, 
  description, 
  image, 
  buttonText, 
  onClick, 
  variant = 'default' 
}: FeatureCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
      variant === 'highlight' ? 'ring-2 ring-primary ring-opacity-20' : ''
    }`}>
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </CardDescription>
        <Button 
          onClick={onClick}
          variant={variant === 'highlight' ? 'default' : 'outline'}
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;