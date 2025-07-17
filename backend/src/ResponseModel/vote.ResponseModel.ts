export interface Vote {
    success:boolean,
    message:string,
    post_id?: string|null,
    comment_id?:string|null
}