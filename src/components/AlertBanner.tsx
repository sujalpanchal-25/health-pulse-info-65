import { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertTriangle, X, Bell } from 'lucide-react';

interface HealthAlert {
  id: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
  location: string;
  timestamp: Date;
}

const AlertBanner = () => {
  const [alerts, setAlerts] = useState<HealthAlert[]>([]);
  const [currentAlert, setCurrentAlert] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate real-time alerts (replace with actual API)
    const mockAlerts: HealthAlert[] = [
      {
        id: '1',
        message: 'Flu outbreak reported in Delhi region. Vaccination drive active.',
        severity: 'medium',
        location: 'Delhi',
        timestamp: new Date(),
      },
      {
        id: '2',
        message: 'Free health camp tomorrow at Community Center, Mumbai.',
        severity: 'low',
        location: 'Mumbai',
        timestamp: new Date(),
      },
      {
        id: '3',
        message: 'Dengue alert: Increased cases in Kolkata. Take preventive measures.',
        severity: 'high',
        location: 'Kolkata',
        timestamp: new Date(),
      },
    ];

    setAlerts(mockAlerts);

    // Rotate alerts every 5 seconds
    const interval = setInterval(() => {
      setCurrentAlert(prev => (prev + 1) % mockAlerts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible || alerts.length === 0) return null;

  const alert = alerts[currentAlert];
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-l-red-500 bg-red-50 dark:bg-red-950/10';
      case 'medium': return 'border-l-orange-500 bg-orange-50 dark:bg-orange-950/10';
      default: return 'border-l-blue-500 bg-blue-50 dark:bg-blue-950/10';
    }
  };

  return (
    <div className={`border-l-4 p-4 ${getSeverityColor(alert.severity)} relative animate-in slide-in-from-top duration-300`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {alert.severity === 'high' ? (
              <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
            ) : (
              <Bell className="w-5 h-5 text-primary" />
            )}
            <span className="font-semibold text-sm uppercase tracking-wider">
              Health Alert - {alert.location}
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      <p className="mt-2 text-sm text-foreground">{alert.message}</p>
      <div className="flex items-center gap-4 mt-2">
        <span className="text-xs text-muted-foreground">
          {alert.timestamp.toLocaleString()}
        </span>
        <div className="flex gap-1">
          {alerts.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentAlert ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;