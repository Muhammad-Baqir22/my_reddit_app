import {comment} from './comment.ResponseModel.js';
export interface Post  {
  title: string;
  content?: string | null;
  user_id: string;
  subreddit_id?: string | null;
  comment?:comment[]|null
};