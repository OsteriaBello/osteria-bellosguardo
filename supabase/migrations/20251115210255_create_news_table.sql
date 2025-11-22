/*
  # Create news and events table

  1. New Tables
    - `news`
      - `id` (uuid, primary key) - Unique identifier
      - `title_pt` (text) - Title in Portuguese
      - `title_en` (text) - Title in English
      - `content_pt` (text) - Content in Portuguese
      - `content_en` (text) - Content in English
      - `type` (text) - Type: 'news', 'event', 'announcement'
      - `image_url` (text, optional) - URL of the image
      - `published` (boolean) - Whether the news is published
      - `event_date` (timestamptz, optional) - Date of event if applicable
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `news` table
    - Add policy for anyone to read published news
    - Add policy for authenticated users to manage all news (for admin)

  3. Important Notes
    - The table supports multilingual content (PT/EN)
    - News can be filtered by type and publication status
    - Event dates are optional for non-event posts
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_pt text NOT NULL,
  title_en text NOT NULL,
  content_pt text NOT NULL,
  content_en text NOT NULL,
  type text NOT NULL DEFAULT 'news' CHECK (type IN ('news', 'event', 'announcement')),
  image_url text,
  published boolean DEFAULT false,
  event_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published news"
  ON news
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can view all news"
  ON news
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert news"
  ON news
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS news_published_idx ON news(published);
CREATE INDEX IF NOT EXISTS news_type_idx ON news(type);
CREATE INDEX IF NOT EXISTS news_created_at_idx ON news(created_at DESC);