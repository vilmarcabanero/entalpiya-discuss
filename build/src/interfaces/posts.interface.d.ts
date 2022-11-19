export interface Post {
    _id: string;
    userId: string;
    message: string;
    likers: string[];
    hidden: boolean;
    createdAt: Date;
    updatedAt: Date;
    version: number;
}
export interface HealthCheckResponse {
    healthcheck: string;
}
