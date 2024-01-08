//   -------------------- PRODUCT RETRIEVAL

interface ProductsMetadata {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  prev: number;
  next: number;
}

export type Product = {
  id: number;
  name: string;
  durationTime: number;
  userId: number;
  deleted: null;
};

interface PaginatedProductsSuccess {
  timestamp: string;
  status: string;
  data: {
    data: Product[];
    meta: ProductsMetadata;
  };
  statusCode: number;
}

interface PaginatedProductsFail {
  errors: {
    message: string;
    error: string;
    statusCode: number;
  };
  timestamp: number;
}

export type PaginatedProducts =
  | PaginatedProductsSuccess
  | PaginatedProductsFail;

export const responseIsError = (
  response: PaginatedProducts
): response is PaginatedProductsFail => {
  if ("errors" in response) return true;
  return false;
};

//   -------------------- PRODUCT CREATION

export interface ProductCreationFailed {
  msg: string;
  status: "failed";
  timestamp: number;
}

export interface ProductCreatedSuccessfully {
  timestamp: string;
  status: "success";
  data: Product;
  statusCode: number;
}

export type ProductCreation =
  | ProductCreatedSuccessfully
  | ProductCreationFailed;

export const productWasNotCreated = (
  response: ProductCreation
): response is ProductCreationFailed => {
  if (response.status === "failed") return true;
  return false;
};

//   -------------------- PRODUCT DELETION

interface ProductDeletedSuccessfully {
  timestamp: string;
  status: "success";
  data: Product;
  statusCode: 200;
}

interface ProductDeletionFailed {
  timestamp: string;
  status: "success";
  data: null;
  statusCode: 200;
}

export type ProductDeletion =
  | ProductDeletedSuccessfully
  | ProductDeletionFailed;
