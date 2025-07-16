export interface comment {
    content: String,
    created_at:Date
    user_id:String,
    post_id:String,
    parent_comment_id?: String | null
    replies?: comment[];
}