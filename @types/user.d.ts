type User = {
  id_str: string
  name: string
  screen_name: string
  location: string | null
  description: string | null
  url: string | null
  protected: boolean
  followers_count: number
  friends_count: number
  listed_count: number
  created_at: string
  favourites_count: number
  verified: boolean
  statuses_count: number
  lang: string | null
  status: object
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
