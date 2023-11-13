export enum UserRole {
  ADMIN = 'admin',
  DOCTOR = 'doctor',
  RECEPCIONIST = 'recepcionist',
}

export enum AppointmentStatus {
  SCHEDULED = 'schedule',
  WAITING = 'waiting',
  // TO-DO : ask for the other possible status
}

export enum PaymentMethods {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  DEPOSIT = 'deposit',
  CASH = 'cash',
}
