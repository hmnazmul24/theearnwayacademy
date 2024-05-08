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
  registration_no?: number;
  status?: string;
  createdAt?: Date;
  _id?: string;
};
export type RegistrationInfoType = {
  fullName: string;
  state: string;
  city: string;
  email: string;
  mobile: string;
  gender: string;
  profileImg: string;
  registration_no: number;
  _id: string;
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

// branch info
export type BranchInfoType = {
  name: string;
  email: string;
  phone: string;
  computer: string;
};
export type BranchPersonInfoType = {
  name: string;
  father: string;
  mother: string;
  gender: string;
};
export type MoreBranchInfoType = {
  name: string;
  mobile: string;
  district: string;
  upozila: string;
  address: string;
  postcode: string;
};
export type BranchDocumentInfo = {
  personal_img: string;
  id_card_img: string;
  trade_licence_img: string;
  bank_statement_img: string;
};
