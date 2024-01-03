export class CreateCustomerDTO {
    readonly name: string;
    readonly cpfCnpj: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly addressNumber: string;
    readonly province: string;
    readonly postalCode: string;
    readonly mobilePhone: string;
    readonly complement: string;
    readonly externalReference: string;
    readonly notificationDisabled: boolean;
    readonly additionalEmails: string;
    readonly stateInscription: string;
    readonly municipalInscription: string;
    readonly observations: string;
  }