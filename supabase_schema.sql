-- ============================================================
-- Carteron Industries — Survey System Schema
-- Run this in your Supabase SQL editor
-- ============================================================

CREATE TABLE IF NOT EXISTS survey_submissions (
  id            UUID                     DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at    TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  survey_type   TEXT                     NOT NULL CHECK (survey_type IN ('club', 'family')),
  full_name     TEXT                     NOT NULL,
  email         TEXT                     NOT NULL,
  phone         TEXT,
  country       TEXT                     NOT NULL,
  organization_name TEXT,
  consent       BOOLEAN                  NOT NULL DEFAULT FALSE,
  answers       JSONB                    NOT NULL DEFAULT '{}',
  status        TEXT                     NOT NULL DEFAULT 'new'
                  CHECK (status IN ('new', 'contacted', 'qualified', 'pilot_candidate', 'closed')),
  admin_notes   TEXT
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_survey_type   ON survey_submissions (survey_type);
CREATE INDEX IF NOT EXISTS idx_status        ON survey_submissions (status);
CREATE INDEX IF NOT EXISTS idx_created_at    ON survey_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email         ON survey_submissions (email);

-- Enable Row Level Security
ALTER TABLE survey_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users (public survey submissions) to insert
CREATE POLICY "anon_insert_survey" ON survey_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admins) to read all submissions
CREATE POLICY "authenticated_select_survey" ON survey_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (admins) to update submissions
CREATE POLICY "authenticated_update_survey" ON survey_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
