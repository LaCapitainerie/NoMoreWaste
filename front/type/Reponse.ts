
export interface ResponseCustom<T> {
    success: boolean;
    result: T;
    error: string | null;
}