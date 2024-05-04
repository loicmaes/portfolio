export interface ProjectThumbnail {
  src: string;
  alt?: string;
}
export interface ProjectClient {
  name: string;
  country: string;
}
export interface Project {
  uuid: string;
  name: string;
  description: string;
  tags: string[];
  thumbnail: ProjectThumbnail;
  client: ProjectClient;
  createdAt?: Date;
}
