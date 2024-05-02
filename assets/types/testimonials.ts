export interface TestimonialAuthor {
  name: string;
  company: string;
}
export interface Testimonial {
  author: TestimonialAuthor;
  mark: number;
  quote: string;
}
