export interface Bot {
  name: string;
  descr?: string;
  date: Date;
  // TODO type
  icon: File | null;
  uid: string; // uniq
}
