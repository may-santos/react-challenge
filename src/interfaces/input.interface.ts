// import { ChangeEvent } from 'react';

export interface Input {
  placeholder: string;
  type?: string | 'text';
  onChange?: (e: any) => void;
  background?: string | null;
  height?: number;
}
