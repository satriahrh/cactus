export type ThreadSummary = {
  id: number;
  lastUpdated: string;
  title: string;
  locationDisplay: string;
  numberOfReply: number;
  numberOfUpVote: number;
  authorName: string;
  authorAvatarUrl: string;
  reportState: string;
  type: string;
};

export interface ThreadDetail extends ThreadSummary {
  content: string;
  images: Array<string>;
  replies: Array<ThreadReply>;
}

export type ThreadReply = {
  id: number;
  authorAvatarUrl: string;
  authorName: string;
  content: string;
  timestamp: string;
  numberOfUpVote: number;
  replies: Array<ThreadReplyReply>;
};

type ThreadReplyReply = {
  id: number;
  authorAvatarUrl: string;
  authorName: string;
  content: string;
  timestamp: string;
};
