import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  mobile: string;
  uan: string | null;
  message: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }

      await actor.submitContactForm(
        data.name,
        data.mobile,
        data.uan,
        data.message
      );
    },
    onSuccess: () => {
      // Invalidate any queries that might depend on submissions
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    }
  });
}
