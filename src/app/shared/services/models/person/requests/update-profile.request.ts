export class UpdateProfileRequest {
  public name?: string;
  public email?: string;
  public phone?: string;
  public image?: File;

  constructor(
    name?: string,
    email?: string,
    phone?: string,
    image?: File
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.image = image;
  }
}