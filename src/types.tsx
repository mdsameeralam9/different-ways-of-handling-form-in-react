export interface FormState {
  email: string;
  password: string;
}

export interface FormInput {
  label: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
