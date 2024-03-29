export interface CreateAccountDomain {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth: string;
  gender: number | string | string[];
  cpf: string;
  country: string | string[];
  telephone: string;
  subscribe: boolean;
  password: string;
  password_confirm: string;
}
