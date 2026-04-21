export type ServiceLink = {
  name: string;
  url: string;
};

export type ServiceModel = {
  label: string;
  title: string;
  description: string;
  buttonName: string;
  links: ServiceLink[];
};
