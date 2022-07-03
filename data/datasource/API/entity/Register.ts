export interface RegisterBody {
    email: string;
    password: string;
}

export interface RegisterResponse {
    "success": boolean;
    "message": string;
    "data": dataRegister;
}

interface dataRegister {
    email: string;
    updated_at: string;
    created_at: string;
    id: string;
}