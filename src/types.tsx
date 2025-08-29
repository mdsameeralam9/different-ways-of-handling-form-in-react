export interface FormState {
  email: string;
  password: string;
}

export interface FormInput {
  label: string;
  name: string;
  value?: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps{
  loading?: boolean;
  type?: 'submit' | 'button';
  label?: string;
  handleActioninButton?: boolean;
}

// Exact action type for useActionState
export type HandleFormSubmit = (
  prevState: FormState,
  formData: FormData
) => Promise<FormState> | FormState;