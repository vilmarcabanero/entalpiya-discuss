export declare const postCreated: {
    _id: string;
    userId: string;
    message: string;
    likers: any[];
    hidden: boolean;
    createdAt: string;
    updatedAt: string;
    version: number;
};
export declare function token(): Promise<string>;
export declare function createPost(): Promise<void>;
