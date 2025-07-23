#!/bin/bash
set -e

# Path to Marker File
MARKER_FILE="/app/tmp/.initial-clues-scraped"

echo "Preparing Database (Create & Migrate)..."
bundle exec rails db:prepare

# Scrape Clues from JService on First Load Only.
if [ ! -f "$MARKER_FILE" ]; then
  echo "First Startup: Scraping Clues from JService..."
  bundle exec rake 'get_clues[40,41]' # Gets Clues from Seasons 40-41 (Last 2 Seasons)

  # Create Marker File
  mkdir -p "$(dirname "$MARKER_FILE")"
  touch "$MARKER_FILE"
else
  echo "Not First Startup. Skipped Scraping Clues from JService."
fi


echo "Starting Rails Server..."
exec "$@"
