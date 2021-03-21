export interface Issue
{
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string ;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  },
  labels: [];
  state: string;
  locked: true;
  assignee: null;
  assignees: [];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  author_association: string;
  active_lock_reason: null;
  body: string;
  performed_via_github_app: string;
}

export type Issues = Issue[];
