import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { useSubmitContactForm } from '../hooks/useSubmitContactForm';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [uan, setUan] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: submitForm, isPending, isError, error } = useSubmitContactForm();

  const validateMobile = (value: string): boolean => {
    // Allow digits, spaces, +, and - characters
    const mobileRegex = /^[\d\s+\-()]+$/;
    return mobileRegex.test(value) && value.replace(/\D/g, '').length >= 10;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!validateMobile(mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number (at least 10 digits)';
    }

    if (!message.trim()) {
      newErrors.message = 'Please describe your PF issue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    if (!validateForm()) {
      return;
    }

    submitForm(
      {
        name: name.trim(),
        mobile: mobile.trim(),
        uan: uan.trim() || null,
        message: message.trim()
      },
      {
        onSuccess: () => {
          setShowSuccess(true);
          setName('');
          setMobile('');
          setUan('');
          setMessage('');
          setErrors({});
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        }
      }
    );
  };

  return (
    <Card className="shadow-xl border-2">
      <CardContent className="p-8">
        {showSuccess && (
          <div className="mb-6 p-4 bg-[oklch(0.85_0.15_150)]/10 border-2 border-[oklch(0.85_0.15_150)] rounded-lg flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-[oklch(0.85_0.15_150)] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[oklch(0.30_0.10_150)] mb-1">
                Thank you for contacting us!
              </h3>
              <p className="text-sm text-[oklch(0.35_0.08_150)]">
                We've received your inquiry and will get back to you shortly.
              </p>
            </div>
          </div>
        )}

        {isError && (
          <div className="mb-6 p-4 bg-destructive/10 border-2 border-destructive rounded-lg flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-destructive mb-1">
                Submission Failed
              </h3>
              <p className="text-sm text-destructive/90">
                {error?.message || 'There was an error submitting your form. Please try again.'}
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              Your Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) {
                  setErrors({ ...errors, name: '' });
                }
              }}
              className={errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}
              disabled={isPending}
            />
            {errors.name && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-base font-semibold">
              Mobile Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                if (errors.mobile) {
                  setErrors({ ...errors, mobile: '' });
                }
              }}
              className={errors.mobile ? 'border-destructive focus-visible:ring-destructive' : ''}
              disabled={isPending}
            />
            {errors.mobile && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.mobile}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="uan" className="text-base font-semibold">
              UAN (Optional)
            </Label>
            <Input
              id="uan"
              type="text"
              placeholder="Enter your UAN if available"
              value={uan}
              onChange={(e) => setUan(e.target.value)}
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-semibold">
              Describe your PF issue <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Please provide details about your EPF/EPS issue..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) {
                  setErrors({ ...errors, message: '' });
                }
              }}
              className={`min-h-[120px] ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              disabled={isPending}
            />
            {errors.message && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.message}
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-gradient-to-r from-[oklch(0.45_0.15_250)] to-[oklch(0.35_0.20_270)] hover:from-[oklch(0.40_0.15_250)] hover:to-[oklch(0.30_0.20_270)] font-semibold shadow-lg"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
