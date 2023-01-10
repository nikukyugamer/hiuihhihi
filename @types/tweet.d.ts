type Tweet<T> = {
  created_at: string
  id_str: string
  full_text: string
  entities: {
    hashtags: Array<any>
    symbols: Array<any>
    user_mentions: Array<any>
    urls: Array<string>
    media: Array<any>
  }
  extended_entities: object
  source: string
  in_reply_to_status_id_str: string | null
  in_reply_to_user_id_str: string | null
  in_reply_to_screen_name: string | null
  is_quote_status: boolean
  retweet_count: number
  favorite_count: number
  favorited: boolean
  retweeted: boolean
  possibly_sensitive: boolean
  possibly_sensitive_appealable: boolean
  lang: string
  retweeted_status: T
  // TODO: User 型を入れる
  user: {
    id_str: string
    name: string
    screen_name: string
    location: string | null
    url: string | null
    followers_count: number
    friends_count: number
    listed_count: number
    created_at: string
    favourites_count: number
    verified: boolean
    statuses_count: number
    lang: string | null
    is_translator: boolean
    is_translation_enabled: boolean
    profile_background_color: string
    profile_background_image_url: string
    profile_background_image_url_https: string
    profile_background_tile: boolean
    profile_image_url: string
    profile_image_url_https: string
    profile_banner_url: string
    profile_link_color: string
    profile_sidebar_border_color: string
    profile_sidebar_fill_color: string
    profile_text_color: string
    profile_use_background_image: boolean
  }
}
