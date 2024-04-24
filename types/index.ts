export type StudentInfoType = {
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  city: string;
  email: string;
  password: string;
  mobile: string;
  gender: string;
  profileImg: string;
  documentImg: string;
  status?: string;
  createdAt?: Date;
};

export type PaymentInfoType = {
  given_token: string;
  name: string;
  address: string;
  state: string;
  email: string;
  phone: string;
  student_id: string;
};
