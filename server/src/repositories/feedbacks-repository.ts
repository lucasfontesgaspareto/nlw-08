export interface FeedbackCreateData {
  id?: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (feedback: FeedbackCreateData) => Promise<void>;
  list: () => Promise<FeedbackCreateData[]>;
}