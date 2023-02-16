export interface News {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: Date;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: Date;
  crossposted_at: string | null;
  published_at: Date;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: [string, string];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
}
