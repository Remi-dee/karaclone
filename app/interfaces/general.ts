export interface ImageComponentProps {
  src: string;
  className?: string;
  color?: string;
}

export type LoginLayoutTypes = {
  children: React.ReactNode;
};

export type CustomButtonProps = {
  label: string;
  icon?: React.ReactNode;
  action?: () => void;
  className?: string;
  loading?: boolean;
};

export interface FieldError {
  code: string;
  expected: string;
  recieved: string;
  path: string[];
  message: string;
}

export interface ErrorObject {
  error?: string | null;
  errors?: FieldError[];
}

export interface CommonAttributes {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export class CommonDataResponse {
  errors?: FieldError[];
  count?: number;
  error?: string;
}

export type ToastProps = {
  message: string;
  position:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right";
};

export interface DashboardLayoutType {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export interface NavLink {
  name: string;
  icon?: React.ReactNode;
  link: string;
}
