export interface ProjectThumbnail {
  src: string;
  alt?: string;
}
export interface ProjectClient {
  name: string;
  country: string;
}
export interface Project {
  name: string;
  description: string;
  tags: string[];
  thumbnail: ProjectThumbnail;
  client: ProjectClient;
}
