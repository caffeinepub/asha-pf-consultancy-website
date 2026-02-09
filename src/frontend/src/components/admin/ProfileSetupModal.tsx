import { useState } from 'react';
import { useSaveCallerUserProfile } from '../../hooks/useSaveCallerUserProfile';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { ArrowLeft, AlertCircle } from 'lucide-react';

interface ProfileSetupModalProps {
  onBack: () => void;
}

export function ProfileSetupModal({ onBack }: ProfileSetupModalProps) {
  const [name, setName] = useState('');
  const { mutate: saveProfile, isPending, error } = useSaveCallerUserProfile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      saveProfile({ name: name.trim() });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
          <CardDescription>
            Please enter your name to complete your profile setup.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isPending}
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Failed to save profile. Please try again.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-3">
              <Button type="button" onClick={onBack} variant="outline" className="flex-1" disabled={isPending}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit" className="flex-1" disabled={isPending || !name.trim()}>
                {isPending ? 'Saving...' : 'Continue'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
